import imgRecursoConejo2 from "figma:asset/aa5d88ceb0b807eddd78b689ee855dd5b66744fe.png";
import imgLufer from "figma:asset/4451d2147777b94a022946d4b43bae651dab17d4.png";

function Header() {
  return (
    <div className="absolute contents left-[calc(50%+0.5px)] top-[15px] translate-x-[-50%]" data-name="HEADER">
      <div className="absolute bg-[#e5c7d4] h-[59px] left-[calc(50%+0.5px)] rounded-[17px] top-[15px] translate-x-[-50%] w-[1413px]" />
      <div className="absolute h-[38px] left-[calc(50%-664.5px)] top-[25px] translate-x-[-50%] w-[61px]" data-name="Recurso conejo 2">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgRecursoConejo2} />
      </div>
      <div className="absolute flex flex-col font-['Urbanist:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] left-[calc(50%-382px)] text-[#75023e] text-[32px] text-nowrap top-[48px] translate-y-[-50%]">
        <p className="leading-[normal] whitespace-pre">PORTAFOLIO</p>
      </div>
      <div className="absolute flex flex-col font-['Urbanist:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] left-[calc(50%-102px)] text-[#75023e] text-[32px] text-nowrap top-[48px] translate-y-[-50%]">
        <p className="leading-[normal] whitespace-pre">CONOCEME</p>
      </div>
      <div className="absolute flex flex-col font-['Urbanist:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] left-[calc(50%+166px)] text-[#75023e] text-[32px] text-nowrap top-[48px] translate-y-[-50%]">
        <p className="leading-[normal] whitespace-pre">CONTACTAME</p>
      </div>
    </div>
  );
}

export default function LandingPage() {
  return (
    <div className="bg-white relative size-full" data-name="LANDING PAGE">
      <div className="absolute h-[264px] left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[722px]" data-name="LUFER">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgLufer} />
      </div>
      <Header />
    </div>
  );
}