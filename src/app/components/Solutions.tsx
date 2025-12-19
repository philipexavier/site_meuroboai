import { MessageSquare, ShoppingCart, BarChart3 } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Solutions() {
  const solutions = [
    {
      icon: MessageSquare,
      title: "Chatbot de Atendimento",
      description: "Suporte automatizado que resolve dúvidas, gerencia FAQ inteligente e faz triagem de chamados com eficiência",
      features: ["FAQ Inteligente", "Triagem Automática", "Suporte Multicanal", "Histórico Completo"],
      image: "https://images.unsplash.com/photo-1553775282-20af80779df7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b21lciUyMHN1cHBvcnQlMjBzZXJ2aWNlfGVufDF8fHx8MTc2NTk3NTgyMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: ShoppingCart,
      title: "Chatbot de Vendas",
      description: "Qualificação inteligente de leads, recomendação personalizada de produtos e follow-up automático que converte",
      features: ["Qualificação de Leads", "Recomendações IA", "Follow-up Automático", "Carrinho Integrado"],
      image: "https://images.unsplash.com/photo-1658297063569-162817482fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjBzaG9wcGluZyUyMGVjb21tZXJjZXxlbnwxfHx8fDE3NjYwODExMjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: BarChart3,
      title: "Análise de Dados",
      description: "Dashboards personalizados com relatórios preditivos que identificam padrões e oportunidades de negócio",
      features: ["Dashboards Personalizados", "Relatórios Preditivos", "Análise de Sentimento", "KPIs em Tempo Real"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc2NjAwNDM4Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="solucoes" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Soluções para Cada Necessidade
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tecnologia modular que se adapta perfeitamente ao seu negócio
          </p>
        </div>

        <div className="space-y-12">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div 
                key={index}
                className={`grid md:grid-cols-2 gap-8 items-center ${!isEven ? 'md:flex-row-reverse' : ''}`}
              >
                <div className={`space-y-6 ${!isEven ? 'md:order-2' : ''}`}>
                  <div className={`w-16 h-16 bg-gradient-to-r ${solution.gradient} rounded-2xl flex items-center justify-center`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                    {solution.title}
                  </h3>
                  
                  <p className="text-lg text-gray-600">
                    {solution.description}
                  </p>

                  <div className="grid grid-cols-2 gap-3">
                    {solution.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-[#0066FF] to-[#6B46C1] rounded-full"></div>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button className="px-6 py-3 bg-gradient-to-r from-[#0066FF] to-[#6B46C1] text-white rounded-lg hover:shadow-lg transition-shadow">
                    Saiba Mais
                  </button>
                </div>

                <div className={!isEven ? 'md:order-1' : ''}>
                  <div className="relative rounded-2xl overflow-hidden shadow-xl">
                    <ImageWithFallback 
                      src={solution.image}
                      alt={solution.title}
                      className="w-full h-80 object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-r ${solution.gradient} opacity-10`}></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
