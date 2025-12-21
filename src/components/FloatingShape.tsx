"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { EffectComposer, Bloom, ChromaticAberration, Noise } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import * as THREE from "three";

// --- VISIBLE DARK NEURAL FIELD ---
// Adjusted to be VISIBLE but still DARKER than the original neon version.
function NeuralField() {
    const points = useRef<THREE.Points>(null);
    const lines = useRef<THREE.LineSegments>(null);

    const { positions, connections, colors, sizes } = useMemo(() => {
        const nodeCount = 400;
        const positions = new Float32Array(nodeCount * 3);
        const colors = new Float32Array(nodeCount * 3);
        const sizes = new Float32Array(nodeCount);

        // DARK-MID GREENS (Visible on Black)
        // #15803d is green-700, #166534 is green-800
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

            sizes[i] = Math.random() < 0.2 ? 0.25 : 0.12; // Slightly larger for visibility
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
                if (distSq < 14) { // Slightly increased connection distance
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

    useFrame((state) => {
        const t = state.clock.getElapsedTime() * 0.08; // Slightly faster for liveliness
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
                <bufferGeometry>
                    <bufferAttribute attach="attributes-position" count={positions.length / 3} array={positions} itemSize={3} />
                    <bufferAttribute attach="attributes-color" count={colors.length / 3} array={colors} itemSize={3} />
                    <bufferAttribute attach="attributes-size" count={sizes.length} array={sizes} itemSize={1} />
                </bufferGeometry>
                {/* Increased opacity to be visible */}
                <pointsMaterial vertexColors size={0.15} transparent opacity={0.9} sizeAttenuation={true} />
            </points>
            <lineSegments ref={lines}>
                <bufferGeometry>
                    <bufferAttribute attach="attributes-position" count={connections.length / 3} array={connections} itemSize={3} />
                </bufferGeometry>
                {/* Visible lines but still subtle */}
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
                    {/* Increased opacity */}
                    <meshBasicMaterial color="#166534" transparent opacity={0.5} />
                </mesh>
            ))}
        </group>
    );
}

export default function FloatingShape() {
    return (
        // Removed the opacity-30 class causing it to disappear
        // Using opacity-100 (default) but controlling visibility via materials
        <div className="w-full h-full pointer-events-none opacity-80">
            <Canvas
                camera={{ position: [0, 0, 18], fov: 60 }}
                gl={{ antialias: false, alpha: true, powerPreference: "high-performance" }}
                dpr={[1, 2]}
            >
                <ambientLight intensity={0.6} /> {/* Increased light */}

                <NeuralField />
                <DataStreams />

                <EffectComposer disableNormalPass>
                    <Bloom
                        luminanceThreshold={0.1}
                        mipmapBlur
                        intensity={0.8} // Restored some bloom
                        radius={0.4}
                        blendFunction={BlendFunction.SCREEN}
                    />
                    <Noise opacity={0.02} />
                    <ChromaticAberration offset={[0.0004, 0.0004]} />
                </EffectComposer>
            </Canvas>
        </div>
    );
}
