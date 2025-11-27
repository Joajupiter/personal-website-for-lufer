import { useState } from 'react';
import svgPathsVideojuegos from "../imports/svg-y971nrpklg";
import svgPathsIlustracion from "../imports/svg-2ykpto7p6e";
import svgPaths3D from "../imports/svg-5jqzvw9nwa";

// Videojuegos imports
import imgCopiaDeLegadoEternoMice122 from "figma:asset/ab2f9ba6334f46489496de731d21f451733090dd.png";
import imgCopiaDePresentacionPitchAlpina52 from "figma:asset/deaee6766ece4256942b4f5d37c43b57e29cf9b0.png";
import imgCopiaDePresentacionDiapositivasBiologiaCuerpoHumanoVintageMarronYBlanco2 from "figma:asset/5b324ea61c0bd40adaabd5e5cb2041a12607b4cc.png";

// Ilustración imports
import imgYoutube from "figma:asset/ad38913195996e0a37da0c75554c43a1db1f8427.png";
import imgCapturaDePantalla20251106ALaS101410AMPhotoroom1 from "figma:asset/90b6c0c3024ea20709826ecb7ca9976245637ecb.png";
import imgBannerLooneysm2 from "figma:asset/f3ef17b39b6fb9e100e73eb32a4d1b9f066184a5.png";
import imgRecurso82 from "figma:asset/5e7e93c3089065814d53c241b37c47887964fbcc.png";
import imgCopiaDeCopiaDeOffline2 from "figma:asset/9f2a64ba3fa66e2f44119998862a8fc304259b3f.png";
import imgImage14 from "figma:asset/a1b7e80aac84469cbfe23da7b2fd37cdde124dab.png";
import imgImage15 from "figma:asset/70aa2a57008da69b6e5bfda856321efe2b9b9db8.png";
import imgImage16 from "figma:asset/70d0adb59e9eee401ea06d18f13d41a582d7cde3.png";
import imgImage17 from "figma:asset/20d8688b2640c11a9a630bcd25239ba335910678.png";
import imgImage18 from "figma:asset/2f80ba0cfc8ec880be94f9947a97d9afa7e649e4.png";
import imgImage19 from "figma:asset/afa6590d7b0bdfaf5d7a070c3448218e267b99d7.png";
import imgImage21 from "figma:asset/40cd7b6c651cc7aa54f661895be51790de0835a5.png";
import imgImage22 from "figma:asset/88351e16e1e814e37707a2df25dbeb2cbf3e472f.png";
import imgRecurso71 from "figma:asset/98b2ce30cd61a8ad76895fbf52023ffb21b9e216.png";

// 3D imports
import imgWhatsAppImage20251118At85924Am from "figma:asset/cc3f33ecceb4b86b2e3beb830934429856074947.png";
import imgWhatsAppImage20251118At85924Am1 from "figma:asset/4fac5adeb91f1e72c60afe4b00ba718bc6c1b1eb.png";
import imgWhatsAppImage20251118At85923Am from "figma:asset/eced0f217b99130878821bba5cf5af2262e2b474.png";
import imgIntagramValen011 from "figma:asset/bfef01b0cf7f723d7ca67009bade9ad8ed7216bb.png";
import img1000Tif01S1 from "figma:asset/5bb41154a3bcdb444a032d8d526a44b99008652e.png";
import imgIntagramMuseoDelOro011 from "figma:asset/2400f4361bc79dd1d228f58e1a88611b396376c1.png";
import imgCapturaDePantalla20251113ALaS82537AM1 from "figma:asset/0c87b87f64f5654ec24f1e1c1c5e08540bd98e17.png";
import imgCapturaDePantalla20251113ALaS83105AM1 from "figma:asset/ce3d617a469ef16680862d218f742b02b561621e.png";
import imgRecurso111 from "figma:asset/85931b615166d97a7e6501742cd14cb4a4f8ccca.png";
import imgRecurso121 from "figma:asset/4c3b11d15966276a3af7822328fd23b958bc773c.png";

type TabType = 'videojuegos' | 'ilustracion' | '3d';

