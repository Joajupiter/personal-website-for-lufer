import imgTwitch1 from "figma:asset/39cfb43762f6538e00b89cd3edd9d3bd6f82f6af.png";
import imgInsta1 from "figma:asset/a6c56220095fb29c00d8db4716c5898a23fdd6df.png";
import imgTw1 from "figma:asset/c52d700f9f27572426d842e4e17368ea3b10f33f.png";
import imgDdddd1 from "figma:asset/a02217c2c60c045d7f79c3f3494e93e17daf0a36.png";
import imgRecursoConejo2 from "figma:asset/aa5d88ceb0b807eddd78b689ee855dd5b66744fe.png";
import imgYo from "figma:asset/34c08265a8a2c315441745f51cdcb853f39f4249.png";

function Group3() {
  return (
    <div className="absolute contents inset-[10.71%_27.39%_15.12%_12.07%]">
      <div className="absolute bottom-1/4 flex flex-col font-['Urbanist:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] left-[41.76%] right-[27.39%] text-[50px] text-white top-[20.54%]">
        <p className="leading-[normal]">Twitch</p>
      </div>
      <div className="absolute aspect-[269/290] bottom-[16.94px] left-[12.07%] right-[73.17%]" data-name="TWITCH 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgTwitch1} />
      </div>
    </div>
  );
}

function Twitch() {
  return (
    <div className="absolute bottom-[512px] h-[112px] left-1/2 translate-x-[-50%] w-[522px]" data-name="TWITCH">
      <div className="absolute bg-[#4b0225] inset-0 rounded-[29px]" />
      <Group3 />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents inset-[10.71%_11.88%_14.98%_12.07%]">
      <div className="absolute flex flex-col font-['Urbanist:ExtraBold',sans-serif] font-extrabold inset-[26.79%_11.88%_31.25%_41.76%] justify-center leading-[0] text-[50px] text-white">
        <p className="leading-[normal]">Instagram</p>
      </div>
      <div className="absolute aspect-[182/182] bottom-[16.78px] left-[12.07%] right-[71.99%]" data-name="INSTA 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgInsta1} />
      </div>
    </div>
  );
}

function Instagram() {
  return (
    <div className="absolute bottom-[377px] h-[112px] left-1/2 translate-x-[-50%] w-[522px]" data-name="INSTAGRAM">
      <div className="absolute bg-[#4b0225] inset-0 rounded-[29px]" />
      <Group2 />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents inset-[14.29%_25.1%_17.07%_12.07%]">
      <div className="absolute flex flex-col font-['Urbanist:ExtraBold',sans-serif] font-extrabold inset-[21.43%_25.1%_24.11%_41.76%] justify-center leading-[0] text-[50px] text-white">
        <p className="leading-[normal]">Twitter</p>
      </div>
      <div className="absolute aspect-[1299/1065] bottom-[19.12px] left-[12.07%] right-[69.97%]" data-name="TW 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgTw1} />
      </div>
    </div>
  );
}

function Twitter() {
  return (
    <div className="absolute bottom-[242px] h-[112px] left-1/2 translate-x-[-50%] w-[522px]" data-name="TWITTER">
      <div className="absolute bg-[#4b0225] inset-0 rounded-[29px]" />
      <Group1 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-[13.39%_18.37%_16.96%_13.07%]">
      <div className="absolute bottom-1/4 flex flex-col font-['Urbanist:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] left-[42.42%] right-[18.37%] text-[50px] text-white top-[20.54%]">
        <p className="leading-[normal]">Mediakit</p>
      </div>
      <div className="absolute aspect-[728/731] bottom-[19px] left-[13.07%] right-[72.16%]" data-name="ddddd 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgDdddd1} />
      </div>
    </div>
  );
}

function Mediakit() {
  return (
    <div className="absolute bottom-[107px] h-[112px] left-1/2 translate-x-[-50%] w-[528px]" data-name="MEDIAKIT">
      <div className="absolute bg-[#4b0225] inset-0 rounded-[29px]" />
      <Group />
    </div>
  );
}

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

