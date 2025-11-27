import { useState } from 'react';
import imgRecursoConejo2 from "figma:asset/aa5d88ceb0b807eddd78b689ee855dd5b66744fe.png";
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { label: 'PORTAFOLIO', page: 'portafolio' },
    { label: 'CONOCEME', page: 'conoceme' },
    { label: 'CONTACTAME', page: 'contactame' }
  ];

  const handleNavigate = (page: string) => {
    onNavigate(page);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full px-4 py-4">
        <div className="mx-auto max-w-[1413px] bg-[#DCBDCC] rounded-[17px] h-[59px] flex items-center justify-between px-6 relative">
          {/* Logo */}
          <button 
            onClick={() => handleNavigate('home')}
            className="w-[61px] h-[38px] flex-shrink-0 transition-opacity hover:opacity-80"
          >
            <img 
              src={imgRecursoConejo2} 
              alt="LUFER Logo" 
              className="w-full h-full object-cover"
            />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-16 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            {menuItems.map((item) => (
              <button
                key={item.page}
                onClick={() => handleNavigate(item.page)}
                className="font-['Urbanist'] font-extrabold text-[#4D0C28] text-[32px] leading-none whitespace-nowrap transition-all hover:opacity-80 hover:scale-105"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-[#4D0C28] p-2 transition-colors hover:opacity-80"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-[280px] bg-[#DCBDCC] z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col p-8 gap-6 mt-20">
          {menuItems.map((item) => (
            <button
              key={item.page}
              onClick={() => handleNavigate(item.page)}
              className="font-['Urbanist'] font-extrabold text-[#4D0C28] text-[28px] leading-none text-left transition-all hover:opacity-80 hover:translate-x-2"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}