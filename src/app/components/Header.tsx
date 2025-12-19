import { useState } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <MessageCircle className="w-8 h-8 text-[#0066FF]" />
            <span className="font-bold text-xl bg-gradient-to-r from-[#0066FF] to-[#6B46C1] bg-clip-text text-transparent">
              Meu Robo Ai
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('como-funciona')} className="text-gray-600 hover:text-[#0066FF] transition-colors">
              Como Funciona
            </button>
            <button onClick={() => scrollToSection('solucoes')} className="text-gray-600 hover:text-[#0066FF] transition-colors">
              Soluções
            </button>
            <button onClick={() => scrollToSection('precos')} className="text-gray-600 hover:text-[#0066FF] transition-colors">
              Preços
            </button>
            <button onClick={() => scrollToSection('faq')} className="text-gray-600 hover:text-[#0066FF] transition-colors">
              FAQ
            </button>
            <a 
              href="#demo"
              className="px-6 py-2 bg-gradient-to-r from-[#0066FF] to-[#6B46C1] text-white rounded-lg hover:shadow-lg transition-shadow"
            >
              Demo Gratuita
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col gap-4">
              <button onClick={() => scrollToSection('como-funciona')} className="text-gray-600 hover:text-[#0066FF] transition-colors text-left">
                Como Funciona
              </button>
              <button onClick={() => scrollToSection('solucoes')} className="text-gray-600 hover:text-[#0066FF] transition-colors text-left">
                Soluções
              </button>
              <button onClick={() => scrollToSection('precos')} className="text-gray-600 hover:text-[#0066FF] transition-colors text-left">
                Preços
              </button>
              <button onClick={() => scrollToSection('faq')} className="text-gray-600 hover:text-[#0066FF] transition-colors text-left">
                FAQ
              </button>
              <a 
                href="#demo"
                className="px-6 py-2 bg-gradient-to-r from-[#0066FF] to-[#6B46C1] text-white rounded-lg hover:shadow-lg transition-shadow text-center"
              >
                Demo Gratuita
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