export default function Conoceme() {
  return (
    <div className="bg-white relative size-full" data-name="CONOCEME">
      <Twitch />
      <Instagram />
      <Twitter />
      <Mediakit />
      <div className="absolute bottom-[723.5px] flex flex-col font-['Urbanist:ExtraBold',sans-serif] font-extrabold h-[91px] justify-center leading-[0] left-[calc(50%-463px)] text-[#4b0225] text-[96px] translate-y-[50%] w-[927px]">
        <p className="leading-[normal]">¿Quieres saber mas?</p>
      </div>
      <div className="absolute h-[869px] right-0 top-[74px] w-[876px]" data-name="YO">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgYo} />
      </div>
      <div className="absolute flex flex-col font-['Urbanist:ExtraBold',sans-serif] font-extrabold h-[143px] justify-center leading-[0] left-[121px] text-[#4b0225] text-[128px] top-[358.5px] translate-y-[-50%] w-[622px]">
        <p className="leading-[normal]">Conoceme</p>
      </div>
      <div className="absolute flex flex-col font-['Urbanist:Bold',sans-serif] font-bold h-[47px] justify-center leading-[0] left-[121px] text-[#4b0225] text-[40px] top-[434.5px] translate-y-[-50%] w-[613px]">
        <p className="leading-[normal]">Luisa Fernanda Correa Lara</p>
      </div>
      <div className="absolute flex flex-col font-['Urbanist:ExtraBold',sans-serif] font-extrabold h-[239px] justify-center leading-[normal] left-[121px] text-[#75023e] text-[20px] top-[577.5px] translate-y-[-50%] w-[614px]">
        <p className="mb-0">
          Soy Luisa, una diseñadora apasionada por dar vida a ideas y construir mundos con identidad.
          <br aria-hidden="true" />
          Desarrollo proyectos digitales que conectan, combinando creatividad, narrativa y estrategia.
        </p>
        <p>
          Mi experiencia abarca desde el diseño publicitario y la gestión de comunidades hasta la programación, pero mi verdadero enfoque está en la creación visual para videojuegos.
          <br aria-hidden="true" />
          Me especializo en el 3D como recurso para experiencias interactivas, explorando diferentes estilos y estéticas para lograr resultados únicos y memorables.
        </p>
      </div>
      <div className="absolute bg-[#4b0225] h-[702px] left-[calc(50%+317px)] rounded-[51px] top-[918px] translate-x-[-50%] w-[1030px]" />
      <div className="absolute flex flex-col font-['Urbanist:ExtraBold',sans-serif] font-extrabold h-[143px] justify-center leading-[0] right-[808px] text-[80px] text-white top-[calc(50%-231.5px)] translate-x-[100%] translate-y-[-50%] w-[725px]">
        <p className="leading-[normal]">MIS HABILIDADES</p>
      </div>
      <div className="absolute flex flex-col font-['Urbanist:Regular',sans-serif] font-normal justify-center leading-[0] left-[calc(50%-88px)] text-[32px] text-white top-[1309px] translate-y-[-50%] w-[679px]">
        <p className="leading-[normal]">
          Cuento con una formación sólida en diseño y producción digital, con dominio avanzado de herramientas como Blender, Illustrator, Premiere Pro y Canva, además de experiencia intermedia en Photoshop, After Effects, Unity y Visual Studio Code. Esta combinación me permite abordar proyectos que van desde la dirección visual y la animación hasta la integración técnica y el desarrollo interactivo.
          <br aria-hidden="true" />
          Además, manejo varios idiomas: español nativo, inglés nivel C1, mandarín (HSK) y portugués nivel B1, lo que me facilita comunicar ideas y colaborar en entornos creativos internacionales.
        </p>
      </div>
      <Header />
    </div>
  );
}