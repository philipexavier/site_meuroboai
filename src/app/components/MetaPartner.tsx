import { Shield, CheckCircle, Zap } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function MetaPartner() {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-br from-blue-600 via-[#0066FF] to-blue-700 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left side - Badge and text */}
          <div className="text-white">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
              <Shield className="w-5 h-5 text-yellow-300" />
              <span className="font-semibold">PARCEIRO OFICIAL</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Business Partner Oficial da Meta
            </h2>
            
            <p className="text-lg md:text-xl text-blue-50 mb-6">
              Somos Business Partner Oficial da Meta, habilitados para soluções profissionais de comunicação e automação.
            </p>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0 mt-0.5" />
                <span className="text-blue-50">Acesso a APIs oficiais do WhatsApp Business, Instagram e Facebook</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0 mt-0.5" />
                <span className="text-blue-50">Suporte técnico direto da Meta para garantir estabilidade</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0 mt-0.5" />
                <span className="text-blue-50">Certificação em segurança e conformidade de dados</span>
              </div>
            </div>
          </div>

          {/* Right side - Official seal */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Outer glow effect */}
              <div className="absolute inset-0 bg-white/30 rounded-full blur-2xl"></div>
              
              {/* Main seal container */}
              <div className="relative bg-white rounded-full p-8 shadow-2xl w-72 h-72 flex flex-col items-center justify-center">
                {/* Meta logo */}
                <div className="mb-4">
                  <ImageWithFallback 
                    src="https://images.unsplash.com/photo-1665799871677-f1fd17338b43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXRhJTIwZmFjZWJvb2slMjBsb2dvfGVufDF8fHx8MTc2NzI5MzY0Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Meta Logo"
                    className="w-32 h-32 object-contain"
                  />
                </div>

                {/* Badge text */}
                <div className="text-center">
                  <div className="text-sm font-semibold text-gray-600 uppercase tracking-wider mb-1">
                    Business Partner
                  </div>
                  <div className="text-2xl font-bold bg-gradient-to-r from-[#0066FF] to-blue-600 bg-clip-text text-transparent">
                    OFICIAL
                  </div>
                  <div className="mt-3 pt-3 border-t border-gray-200">
                    <Zap className="w-6 h-6 text-yellow-500 mx-auto" />
                  </div>
                </div>

                {/* Decorative corner elements */}
                <div className="absolute top-4 left-4 w-8 h-8 border-l-4 border-t-4 border-blue-600 rounded-tl-lg"></div>
                <div className="absolute top-4 right-4 w-8 h-8 border-r-4 border-t-4 border-blue-600 rounded-tr-lg"></div>
                <div className="absolute bottom-4 left-4 w-8 h-8 border-l-4 border-b-4 border-blue-600 rounded-bl-lg"></div>
                <div className="absolute bottom-4 right-4 w-8 h-8 border-r-4 border-b-4 border-blue-600 rounded-br-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
