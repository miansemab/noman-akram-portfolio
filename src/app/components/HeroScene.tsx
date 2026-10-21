
"use client";

import { Canvas } from "@react-three/fiber";
import { Float, MeshDistortMaterial, OrbitControls } from "@react-three/drei";

function SculpturalForm() {
  return (
    <Float speed={1.1} rotationIntensity={0.25} floatIntensity={0.25}>
      <mesh rotation={[0.3, 0.2, 0]}>
        <torusKnotGeometry args={[0.88, 0.22, 160, 24, 2, 3]} />
        <MeshDistortMaterial
          color="#899a79"
          roughness={0.32}
          metalness={0.22}
          distort={0.12}
          speed={1.2}
        />
      </mesh>
    </Float>
  );
}

export default function HeroScene() {
  return (
    <div
      className="h-[250px] w-full sm:h-[320px]"
      role="img"
      aria-label="Interactive abstract three-dimensional sculpture"
    >
      <Canvas
        camera={{ position: [0, 0, 4.2], fov: 43 }}
        dpr={[1, 1.5]}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={1.5} />
        <directionalLight position={[3, 4, 5]} intensity={2} />
        <pointLight position={[-3, -2, 2]} intensity={12} color="#d8a48d" />
        <SculpturalForm />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.4}
        />
      </Canvas>
    </div>
  );
}
