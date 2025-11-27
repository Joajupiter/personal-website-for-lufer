import imgRecursoConejo2 from "figma:asset/aa5d88ceb0b807eddd78b689ee855dd5b66744fe.png";

function Diseno() {
  return (
    <div className="absolute h-[79px] left-[calc(50%-411px)] top-[calc(50%+149.5px)] translate-x-[-50%] translate-y-[-50%] w-[380px]" data-name="DISEÑO">
      <div className="absolute bg-[#4b0225] inset-0 rounded-[17px]" />
      <div className="absolute flex flex-col font-['Urbanist:ExtraBold',sans-serif] font-extrabold inset-[11.39%_7.11%] justify-center leading-[0] text-[32px] text-white">
        <p className="leading-[normal]">Diseño de videojuegos</p>
      </div>
    </div>
  );
}

function Ilustracion() {
  return (
    <div className="absolute h-[79px] left-[calc(50%+4px)] top-[calc(50%+149.5px)] translate-x-[-50%] translate-y-[-50%] w-[380px]" data-name="ILUSTRACION">
      <div className="absolute bg-[#4b0225] inset-0 rounded-[17px]" />
      <div className="absolute flex flex-col font-['Urbanist:ExtraBold',sans-serif] font-extrabold inset-[11.39%_30.26%_11.39%_30%] justify-center leading-[0] text-[32px] text-white">
        <p className="leading-[normal]">Ilustración</p>
      </div>
    </div>
  );
}

function Component3D() {
  return (
    <div className="absolute h-[79px] left-[calc(50%+414px)] top-[calc(50%+149.5px)] translate-x-[-50%] translate-y-[-50%] w-[380px]" data-name="3D">
      <div className="absolute bg-[#4b0225] inset-0 rounded-[17px]" />
      <div className="absolute flex flex-col font-['Urbanist:ExtraBold',sans-serif] font-extrabold inset-[11.39%_43.68%] justify-center leading-[0] text-[32px] text-white">
        <p className="leading-[normal]">3D</p>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents font-['Urbanist:ExtraBold',sans-serif] font-extrabold leading-[0] left-[calc(50%-0.5px)] text-[#75023e] text-[32px] text-nowrap top-[31px] translate-x-[-50%]">
      <div className="absolute flex flex-col justify-center left-[calc(50%-383px)] top-[50px] translate-y-[-50%]">
        <p className="leading-[normal] text-nowrap whitespace-pre">PORTAFOLIO</p>
      </div>
      <div className="absolute flex flex-col justify-center left-[calc(50%-103px)] top-[50px] translate-y-[-50%]">
        <p className="leading-[normal] text-nowrap whitespace-pre">CONOCEME</p>
      </div>
      <div className="absolute flex flex-col justify-center left-[calc(50%+165px)] top-[50px] translate-y-[-50%]">
        <p className="leading-[normal] text-nowrap whitespace-pre">CONTACTAME</p>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="contents pointer-events-auto sticky top-0 translate-x-[-50%]" data-name="HEADER">
      <div className="absolute bg-[#e5c7d4] h-[59px] left-[calc(50%-0.5px)] rounded-[17px] top-[17px] translate-x-[-50%] w-[1413px]" />
      <div className="absolute h-[38px] left-[calc(50%-665.5px)] top-[27px] translate-x-[-50%] w-[61px]" data-name="Recurso conejo 2">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgRecursoConejo2} />
      </div>
      <Group />
    </div>
  );
}

export default function Portafolio() {
  return (
    <div className="bg-white relative size-full" data-name="PORTAFOLIO">
      <div className="absolute flex flex-col font-['Urbanist:ExtraBold',sans-serif] font-extrabold h-[143px] justify-center leading-[0] left-[calc(50%-387px)] text-[#4b0225] text-[128px] top-[calc(50%-58.5px)] translate-y-[-50%] w-[773px]">
        <p className="leading-[normal]">PORTAFOLIO</p>
      </div>
      <Diseno />
      <Ilustracion />
      <Component3D />
      <div className="absolute bottom-0 h-[calc(100%-17px)] left-[calc(50%-0.5px)] pointer-events-none top-[17px]">
        <Header />
      </div>
    </div>
  );
}