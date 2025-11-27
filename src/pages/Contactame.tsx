import { useState, FormEvent } from 'react';
import { Button } from '../components/Button';

export function Contactame() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle form submission (mock for now)
    console.log('Form submitted:', formData);
    alert('¡Gracias por tu mensaje! Me pondré en contacto contigo pronto.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="relative min-h-[calc(100vh-91px)] bg-white">
      <div className="container mx-auto px-4 py-12 lg:py-20">
        <div className="max-w-[800px] mx-auto">
          {/* Hero Title */}
          <h1 className="font-['Urbanist'] font-extrabold text-[#4D0C28] text-[64px] md:text-[96px] lg:text-[128px] leading-none text-center mb-8">
            ¡Hablemos!
          </h1>

          {/* Subtitle */}
          <p className="font-['Urbanist'] font-extrabold text-[#4D0C28] text-[24px] md:text-[32px] text-center mb-12 lg:mb-16">
            ¿Tienes un proyecto en mente? Me encantaría escucharlo y colaborar contigo para hacerlo realidad.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Input */}
            <div>
              <label 
                htmlFor="name"
                className="block font-['Urbanist'] font-bold text-[#4D0C28] text-[20px] md:text-[24px] mb-3"
              >
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-6 py-4 rounded-[16px] border-2 border-[#DCBDCC] bg-white font-['Urbanist'] text-[18px] md:text-[20px] text-[#4D0C28] focus:outline-none focus:border-[#4D0C28] transition-colors"
                placeholder="Tu nombre"
              />
            </div>

            {/* Email Input */}
            <div>
              <label 
                htmlFor="email"
                className="block font-['Urbanist'] font-bold text-[#4D0C28] text-[20px] md:text-[24px] mb-3"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-6 py-4 rounded-[16px] border-2 border-[#DCBDCC] bg-white font-['Urbanist'] text-[18px] md:text-[20px] text-[#4D0C28] focus:outline-none focus:border-[#4D0C28] transition-colors"
                placeholder="tu@email.com"
              />
            </div>

            {/* Message Textarea */}
            <div>
              <label 
                htmlFor="message"
                className="block font-['Urbanist'] font-bold text-[#4D0C28] text-[20px] md:text-[24px] mb-3"
              >
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-6 py-4 rounded-[16px] border-2 border-[#DCBDCC] bg-white font-['Urbanist'] text-[18px] md:text-[20px] text-[#4D0C28] focus:outline-none focus:border-[#4D0C28] transition-colors resize-none"
                placeholder="Cuéntame sobre tu proyecto..."
              />
            </div>

            {/* Submit Button */}
            <Button 
              type="submit"
              className="w-full text-[24px] md:text-[32px] py-6 mt-8"
            >
              Enviar Mensaje
            </Button>
          </form>

          {/* Footer Note */}
          <p className="font-['Urbanist'] font-extrabold text-[#4D0C28] text-[20px] md:text-[24px] text-center mt-12">
            I'm open to collaborations, creative projects, and commissions :)
          </p>
        </div>
      </div>
    </div>
  );
}