import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { PortalCard } from "./PortalCard";
import { Suspense, useState } from "react";

export function PortalScene() {
  const [isFullscreen, setIsFullscreen] = useState(false);

  return (
    <div 
      className={`
        transition-all duration-500 ease-in-out
        ${isFullscreen 
          ? 'fixed inset-0 z-50 bg-black' 
          : 'w-full h-[600px]'
        }
      `}
    >
      <Canvas 
        camera={{ 
          position: [0, 0, isFullscreen ? 3 : 4], 
          fov: 50 
        }}
      >
        <Suspense fallback={null}>
          {/* Ambient light for general illumination */}
          <ambientLight intensity={0.5} />

          {/* Single Portal Card with Bunny */}
          <PortalCard
            color="#4D0C28"
            texture="sunset"
            position={[0, 0, 0]}
            modelPath="/models/BUNNNY.fbx"
            modelScale={0.012}
            modelPosition={[0, -0.5, 0]}
            modelRotation={[0, 0, 0]}
            onFullscreenChange={setIsFullscreen}
            isFullscreen={isFullscreen}
          />

          {/* Controls to rotate around the card */}
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            minPolarAngle={Math.PI / 3}
            maxPolarAngle={Math.PI / 1.5}
          />
        </Suspense>
      </Canvas>

      {/* Close button when fullscreen */}
      {isFullscreen && (
        <button
          onClick={() => setIsFullscreen(false)}
          className="absolute top-4 right-4 z-50 text-white bg-black/50 hover:bg-black/70 rounded-full p-3 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      )}
    </div>
  );
}
