import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { EffectComposer, Bloom } from '@react-three/postprocessing';

const NeuralCore = () => {
    const particlesRef = useRef<THREE.Points>(null);
    const materialRef = useRef<THREE.ShaderMaterial>(null);

    // Optimized particle count for high frame rates and a sleek look
    const count = 40000;

    const [positions, colors, randoms] = useMemo(() => {
        const _positions = new Float32Array(count * 3);
        const _colors = new Float32Array(count * 3);
        const _randoms = new Float32Array(count);

        const color1 = new THREE.Color("#ff107a"); // Vibrant Neon Pink Core
        const color2 = new THREE.Color("#00f0ff"); // Electric Cyan Halo
        const color3 = new THREE.Color("#6018fa"); // Deep Cyber Purple Outer

        for (let i = 0; i < count; i++) {
            // Distribute on a complex accretion disk/neural network shape
            const r = Math.random();

            // Focus more particles towards the center (Gravitational pull / core logic)
            const radius = Math.pow(r, 2.0) * 12.0;

            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos((Math.random() * 2) - 1);

            // Squeeze Y to make an accretion disk/galaxy plane
            let x = radius * Math.sin(phi) * Math.cos(theta);
            let y = radius * Math.cos(phi) * 0.15 + (Math.random() - 0.5) * 0.5; // Thin disk with slight fuzz
            let z = radius * Math.sin(phi) * Math.sin(theta);

            // Create an Event Horizon / Inner Core void
            if (radius < 2.0) {
                // Push particles out to the event horizon edge
                const scale = 2.0 / (radius + 0.1);
                x *= scale;
                y *= scale;
                z *= scale;
            }

            _positions.set([x, y, z], i * 3);

            // Interpolate colors based on angular position and radius
            let mixColor = color1.clone().lerp(color2, Math.sin(theta * 3.0 + radius) * 0.5 + 0.5);

            // Fade to dark void at the outer galactic edges
            if (radius > 10.0) {
                mixColor.lerp(color3, (radius - 10.0) / 2.0);
            }

            _colors.set([mixColor.r, mixColor.g, mixColor.b], i * 3);

            // Random offset for organic, chaotic movement
            _randoms[i] = Math.random();
        }

        return [_positions, _colors, _randoms];
    }, [count]);

    // Custom Shaders defining God-Level aesthetic logic
    const uniforms = useMemo(() => ({
        uTime: { value: 0 }
    }), []);

    const vertexShader = `
        uniform float uTime;
        attribute vec3 aColor;
        attribute float aRandom;
        
        varying vec3 vColor;

        void main() {
            vColor = aColor;
            
            vec3 pos = position;
            
            // Optimized distance and angle calculations
            float dist = length(pos.xz);
            float angle = atan(pos.z, pos.x);
            
            // Smoother, professional orbital flow
            float spiral = (2.0 / (dist + 0.5)) * uTime * 0.2;
            
            // Sleek sine wave instead of chaotic noise
            float wave = sin(uTime * 1.5 + dist * 3.0 + aRandom * 10.0) * 0.1;
            
            pos.x = cos(angle + spiral) * dist;
            pos.z = sin(angle + spiral) * dist;
            
            // Gentle height variance
            pos.y += wave * (1.5 / (dist + 1.0));

            vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
            
            // Smoother point sizing
            gl_PointSize = (8.0 * aRandom + 2.0) * (5.0 / -mvPosition.z);
            gl_Position = projectionMatrix * mvPosition;
        }
    `;

    const fragmentShader = `
        varying vec3 vColor;

        void main() {
            // Render a soft glowing sphere, discard sharp square edges
            float d = distance(gl_PointCoord, vec2(0.5));
            if (d > 0.5) discard;
            
            // Smooth alpha falloff for realism
            float alpha = smoothstep(0.5, 0.1, d);
            
            // Core bloom & irradiance boost
            vec3 finalColor = vColor * (1.5 + alpha);
            
            gl_FragColor = vec4(finalColor, alpha * 0.9);
        }
    `;

    useFrame((state, delta) => {
        if (materialRef.current) {
            materialRef.current.uniforms.uTime.value = state.clock.elapsedTime;
        }
        if (particlesRef.current) {
            // Majestic planetary tilt and much faster, smoother pan
            const baseRotX = Math.sin(state.clock.elapsedTime * 0.2) * 0.15 + 0.4;
            const baseRotY = state.clock.elapsedTime * 0.2; // Increased from 0.05 for faster auto-rotation

            // Highly responsive and snappy parallax based on mouse/touch pointer
            const targetRotX = baseRotX + (state.pointer.y * -0.4); // More pronounced vertical tilt
            const targetRotY = baseRotY + (state.pointer.x * 0.6);  // More pronounced horizontal spin

            // Ultra-smooth, hyper-responsive interpolation (increased from delta * 2 to delta * 8)
            particlesRef.current.rotation.x += (targetRotX - particlesRef.current.rotation.x) * delta * 8;
            particlesRef.current.rotation.y += (targetRotY - particlesRef.current.rotation.y) * delta * 8;
        }
    });

    return (
        <points ref={particlesRef}>
            <bufferGeometry>
                <bufferAttribute attach="attributes-position" args={[positions, 3]} />
                <bufferAttribute attach="attributes-aColor" args={[colors, 3]} />
                <bufferAttribute attach="attributes-aRandom" args={[randoms, 1]} />
            </bufferGeometry>
            <shaderMaterial
                ref={materialRef}
                vertexShader={vertexShader}
                fragmentShader={fragmentShader}
                uniforms={uniforms}
                transparent
                depthWrite={false}
                blending={THREE.AdditiveBlending}
            />
        </points>
    );
};

const ResponsiveCamera = () => {
    useFrame(({ camera }) => {
        // Detect mobile screens vs desktop
        const isMobile = window.innerWidth < 768;

        // Center the 3D model on mobile for visual impact, push right on desktop
        const targetX = isMobile ? 0 : -6;
        const targetY = isMobile ? 5 : 3;

        // Silky smooth interpolation of camera position depending on viewport
        camera.position.x += (targetX - camera.position.x) * 0.05;
        camera.position.y += (targetY - camera.position.y) * 0.05;
        camera.lookAt(targetX, 0, 0);
    });
    return null;
};

export const Scene3D: React.FC = () => {
    return (
        <div className="w-full h-full absolute inset-0 bg-brand-dark">
            <Canvas
                camera={{ position: [0, 5, 14], fov: 60 }}
                gl={{ antialias: false, alpha: false, powerPreference: "high-performance" }}
            >
                <ResponsiveCamera />
                <color attach="background" args={['#020617']} />

                <NeuralCore />

                {/* Advanced post-processing bloom for the neon glow effect */}
                <EffectComposer>
                    <Bloom
                        luminanceThreshold={0.1}
                        luminanceSmoothing={0.9}
                        intensity={4.5}
                        mipmapBlur
                    />
                </EffectComposer>

                {/* OrbitControls removed to allow seamless mobile scrolling */}
            </Canvas>
        </div>
    );
};