export function Portafolio() {
  const [activeTab, setActiveTab] = useState<TabType>('videojuegos');

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#F4DDE7] to-[#C48AA0] overflow-x-hidden">
      {/* Subtle Background Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: `
            repeating-linear-gradient(45deg, #4D0C28 0, #4D0C28 1px, transparent 1px, transparent 50px),
            repeating-linear-gradient(-45deg, #4D0C28 0, #4D0C28 1px, transparent 1px, transparent 50px)
          `,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="relative container mx-auto px-4 py-8 md:py-12 lg:py-16">
        {/* Title */}
        <h1 className="font-['Urbanist'] font-extrabold text-[#4D0C28] text-center mb-8 md:mb-12 text-[64px] md:text-[96px] lg:text-[128px] leading-none">
          PORTAFOLIO
        </h1>

        {/* Category Tabs */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 mb-12 md:mb-16 max-w-[900px] mx-auto">
          <button
            onClick={() => setActiveTab('videojuegos')}
            className={`
              w-full md:w-auto px-8 py-4 rounded-[18px] font-['Urbanist'] font-extrabold text-[20px] md:text-[24px] transition-all duration-300
              ${activeTab === 'videojuegos' 
                ? 'bg-[#4D0C28] text-white shadow-lg' 
                : 'bg-transparent border-2 border-[#4D0C28] text-[#4D0C28] hover:bg-[#4D0C28] hover:text-white'
              }
            `}
          >
            Diseño de videojuegos
          </button>
          
          <button
            onClick={() => setActiveTab('ilustracion')}
            className={`
              w-full md:w-auto px-8 py-4 rounded-[18px] font-['Urbanist'] font-extrabold text-[20px] md:text-[24px] transition-all duration-300
              ${activeTab === 'ilustracion' 
                ? 'bg-[#4D0C28] text-white shadow-lg' 
                : 'bg-transparent border-2 border-[#4D0C28] text-[#4D0C28] hover:bg-[#4D0C28] hover:text-white'
              }
            `}
          >
            Ilustración
          </button>
          
          <button
            onClick={() => setActiveTab('3d')}
            className={`
              w-full md:w-auto px-8 py-4 rounded-[18px] font-['Urbanist'] font-extrabold text-[20px] md:text-[24px] transition-all duration-300
              ${activeTab === '3d' 
                ? 'bg-[#4D0C28] text-white shadow-lg' 
                : 'bg-transparent border-2 border-[#4D0C28] text-[#4D0C28] hover:bg-[#4D0C28] hover:text-white'
              }
            `}
          >
            3D
          </button>
        </div>

        {/* Content Sections */}
        <div className="relative">
          {activeTab === 'videojuegos' && <VideojuegosSection />}
          {activeTab === 'ilustracion' && <IlustracionSection />}
          {activeTab === '3d' && <Section3D />}
        </div>
      </div>
    </div>
  );
}

