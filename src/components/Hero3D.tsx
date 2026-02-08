"use client";

import { useRef, useMemo, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment, ContactShadows, Stars } from '@react-three/drei';
import * as THREE from 'three';

function NeuralNetwork({ count = 80, connections = 100 }) {
    const points = useMemo(() => {
        const p = new Float32Array(count * 3);
        const colors = new Float32Array(count * 3);

        // Palette: Green, Purple, Cyan, Magenta using neon/vibrant variants
        const palette = [
            new THREE.Color("#39ff14"), // Neon Green
            new THREE.Color("#b026ff"), // Neon Purple
            new THREE.Color("#00ffff"), // Cyan
            new THREE.Color("#ff00ff"), // Magenta
        ];

        for (let i = 0; i < count; i++) {
            const x = (Math.random() - 0.5) * 10;
            const y = (Math.random() - 0.5) * 10;
            const z = (Math.random() - 0.5) * 10;
            p.set([x, y, z], i * 3);

            // Assign random color from palette
            const color = palette[Math.floor(Math.random() * palette.length)];
            colors.set([color.r, color.g, color.b], i * 3);
        }
        return { positions: p, colors };
    }, [count]);

    const linesGeometry = useMemo(() => {
        const geometry = new THREE.BufferGeometry();
        const linePositions = [];
        const lineColors = [];

        // Create random connections
        for (let i = 0; i < count; i++) {
            for (let j = i + 1; j < count; j++) {
                const dist = Math.sqrt(
                    Math.pow(points.positions[i * 3] - points.positions[j * 3], 2) +
                    Math.pow(points.positions[i * 3 + 1] - points.positions[j * 3 + 1], 2) +
                    Math.pow(points.positions[i * 3 + 2] - points.positions[j * 3 + 2], 2)
                );

                if (dist < 4.0) {
                    linePositions.push(
                        points.positions[i * 3], points.positions[i * 3 + 1], points.positions[i * 3 + 2],
                        points.positions[j * 3], points.positions[j * 3 + 1], points.positions[j * 3 + 2]
                    );

                    // Connection Color: Gradient from start node to end node
                    lineColors.push(
                        points.colors[i * 3], points.colors[i * 3 + 1], points.colors[i * 3 + 2], // Start vertex color
                        points.colors[j * 3], points.colors[j * 3 + 1], points.colors[j * 3 + 2]  // End vertex color
                    );
                }
            }
        }

        geometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
        geometry.setAttribute('color', new THREE.Float32BufferAttribute(lineColors, 3));
        return geometry;
    }, [points, count]);

    const group = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (group.current) {
            group.current.rotation.y = state.clock.getElapsedTime() * 0.05;
            group.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.1) * 0.1;
        }
    });

    return (
        <group ref={group}>
            {/* Nodes */}
            <points>
                <bufferGeometry>
                    <bufferAttribute
                        attach="attributes-position"
                        args={[points.positions, 3]}
                    />
                    <bufferAttribute
                        attach="attributes-color"
                        args={[points.colors, 3]}
                    />
                </bufferGeometry>
                <pointsMaterial
                    size={0.15}
                    vertexColors
                    transparent
                    opacity={0.8}
                    sizeAttenuation
                    blending={THREE.AdditiveBlending}
                />
            </points>

            {/* Connections */}
            <lineSegments geometry={linesGeometry}>
                <lineBasicMaterial
                    vertexColors
                    transparent
                    opacity={0.5} // Slightly lower opacity for lines to let nodes pop
                    blending={THREE.AdditiveBlending}
                    depthWrite={false}
                />
            </lineSegments>
        </group>
    );
}

function Scene() {
    return (
        <group>
            <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
                <NeuralNetwork count={150} />
            </Float>
            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} color="#39ff14" /> {/* Green light */}
            <pointLight position={[-10, 10, -10]} intensity={1} color="#b026ff" /> {/* Purple light */}
            <Environment preset="city" />
        </group>
    );
}

export default function Hero3D({ className = "w-full h-full" }: { className?: string }) {
    return (
        <div className={`${className} relative z-0`}>
            <Canvas camera={{ position: [0, 0, 12], fov: 45 }} gl={{ antialias: true, alpha: true }}>
                <Scene />
            </Canvas>
        </div>
    );
}
