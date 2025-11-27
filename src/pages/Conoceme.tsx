import imgYo from "figma:asset/34c08265a8a2c315441745f51cdcb853f39f4249.png";
import imgTwitch1 from "figma:asset/39cfb43762f6538e00b89cd3edd9d3bd6f82f6af.png";
import imgInsta1 from "figma:asset/a6c56220095fb29c00d8db4716c5898a23fdd6df.png";
import imgTw1 from "figma:asset/c52d700f9f27572426d842e4e17368ea3b10f33f.png";
import imgDdddd1 from "figma:asset/a02217c2c60c045d7f79c3f3494e93e17daf0a36.png";

export function Conoceme() {
  const socialLinks = [
    { name: 'Twitch', icon: imgTwitch1, url: '#' },
    { name: 'Instagram', icon: imgInsta1, url: '#' },
    { name: 'Twitter', icon: imgTw1, url: '#' },
    { name: 'Mediakit', icon: imgDdddd1, url: '#' }
  ];

  return (
    <div className="relative min-h-[calc(100vh-91px)] bg-white">
      {/* Intro Section */}
      <div className="container mx-auto px-4 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-[1400px] mx-auto">
          {/* Left: Text Content */}
          <div className="order-2 lg:order-1">
            <h1 className="font-['Urbanist'] font-extrabold text-[#4D0C28] text-[64px] md:text-[96px] lg:text-[128px] leading-none mb-6">
              Conoceme
            </h1>
            
            <h2 className="font-['Urbanist'] font-bold text-[#4D0C28] text-[32px] md:text-[40px] leading-none mb-8">
              Luisa Fernanda Correa Lara
            </h2>
            
            <div className="font-['Urbanist'] font-extrabold text-[#4D0C28] text-[18px] md:text-[20px] leading-relaxed space-y-4">
              <p>
                Soy Luisa, una diseñadora apasionada por dar vida a ideas y construir mundos con identidad.
                <br />
                Desarrollo proyectos digitales que conectan, combinando creatividad, narrativa y estrategia.
              </p>
              <p>
                Mi experiencia abarca desde el diseño publicitario y la gestión de comunidades hasta la programación, pero mi verdadero enfoque está en la creación visual para videojuegos.
                <br />
                Me especializo en el 3D como recurso para experiencias interactivas, explorando diferentes estilos y estéticas para lograr resultados únicos y memorables.
              </p>
            </div>
          </div>

          {/* Right: Photo */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="w-full max-w-[500px] lg:max-w-[600px] rounded-[20px] overflow-hidden shadow-lg">
              <img 
                src={imgYo} 
                alt="Luisa Fernanda Correa Lara" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="container mx-auto px-4 py-12 lg:py-20">
        <div className="max-w-[1400px] mx-auto bg-[#4D0C28] rounded-[36px] p-8 md:p-12 lg:p-16 shadow-xl">
          <h2 className="font-['Urbanist'] font-extrabold text-white text-[48px] md:text-[64px] lg:text-[80px] leading-none mb-8 text-center lg:text-left">
            MIS HABILIDADES
          </h2>
          
          <div className="font-['Urbanist'] text-white text-[20px] md:text-[28px] lg:text-[32px] leading-relaxed">
            <p>
              Cuento con una formación sólida en diseño y producción digital, con dominio avanzado de herramientas como Blender, Illustrator, Premiere Pro y Canva, además de experiencia intermedia en Photoshop, After Effects, Unity y Visual Studio Code. Esta combinación me permite abordar proyectos que van desde la dirección visual y la animación hasta la integración técnica y el desarrollo interactivo.
            </p>
            <p className="mt-6">
              Además, manejo varios idiomas: español nativo, inglés nivel C1, mandarín (HSK) y portugués nivel B1, lo que me facilita comunicar ideas y colaborar en entornos creativos internacionales.
            </p>
          </div>
        </div>
      </div>

      {/* Social Links Section */}
      <div className="container mx-auto px-4 py-12 lg:py-20">
        <h2 className="font-['Urbanist'] font-extrabold text-[#4D0C28] text-[48px] md:text-[64px] lg:text-[96px] leading-none text-center mb-12">
          ¿Quieres saber mas?
        </h2>

        <div className="max-w-[600px] mx-auto space-y-6">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              className="block bg-[#4D0C28] rounded-[18px] p-6 flex items-center gap-6 transition-all duration-300 hover:opacity-90 hover:scale-[1.03] shadow-md group"
            >
              <div className="w-[80px] h-[80px] flex-shrink-0 flex items-center justify-center">
                <img 
                  src={link.icon} 
                  alt={link.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-['Urbanist'] font-extrabold text-white text-[40px] md:text-[50px] leading-none">
                {link.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}