function VideojuegosSection() {
  return (
    <div className="animate-fadeIn">
      <h2 className="font-['Urbanist'] font-extrabold text-[#4D0C28] text-[32px] md:text-[40px] text-center mb-12">
        DISEÑO DE VIDEOJUEGOS
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-[1400px] mx-auto">
        {/* LEGADO ETERNO */}
        <div className="bg-white rounded-[36px] p-6 md:p-8 shadow-lg">
          <img 
            src={imgCopiaDeLegadoEternoMice122} 
            alt="Legado Eterno"
            className="w-full aspect-[16/9] object-cover rounded-[24px] mb-6"
          />
          <h3 className="font-['Urbanist'] font-extrabold text-[#01184e] text-[28px] md:text-[32px] leading-none mb-4">
            LEGADO ETERNO
          </h3>
          <p className="font-['Coolvetica'] text-[#01184e] text-[14px] md:text-[15px] leading-relaxed">
            Tina es una viajera temporal decidida a evitar que el legado histórico de Bogotá caiga en el olvido. A medida que los museos y sus obras comienzan a desaparecer en el tiempo, Valentina (Tina) emprende una aventura para reconstruir la historia y revivir la memoria cultural de la ciudad.
            <br /><br />
            A lo largo de su viaje, consigue contactos, coleccionables y pistas que la ayudan a descubrir nuevas conexiones entre pasado y presente. Gracias a herramientas como la realidad aumentada, los jugadores pueden explorar publicaciones e historias interactivas que traen de vuelta la esencia y el arte de Bogotá de una forma moderna y envolvente.
          </p>
        </div>

        {/* BON RUSH */}
        <div className="bg-white rounded-[36px] p-6 md:p-8 shadow-lg">
          <img 
            src={imgCopiaDePresentacionPitchAlpina52} 
            alt="Bon Rush"
            className="w-full aspect-[16/9] object-cover rounded-[24px] mb-6"
          />
          <h3 className="font-['Urbanist'] font-extrabold text-[#762158] text-[28px] md:text-[32px] leading-none mb-4">
            BON RUSH
          </h3>
          <p className="font-['Coolvetica'] text-[#4b0225] text-[14px] md:text-[15px] leading-relaxed">
            Bon Rush es un videojuego tipo runner ambientado en un arcade retro que ha sido corrompido por el malvado Doctor Limón, un científico obsesionado con crear el juego perfecto y robarle lo delicioso a la amistad. Al experimentar con las máquinas, provoca una falla que arrastra a Toño, Choko, Kou y Leo dentro del arcade.
            <br /><br />
            Con la ayuda de Bon Yurt, los protagonistas deberán recorrer niveles llenos de obstáculos y energía, reconstruir la cuchara legendaria y derrotar al Doctor Limón para restaurar la diversión y escapar.
            <br /><br />
            Bon Rush destaca por su propuesta creativa, su estilo visual vibrante y su narrativa divertida, obteniendo el reconocimiento al Mejor Proyecto Interactivo en Alpireto.
          </p>
        </div>

        {/* HEREJIA DIVINA */}
        <div className="bg-white rounded-[36px] p-6 md:p-8 shadow-lg">
          <img 
            src={imgCopiaDePresentacionDiapositivasBiologiaCuerpoHumanoVintageMarronYBlanco2} 
            alt="Herejía Divina"
            className="w-full aspect-[16/9] object-cover rounded-[24px] mb-6"
          />
          <h3 className="font-['Urbanist'] font-extrabold text-[#955119] text-[28px] md:text-[32px] leading-none mb-4">
            HEREJIA DIVINA
          </h3>
          <p className="font-['Coolvetica'] text-[#955119] text-[14px] md:text-[15px] leading-relaxed">
            Herejía Divina es un videojuego survival horror ambientado en la Inglaterra victoriana, una era marcada por la crueldad y la indiferencia.
            <br />
            Encarnamos a Evelyn, una mujer que, tras perder a su hija a manos de un culto, se adentra en un oscuro viaje para reencontrarse con ella.
            <br /><br />
            El juego busca sumergir al jugador en una experiencia inmersiva y emocional, donde cada decisión puede cambiar el rumbo de la historia. A través de una narrativa intensa, una atmósfera opresiva y un diseño audiovisual cuidadosamente construido, Herejía Divina invita a enfrentarse no solo a los horrores del mundo exterior, sino también a los del alma humana.
          </p>
        </div>
      </div>
    </div>
  );
}

