import { ArrowRight, MessageSquare } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-blue-100 text-[#0066FF] rounded-full text-sm font-medium">
              🚀 Primeiros 3 meses com 20% de desconto
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Atendimento Inteligente{' '}
              <span className="bg-gradient-to-r from-[#0066FF] to-[#6B46C1] bg-clip-text text-transparent">
                24/7 com IA
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600">
              Chatbots humanizados que reduzem custos, aumentam vendas e transformam dados em insights estratégicos para seu negócio crescer
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                href="#demo"
                className="group px-8 py-4 bg-gradient-to-r from-[#0066FF] to-[#6B46C1] text-white rounded-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
              >
                Agende uma Demo Gratuita
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <a 
                href="https://wa.me/5548996169450"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border-2 border-[#0066FF] text-[#0066FF] rounded-lg hover:bg-blue-50 transition-colors flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-5 h-5" />
                Falar com Especialista
              </a>
            </div>

            <div className="flex items-center gap-8 pt-6">
              <div>
                <div className="text-2xl font-bold text-gray-900">+2.500</div>
                <div className="text-sm text-gray-600">conversas/dia</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">+10</div>
                <div className="text-sm text-gray-600">empresas atendidas</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">90%</div>
                <div className="text-sm text-gray-600">satisfação</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#0066FF] to-[#6B46C1] rounded-3xl blur-3xl opacity-20"></div>
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1620429948700-24e48a41d5aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMHJvYm90JTIwY2hhdGJvdCUyMG1vZGVybnxlbnwxfHx8fDE3NjYwODg2MzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="AI Chatbot Robot"
              className="relative rounded-3xl shadow-2xl w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
