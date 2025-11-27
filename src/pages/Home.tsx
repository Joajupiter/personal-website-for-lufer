import imgLufer from "figma:asset/4451d2147777b94a022946d4b43bae651dab17d4.png";
import { PortalScene } from "../components/PortalScene";

export function Home() {
  return (
    <div className="relative min-h-[calc(100vh-91px)] bg-white flex flex-col items-center overflow-hidden">
      {/* Subtle Background Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `radial-gradient(circle, #4D0C28 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />
      
      {/* LUFER Logo - Top Center */}
      <div className="relative z-10 w-full max-w-[722px] px-4 pt-8">
        <img 
          src={imgLufer} 
          alt="LUFER" 
          className="w-full h-auto"
        />
      </div>

      {/* 3D Render Container */}
      <div className="relative z-10 flex-1 w-full flex items-center justify-center">
        <PortalScene />
      </div>
    </div>
  );
}