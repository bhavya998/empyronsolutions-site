"use client";

import { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { EffectComposer, Bloom, ChromaticAberration, Noise } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import * as THREE from "three";

// --- VISIBLE DARK NEURAL FIELD ---
function NeuralField() {
    const points = useRef<THREE.Points>(null);
    const lines = useRef<THREE.LineSegments>(null);

    const { positions, connections, colors, sizes } = useMemo(() => {
        const nodeCount = 400;
        const positions = new Float32Array(nodeCount * 3);
        const colors = new Float32Array(nodeCount * 3);
        const sizes = new Float32Array(nodeCount);

        const colorPrimary = new THREE.Color("#15803d");
        const colorSecondary = new THREE.Color("#14532d");

        for (let i = 0; i < nodeCount; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 45;
            positions[i * 3 + 1] = (Math.random() - 0.5) * 25;
            positions[i * 3 + 2] = (Math.random() - 0.5) * 15;

            const mixedColor = colorPrimary.clone().lerp(colorSecondary, Math.random());
            colors[i * 3] = mixedColor.r;
            colors[i * 3 + 1] = mixedColor.g;
            colors[i * 3 + 2] = mixedColor.b;

            sizes[i] = Math.random() < 0.2 ? 0.25 : 0.12;
        }

        const connectionPoints: number[] = [];
        for (let i = 0; i < nodeCount; i++) {
            const x1 = positions[i * 3];
            const y1 = positions[i * 3 + 1];
            const z1 = positions[i * 3 + 2];

            for (let j = i + 1; j < nodeCount; j++) {
                const dx = x1 - positions[j * 3];
                const dy = y1 - positions[j * 3 + 1];
                const dz = z1 - positions[j * 3 + 2];

                const distSq = dx * dx + dy * dy + dz * dz;
                if (distSq < 14) {
                    connectionPoints.push(
                        x1, y1, z1,
                        positions[j * 3], positions[j * 3 + 1], positions[j * 3 + 2]
                    );
                }
            }
        }

        return {
            positions,
            connections: new Float32Array(connectionPoints),
            colors,
            sizes
        };
    }, []);

    // Use imperative API to set geometry attributes
    useEffect(() => {
        if (points.current) {
            const geometry = points.current.geometry;
            geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
            geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
            geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
        }
        if (lines.current) {
            const geometry = lines.current.geometry;
            geometry.setAttribute('position', new THREE.BufferAttribute(connections, 3));
        }
    }, [positions, colors, sizes, connections]);

    useFrame((state) => {
        const t = state.clock.getElapsedTime() * 0.08;
        if (points.current) {
            points.current.rotation.y = t * 0.2;
            points.current.position.y = Math.sin(t) * 0.5;
        }
        if (lines.current) {
            lines.current.rotation.y = t * 0.2;
            lines.current.position.y = Math.sin(t) * 0.5;
        }
    });

    return (
        <group>
            <points ref={points}>
                <bufferGeometry />
                <pointsMaterial vertexColors size={0.15} transparent opacity={0.9} sizeAttenuation />
            </points>
            <lineSegments ref={lines}>
                <bufferGeometry />
                <lineBasicMaterial color="#15803d" transparent opacity={0.15} />
            </lineSegments>
        </group>
    );
}

// --- VISIBLE DATA STREAMS ---
function DataStreams() {
    const linesRef = useRef<THREE.Group>(null);

    const streams = useMemo(() => {
        return new Array(35).fill(0).map((_, i) => ({
            x: (Math.random() - 0.5) * 40,
            y: (Math.random() - 0.5) * 20,
            z: (Math.random() - 0.5) * 10,
            length: 2 + Math.random() * 5,
            speed: 0.05 + Math.random() * 0.1
        }));
    }, []);

    useFrame((state) => {
        if (linesRef.current) {
            linesRef.current.children.forEach((child, i) => {
                const stream = streams[i];
                child.position.y -= stream.speed * 0.2;
                if (child.position.y < -15) {
                    child.position.y = 15;
                }
            });
        }
    });

    return (
        <group ref={linesRef}>
            {streams.map((s, i) => (
                <mesh key={i} position={[s.x, s.y, s.z]}>
                    <cylinderGeometry args={[0.02, 0.02, s.length, 6]} />
                    <meshBasicMaterial color="#166534" transparent opacity={0.5} />
                </mesh>
            ))}
        </group>
    );
}

export default function FloatingShape() {
    return (
        <div className="w-full h-full pointer-events-none opacity-80">
            <Canvas
                camera={{ position: [0, 0, 18], fov: 60 }}
                gl={{ antialias: false, alpha: true, powerPreference: "high-performance" }}
                dpr={[1, 2]}
            >
                <ambientLight intensity={0.6} />

                <NeuralField />
                <DataStreams />

                <EffectComposer>
                    <Bloom
                        luminanceThreshold={0.1}
                        mipmapBlur
                        intensity={0.8}
                        radius={0.4}
                        blendFunction={BlendFunction.SCREEN}
                    />
                    <Noise opacity={0.02} />
                    <ChromaticAberration offset={new THREE.Vector2(0.0004, 0.0004)} />
                </EffectComposer>
            </Canvas>
        </div>
    );
}
