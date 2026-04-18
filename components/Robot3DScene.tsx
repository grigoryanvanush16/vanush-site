'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Float, ContactShadows, RoundedBox, Sparkles, Environment } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

function Robot() {
  const group = useRef<THREE.Group>(null);
  const eyeL = useRef<THREE.Mesh>(null);
  const eyeR = useRef<THREE.Mesh>(null);
  const chest = useRef<THREE.Mesh>(null);
  const antenna = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (group.current) group.current.rotation.y += 0.004;

    const t = state.clock.elapsedTime;
    const eyePulse = 2.5 + Math.sin(t * 2) * 1.5;
    const chestPulse = 1.5 + Math.sin(t * 1.5) * 1;
    const antPulse = 1.5 + Math.sin(t * 3) * 1.5;

    [eyeL, eyeR].forEach((ref) => {
      if (ref.current) {
        (ref.current.material as THREE.MeshStandardMaterial).emissiveIntensity = eyePulse;
      }
    });
    if (chest.current)
      (chest.current.material as THREE.MeshStandardMaterial).emissiveIntensity = chestPulse;
    if (antenna.current)
      (antenna.current.material as THREE.MeshStandardMaterial).emissiveIntensity = antPulse;
  });

  return (
    <Float speed={1.2} rotationIntensity={0.12} floatIntensity={0.35}>
      <group ref={group}>
        {/* ═══ HEAD ═══ */}
        <RoundedBox args={[1.1, 0.95, 0.85]} radius={0.15} smoothness={4} position={[0, 1.8, 0]}>
          <meshStandardMaterial color="#1a1a3e" metalness={0.7} roughness={0.25} />
        </RoundedBox>

        {/* Visor */}
        <RoundedBox args={[0.88, 0.24, 0.04]} radius={0.06} smoothness={4} position={[0, 1.83, 0.44]}>
          <meshStandardMaterial
            color="#00e5ff"
            emissive="#00e5ff"
            emissiveIntensity={0.4}
            transparent
            opacity={0.2}
          />
        </RoundedBox>

        {/* Eyes */}
        <mesh ref={eyeL} position={[-0.22, 1.83, 0.47]}>
          <sphereGeometry args={[0.09, 20, 20]} />
          <meshStandardMaterial color="#00e5ff" emissive="#00e5ff" emissiveIntensity={3} toneMapped={false} />
        </mesh>
        <mesh ref={eyeR} position={[0.22, 1.83, 0.47]}>
          <sphereGeometry args={[0.09, 20, 20]} />
          <meshStandardMaterial color="#00e5ff" emissive="#00e5ff" emissiveIntensity={3} toneMapped={false} />
        </mesh>

        {/* Mouth */}
        <RoundedBox args={[0.28, 0.05, 0.02]} radius={0.02} position={[0, 1.55, 0.44]}>
          <meshStandardMaterial color="#00e5ff" emissive="#00e5ff" emissiveIntensity={0.3} transparent opacity={0.35} />
        </RoundedBox>

        {/* Head side panels */}
        <RoundedBox args={[0.06, 0.28, 0.18]} radius={0.02} position={[-0.6, 1.8, 0]}>
          <meshStandardMaterial color="#12122a" metalness={0.8} roughness={0.15} />
        </RoundedBox>
        <RoundedBox args={[0.06, 0.28, 0.18]} radius={0.02} position={[0.6, 1.8, 0]}>
          <meshStandardMaterial color="#12122a" metalness={0.8} roughness={0.15} />
        </RoundedBox>

        {/* ═══ ANTENNA ═══ */}
        <mesh position={[0, 2.45, 0]}>
          <cylinderGeometry args={[0.02, 0.025, 0.35]} />
          <meshStandardMaterial color="#1a1a3e" metalness={0.8} roughness={0.2} />
        </mesh>
        <mesh ref={antenna} position={[0, 2.66, 0]}>
          <sphereGeometry args={[0.06, 16, 16]} />
          <meshStandardMaterial color="#bf5af2" emissive="#bf5af2" emissiveIntensity={2} toneMapped={false} />
        </mesh>

        {/* ═══ NECK ═══ */}
        <mesh position={[0, 1.2, 0]}>
          <cylinderGeometry args={[0.12, 0.16, 0.2, 16]} />
          <meshStandardMaterial color="#12122a" metalness={0.75} roughness={0.2} />
        </mesh>

        {/* ═══ BODY ═══ */}
        <RoundedBox args={[0.9, 1.05, 0.65]} radius={0.1} smoothness={4} position={[0, 0.55, 0]}>
          <meshStandardMaterial color="#151535" metalness={0.7} roughness={0.25} />
        </RoundedBox>

        {/* Chest core */}
        <mesh ref={chest} position={[0, 0.7, 0.34]}>
          <sphereGeometry args={[0.08, 20, 20]} />
          <meshStandardMaterial color="#00e5ff" emissive="#00e5ff" emissiveIntensity={2} toneMapped={false} />
        </mesh>
        <mesh position={[0, 0.7, 0.34]}>
          <torusGeometry args={[0.14, 0.008, 16, 32]} />
          <meshStandardMaterial color="#00e5ff" emissive="#00e5ff" emissiveIntensity={0.6} transparent opacity={0.3} />
        </mesh>

        {/* Chest line */}
        <RoundedBox args={[0.5, 0.025, 0.015]} radius={0.005} position={[0, 0.38, 0.34]}>
          <meshStandardMaterial color="#00e5ff" emissive="#00e5ff" emissiveIntensity={0.3} transparent opacity={0.5} />
        </RoundedBox>

        {/* ═══ SHOULDERS ═══ */}
        <mesh position={[-0.55, 1.0, 0]}>
          <sphereGeometry args={[0.11, 16, 16]} />
          <meshStandardMaterial color="#1a1a3e" metalness={0.75} roughness={0.2} />
        </mesh>
        <mesh position={[0.55, 1.0, 0]}>
          <sphereGeometry args={[0.11, 16, 16]} />
          <meshStandardMaterial color="#1a1a3e" metalness={0.75} roughness={0.2} />
        </mesh>

        {/* ═══ LEFT ARM ═══ */}
        <mesh position={[-0.7, 0.72, 0]} rotation={[0, 0, 0.25]}>
          <cylinderGeometry args={[0.065, 0.055, 0.45, 12]} />
          <meshStandardMaterial color="#1a1a3e" metalness={0.7} roughness={0.25} />
        </mesh>
        <mesh position={[-0.65, 0.45, 0]}>
          <sphereGeometry args={[0.07, 12, 12]} />
          <meshStandardMaterial color="#12122a" metalness={0.8} roughness={0.15} />
        </mesh>
        <mesh position={[-0.72, 0.22, 0]} rotation={[0, 0, -0.15]}>
          <cylinderGeometry args={[0.055, 0.048, 0.4, 12]} />
          <meshStandardMaterial color="#1a1a3e" metalness={0.7} roughness={0.25} />
        </mesh>
        <mesh position={[-0.72, -0.01, 0]}>
          <sphereGeometry args={[0.08, 12, 12]} />
          <meshStandardMaterial color="#12122a" metalness={0.8} roughness={0.15} />
        </mesh>

        {/* ═══ RIGHT ARM ═══ */}
        <mesh position={[0.7, 0.72, 0]} rotation={[0, 0, -0.25]}>
          <cylinderGeometry args={[0.065, 0.055, 0.45, 12]} />
          <meshStandardMaterial color="#1a1a3e" metalness={0.7} roughness={0.25} />
        </mesh>
        <mesh position={[0.65, 0.45, 0]}>
          <sphereGeometry args={[0.07, 12, 12]} />
          <meshStandardMaterial color="#12122a" metalness={0.8} roughness={0.15} />
        </mesh>
        <mesh position={[0.72, 0.22, 0]} rotation={[0, 0, 0.15]}>
          <cylinderGeometry args={[0.055, 0.048, 0.4, 12]} />
          <meshStandardMaterial color="#1a1a3e" metalness={0.7} roughness={0.25} />
        </mesh>
        <mesh position={[0.72, -0.01, 0]}>
          <sphereGeometry args={[0.08, 12, 12]} />
          <meshStandardMaterial color="#12122a" metalness={0.8} roughness={0.15} />
        </mesh>

        {/* ═══ ORBITAL RING ═══ */}
        <mesh rotation={[1.2, 0.3, 0.2]} position={[0, 1.2, 0]}>
          <torusGeometry args={[2.0, 0.006, 16, 120]} />
          <meshStandardMaterial color="#00e5ff" emissive="#00e5ff" emissiveIntensity={0.8} transparent opacity={0.2} />
        </mesh>

        {/* ═══ BASE GLOW ═══ */}
        <mesh position={[0, -0.15, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <ringGeometry args={[0.3, 1.1, 64]} />
          <meshStandardMaterial
            color="#00e5ff"
            emissive="#00e5ff"
            emissiveIntensity={0.15}
            transparent
            opacity={0.06}
            side={THREE.DoubleSide}
          />
        </mesh>
      </group>
    </Float>
  );
}

export default function Robot3DScene() {
  return (
    <Canvas
      camera={{ position: [0, 1.3, 5], fov: 32 }}
      gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
      dpr={[1, 2]}
    >
      <ambientLight intensity={0.1} />
      <pointLight position={[3, 3, 4]} color="#00e5ff" intensity={4} distance={12} />
      <pointLight position={[-3, 2, -2]} color="#bf5af2" intensity={2.5} distance={10} />
      <spotLight position={[0, 6, 2]} intensity={1} angle={0.4} penumbra={1} color="#ffffff" />
      <pointLight position={[0, 0, 3]} color="#00e5ff" intensity={0.8} distance={5} />

      <Robot />

      <Sparkles count={60} scale={6} size={2.5} speed={0.3} color="#00e5ff" opacity={0.35} />

      <ContactShadows position={[0, -0.2, 0]} opacity={0.15} scale={4} blur={2.5} color="#00e5ff" />

      <Environment preset="night" />
    </Canvas>
  );
}
