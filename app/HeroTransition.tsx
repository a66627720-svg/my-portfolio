"use client";
import React, { useRef, useState, Suspense } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import * as THREE from 'three';

function TransitionMesh({ img1, img2, dispImg }: { img1: string, img2: string, dispImg: string }) {
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  const [hovered, setHovered] = useState(false);
  const [tex1, tex2, dispTex] = useLoader(THREE.TextureLoader, [img1, img2, dispImg]);

  useFrame((state) => {
    if (materialRef.current) {
      // التأثير يبدأ تلقائياً ويصبح أقوى عند الـ hover
      const target = hovered ? 0.8 : 0.2; 
      materialRef.current.uniforms.dispFactor.value = THREE.MathUtils.lerp(
        materialRef.current.uniforms.dispFactor.value,
        target,
        0.05
      );
      // إضافة حركة خفيفة تلقائية (لجعل الشكل "حي")
      materialRef.current.uniforms.progress.value = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <mesh onPointerOver={() => setHovered(true)} onPointerOut={() => setHovered(false)}>
      <planeGeometry args={[3.5, 4.5]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={`varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`}
        fragmentShader={`
          varying vec2 vUv;
          uniform sampler2D texture1;
          uniform sampler2D texture2;
          uniform sampler2D dispTexture;
          uniform float dispFactor;
          uniform float progress;
          void main() {
            vec2 uv = vUv;
            vec4 disp = texture2D(dispTexture, uv);
            vec2 distorted = vec2(uv.x + disp.r * dispFactor, uv.y + disp.g * dispFactor);
            gl_FragColor = texture2D(texture1, distorted);
          }
        `}
        uniforms={{
          dispFactor: { value: 0.2 },
          progress: { value: 0 },
          texture1: { value: tex1 },
          texture2: { value: tex2 },
          dispTexture: { value: dispTex }
        }}
      />
    </mesh>
  );
}

export default function HeroTransition() {
  return (
    <div className="w-full h-[600px] flex items-center justify-center cursor-pointer bg-black">
      <Canvas camera={{ position: [0, 0, 5], fov: 40 }}>
        <Suspense fallback={null}>
          <TransitionMesh 
            img1="/my-photo-1.jpg" 
            img2="/my-photo-2.png" 
            dispImg="/displacement.jpg" 
          />
        </Suspense>
      </Canvas>
    </div>
  );
}