function IlustracionSection() {
  return (
    <div className="animate-fadeIn space-y-12 md:space-y-16">
      <h2 className="font-['Urbanist'] font-extrabold text-[#4D0C28] text-[32px] md:text-[40px] text-center">
        ILUSTRACIONES
      </h2>

      {/* Jupiter y Stickers */}
      <div className="bg-white rounded-[36px] p-6 md:p-12 shadow-lg max-w-[1200px] mx-auto">
        <h3 className="font-['Urbanist'] font-extrabold text-[#751145] text-[32px] md:text-[40px] leading-none mb-8 text-center md:text-left">
          JUPITER Y STICKERS
        </h3>
        <img 
          src={imgRecurso71} 
          alt="Jupiter y Stickers"
          className="w-full h-auto"
        />
      </div>

      {/* Twitch - Identidad Visual */}
      <div className="bg-white rounded-[36px] p-6 md:p-12 shadow-lg max-w-[1200px] mx-auto">
        <div className="text-center mb-8">
          <h3 className="font-['Urbanist'] font-extrabold text-[#0e0e10] text-[64px] md:text-[96px] leading-none mb-2">
            Twitch
          </h3>
          <p className="font-['Urbanist'] font-bold text-[#0e0e10] text-[28px] md:text-[32px]">
            identidad visual
          </p>
          <p className="font-['Urbanist'] font-bold text-[#0e0e10] text-[28px] md:text-[32px]">
            LOONEYSM
          </p>
        </div>

        <a href="https://www.twitch.tv/looneysm" target="_blank" rel="noopener noreferrer" className="block">
          <div className="space-y-6">
            {/* Banner */}
            <img 
              src={imgBannerLooneysm2} 
              alt="Banner Looneysm"
              className="w-full rounded-[32px]"
            />
            
            {/* Emotes */}
            <img 
              src={imgRecurso82} 
              alt="Emotes"
              className="w-full"
            />

            {/* Grid de assets */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <img src={imgCopiaDeCopiaDeOffline2} alt="Offline" className="w-full rounded-[24px]" />
              <img src={imgImage14} alt="Asset 1" className="w-full rounded-[24px]" />
              <img src={imgImage15} alt="Asset 2" className="w-full rounded-[24px]" />
            </div>

            {/* Badges y Panels */}
            <div className="grid grid-cols-4 md:grid-cols-7 gap-3">
              <img src={imgImage16} alt="Badge" className="w-full rounded-[12px]" />
              <img src={imgImage17} alt="Badge" className="w-full rounded-[12px]" />
              <img src={imgImage18} alt="Badge" className="w-full rounded-[12px]" />
              <img src={imgImage19} alt="Badge" className="w-full rounded-[12px]" />
              <img src={imgImage22} alt="Panel" className="w-full rounded-[12px]" />
              <img src={imgImage21} alt="Panel" className="w-full rounded-[12px]" />
            </div>
          </div>
        </a>
      </div>

      {/* YouTube Speed Paint */}
      <div className="bg-white rounded-[36px] p-6 md:p-12 shadow-lg max-w-[1200px] mx-auto">
        <h3 className="font-['Urbanist'] font-extrabold text-[#0f0f0f] text-[28px] md:text-[32px] leading-tight mb-8 text-center">
          PROCESOS Y SPEED PAINT EN YOUTUBE
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <img 
            src={imgCapturaDePantalla20251106ALaS101410AMPhotoroom1} 
            alt="Character illustration"
            className="w-full h-auto"
          />
          <img 
            src={imgYoutube} 
            alt="YouTube Channel"
            className="w-full rounded-[24px]"
          />
        </div>
      </div>
    </div>
  );
}

function Section3D() {
  return (
    <div className="animate-fadeIn space-y-12 md:space-y-16">
      <h2 className="font-['Urbanist'] font-extrabold text-[#4D0C28] text-[32px] md:text-[40px] text-center">
        3D
      </h2>

      {/* Ori */}
      <div className="bg-white rounded-[36px] p-6 md:p-12 shadow-lg max-w-[1200px] mx-auto">
        <img 
          src={imgRecurso121} 
          alt="3D Project - Ori"
          className="w-full rounded-[34px]"
        />
      </div>

      {/* Ex */}
      <div className="bg-white rounded-[36px] p-6 md:p-12 shadow-lg max-w-[1200px] mx-auto">
        <img 
          src={imgRecurso111} 
          alt="3D Project - Ex"
          className="w-full rounded-[34px]"
        />
      </div>

      {/* Kat */}
      <div className="bg-white rounded-[36px] p-6 md:p-12 shadow-lg max-w-[1200px] mx-auto">
        <img 
          src={imgCapturaDePantalla20251113ALaS82537AM1} 
          alt="Kat Project"
          className="w-full rounded-[34px] mb-6"
        />
        <a 
          href="https://www.youtube.com/watch?v=PmM6WIGtXBs" 
          target="_blank" 
          rel="noopener noreferrer"
          className="block w-full md:w-auto mx-auto"
        >
          <img 
            src={imgCapturaDePantalla20251113ALaS83105AM1} 
            alt="YouTube Video"
            className="w-full max-w-[523px] mx-auto rounded-[24px] hover:opacity-90 transition-opacity"
          />
        </a>
      </div>

      {/* Realidad Aumentada */}
      <div className="text-center mb-8">
        <h3 className="font-['Urbanist'] font-extrabold text-white text-[40px] md:text-[48px] leading-tight">
          REALIDAD AUMENTADA
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-[1400px] mx-auto mb-12">
        <img src={imgIntagramValen011} alt="AR Project 1" className="w-full h-auto" />
        <img src={img1000Tif01S1} alt="AR Project 2" className="w-full h-auto" />
        <img src={imgIntagramMuseoDelOro011} alt="AR Project 3" className="w-full h-auto" />
      </div>

      {/* AR Photos */}
      <div className="bg-white rounded-[36px] p-6 md:p-8 shadow-lg max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          <img src={imgWhatsAppImage20251118At85924Am} alt="AR Demo 1" className="w-full rounded-[24px]" />
          <img src={imgWhatsAppImage20251118At85924Am1} alt="AR Demo 2" className="w-full rounded-[24px]" />
          <img src={imgWhatsAppImage20251118At85923Am} alt="AR Demo 3" className="w-full rounded-[24px]" />
        </div>
      </div>
    </div>
  );
}
