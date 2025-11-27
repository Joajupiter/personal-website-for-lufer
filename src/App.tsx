import { useState } from 'react';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { Portafolio } from './pages/Portafolio';
import { Conoceme } from './pages/Conoceme';
import { Contactame } from './pages/Contactame';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'portafolio':
        return <Portafolio />;
      case 'conoceme':
        return <Conoceme />;
      case 'contactame':
        return <Contactame />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      <main>{renderPage()}</main>
    </div>
  );
}
