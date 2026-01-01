import { Clock, TrendingDown, LineChart, MessageCircle, Link2, TrendingUp } from 'lucide-react';

export function Benefits() {
  const benefits = [
    {
      icon: Clock,
      title: "Atendimento 24/7 sem pausas",
      description: "Seu cliente sempre terá respostas, a qualquer hora do dia ou da noite"
    },
    {
      icon: TrendingDown,
      title: "Redução de até 70% nos custos",
      description: "Diminua gastos operacionais enquanto melhora a qualidade do atendimento"
    },
    {
      icon: LineChart,
      title: "Análise de dados em tempo real",
      description: "Dashboards inteligentes que mostram o que realmente importa"
    },
    {
      icon: MessageCircle,
      title: "Respostas humanizadas",
      description: "IA treinada para conversar naturalmente como sua equipe faria"
    },
    {
      icon: Link2,
      title: "Integração completa",
      description: "Conecte com CRM, ERPs e todos os sistemas que você já usa"
    },
    {
      icon: TrendingUp,
      title: "Escalabilidade ilimitada",
      description: "Cresça seu volume de atendimento sem precisar contratar mais pessoas"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Por que escolher a Meu Robo Ai?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tecnologia de ponta que entrega resultados reais para o seu negócio
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div 
                key={index}
                className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-[#0066FF] to-[#6B46C1] rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
