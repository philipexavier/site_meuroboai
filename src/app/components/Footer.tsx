import { MessageCircle, Instagram, Facebook, Linkedin, Twitter, Mail, MapPin, Phone } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo e Descrição */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <MessageCircle className="w-8 h-8 text-[#0066FF]" />
              <span className="font-bold text-xl bg-gradient-to-r from-[#0066FF] to-[#6B46C1] bg-clip-text text-transparent">
                Meu Robo Ai
              </span>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Transformando atendimento com inteligência artificial
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-[#0066FF] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-[#0066FF] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-[#0066FF] transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-[#0066FF] transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Soluções */}
          <div>
            <h3 className="text-white font-semibold mb-4">Soluções</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-[#0066FF] transition-colors">Chatbot de Atendimento</a></li>
              <li><a href="#" className="hover:text-[#0066FF] transition-colors">Chatbot de Vendas</a></li>
              <li><a href="#" className="hover:text-[#0066FF] transition-colors">Análise de Dados</a></li>
              <li><a href="#" className="hover:text-[#0066FF] transition-colors">Integrações</a></li>
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h3 className="text-white font-semibold mb-4">Empresa</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-[#0066FF] transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="hover:text-[#0066FF] transition-colors">Cases de Sucesso</a></li>
              <li><a href="#" className="hover:text-[#0066FF] transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-[#0066FF] transition-colors">Carreiras</a></li>
              <li><a href="#" className="hover:text-[#0066FF] transition-colors">Contato</a></li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contato</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Mail className="w-5 h-5 text-[#0066FF] flex-shrink-0" />
                <span>contato@meuroboai.com.br</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-5 h-5 text-[#0066FF] flex-shrink-0" />
                <span>(48) 9 9616-9450</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-[#0066FF] flex-shrink-0" />
                <span>Florianópolis, SC<br/>Brasil</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <div>
              <p>© {currentYear} Meu Robo Ai - Todos os direitos reservados</p>
              <p className="text-xs mt-1">CNPJ: 64.103.791/0001-68</p>
            </div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-[#0066FF] transition-colors">Termos de Uso</a>
              <a href="#" className="hover:text-[#0066FF] transition-colors">Privacidade</a>
              <a href="#" className="hover:text-[#0066FF] transition-colors">LGPD</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
