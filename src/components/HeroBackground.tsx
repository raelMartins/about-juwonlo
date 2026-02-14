'use client';

import { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import * as THREE from 'three';

function InteractiveOrb({
  position,
  color,
  scale = 1,
  mouse,
  phaseOffset,
}: {
  position: [number, number, number];
  color: string;
  scale?: number;
  mouse: { x: number; y: number };
  phaseOffset: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const targetPos = useRef({ x: position[0], y: position[1], z: position[2] });

  useFrame((state) => {
    if (!meshRef.current) return;

    const t = state.clock.elapsedTime * 2.2 + phaseOffset;
    const baseX = position[0];
    const baseY = position[1];
    const baseZ = position[2];

    // Constant multi-axis motion - faster, larger amplitude
    const floatX = Math.sin(t * 1.1) * 0.5 + Math.cos(t * 0.7 + 1) * 0.3;
    const floatY = Math.cos(t * 1.3) * 0.5 + Math.sin(t * 0.9 + 2) * 0.4;
    const floatZ = Math.sin(t * 0.8) * 0.2;

    // Mouse influence - orbs respond to cursor
    const influence = 0.5;
    targetPos.current.x = baseX + floatX + mouse.x * influence;
    targetPos.current.y = baseY + floatY + mouse.y * influence;
    targetPos.current.z = baseZ + floatZ;

    meshRef.current.position.x += (targetPos.current.x - meshRef.current.position.x) * 0.06;
    meshRef.current.position.y += (targetPos.current.y - meshRef.current.position.y) * 0.06;
    meshRef.current.position.z += (targetPos.current.z - meshRef.current.position.z) * 0.06;
  });

  return (
    <Sphere ref={meshRef} args={[0.75 * scale, 48, 48]} position={position}>
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.7}
        roughness={0.15}
        metalness={0.1}
      />
    </Sphere>
  );
}

function Scene({ mouse }: { mouse: { x: number; y: number } }) {
  const orbs = useMemo(
    () => [
      { position: [-2.5, 1.4, -3] as [number, number, number], color: '#c9a227', scale: 1.5, phaseOffset: 0 },
      { position: [3, -0.8, -4] as [number, number, number], color: '#d4af37', scale: 1.3, phaseOffset: 1.2 },
      { position: [-2, -1.5, -2.5] as [number, number, number], color: '#a68b2a', scale: 1.2, phaseOffset: 2.1 },
      { position: [1.5, 2, -3.5] as [number, number, number], color: '#c9a227', scale: 1.1, phaseOffset: 0.8 },
      { position: [0, -2.5, -2] as [number, number, number], color: '#8b7355', scale: 1.4, phaseOffset: 1.5 },
      { position: [-0.8, 0.6, -2.5] as [number, number, number], color: '#b8952e', scale: 1, phaseOffset: 3 },
      { position: [2.2, 0.2, -3.8] as [number, number, number], color: '#c9a227', scale: 1.1, phaseOffset: 2.4 },
      { position: [-1.2, -0.3, -3.2] as [number, number, number], color: '#d4af37', scale: 0.95, phaseOffset: 0.5 },
      { position: [0.8, -1.8, -2.8] as [number, number, number], color: '#a68b2a', scale: 1.15, phaseOffset: 1.9 },
      { position: [-2.8, 0.4, -3.6] as [number, number, number], color: '#b8952e', scale: 0.9, phaseOffset: 2.7 },
      { position: [1.8, 1.2, -3] as [number, number, number], color: '#c9a227', scale: 1.05, phaseOffset: 1.1 },
      { position: [-0.5, 1.8, -3.4] as [number, number, number], color: '#8b7355', scale: 0.85, phaseOffset: 0.3 },
    ],
    []
  );

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1.5} color="#c9a227" />
      <pointLight position={[-10, -10, -10]} intensity={1} color="#a68b2a" />
      <pointLight position={[0, 5, 5]} intensity={0.8} color="#d4af37" />
      <pointLight position={[5, -5, 5]} intensity={0.6} color="#c9a227" />
      {orbs.map((orb, i) => (
        <InteractiveOrb key={i} {...orb} mouse={mouse} />
      ))}
    </>
  );
}

export default function HeroBackground() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      setMouse({ x, y });
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return (
    <div className="absolute inset-0 z-0 min-h-screen w-full">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        dpr={[1, 2]}
        gl={{ alpha: true, antialias: true }}
        frameloop="always"
      >
        <Scene mouse={mouse} />
      </Canvas>
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/50 via-[#0a0a0a]/30 to-[#0a0a0a]" />
    </div>
  );
}
