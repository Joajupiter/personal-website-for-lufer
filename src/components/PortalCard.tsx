import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import {
  MeshPortalMaterial,
  RoundedBox,
  useFBX,
  Environment,
} from "@react-three/drei";
import * as THREE from "three";
import { easing } from "maath";

interface PortalCardProps {
  color: string;
  texture: string;
  position?: [number, number, number];
  rotation?: [number, number, number];
  modelPath: string;
  modelScale?: number;
  modelPosition?: [number, number, number];
  modelRotation?: [number, number, number];
  onFullscreenChange?: (isFullscreen: boolean) => void;
  isFullscreen?: boolean;
}

export function PortalCard({
  color,
  texture,
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  modelPath,
  modelScale = 1,
  modelPosition = [0, -0.5, 0],
  modelRotation = [0, 0, 0],
  onFullscreenChange,
  isFullscreen = false,
}: PortalCardProps) {
  const portalMaterial = useRef<THREE.ShaderMaterial>(null);
  const groupRef = useRef<THREE.Group>(null);
  const { viewport } = useThree();

  // Fixed card dimensions
  const cardWidth = 2.5;
  const cardHeight = 3.2;

  // Animate the portal blend and scale smoothly
  useFrame((_state, delta) => {
    if (portalMaterial.current) {
      // Animate portal blend - fully open when fullscreen
      easing.damp(portalMaterial.current, "blend", isFullscreen ? 1 : 0, 0.3, delta);
    }
    
    if (groupRef.current) {
      // Calculate target scale
      const targetScale = isFullscreen 
        ? Math.max(viewport.width / cardWidth, viewport.height / cardHeight) * 1.5
        : 1;
      
      // Smoothly animate scale
      easing.damp3(
        groupRef.current.scale,
        [targetScale, targetScale, targetScale],
        0.3,
        delta
      );
    }
  });

  const handleClick = () => {
    if (onFullscreenChange) {
      onFullscreenChange(!isFullscreen);
    }
  };

  return (
    <group ref={groupRef} position={position} rotation={rotation}>
      {/* Portal Frame */}
      <RoundedBox
        args={[cardWidth, cardHeight, 0.1]}
        radius={0.1}
        smoothness={4}
        onClick={handleClick}
        onPointerOver={() => document.body.style.cursor = 'pointer'}
        onPointerOut={() => document.body.style.cursor = 'default'}
      >
        <MeshPortalMaterial ref={portalMaterial}>
          {/* Background color */}
          <color attach="background" args={[color]} />

          {/* Environment for lighting */}
          <Environment preset={texture as any} />

          {/* Ambient light inside portal */}
          <ambientLight intensity={1} />
          
          {/* Directional light for better model visibility */}
          <directionalLight position={[5, 5, 5]} intensity={1} />

          {/* 3D Model */}
          <BunnyModel
            modelPath={modelPath}
            scale={modelScale}
            position={modelPosition}
            rotation={modelRotation}
          />
        </MeshPortalMaterial>
      </RoundedBox>
    </group>
  );
}

interface BunnyModelProps {
  modelPath: string;
  scale?: number;
  position?: [number, number, number];
  rotation?: [number, number, number];
}

function BunnyModel({
  modelPath,
  scale = 1,
  position = [0, 0, 0],
  rotation = [0, 0, 0],
}: BunnyModelProps) {
  const fbx = useFBX(modelPath);
  const modelRef = useRef<THREE.Group>(null);

  // Auto-rotate the model
  useFrame((_state, delta) => {
    if (modelRef.current) {
      modelRef.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <primitive
      ref={modelRef}
      object={fbx.clone()}
      scale={scale}
      position={position}
      rotation={rotation}
    />
  );
}

// Preload the model
useFBX.preload("/models/BUNNNY.fbx");
