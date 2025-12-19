import { Database, Brain, BarChart3 } from 'lucide-react';

export function HowItWorks() {
  const steps = [
    {
      icon: Database,
      number: "01",
      title: "Conectamos sua base",
      description: "Integramos WhatsApp, Instagram, Facebook e site"
    },
    {
      icon: Brain,
      number: "02",
      title: "IA aprende seu negócio",
      description: "Chatbot personalizado com respostas humanizadas"
    },
    {
      icon: BarChart3,
      number: "03",
      title: "Você recebe insights",
      description: "Dashboards com análise de dados e oportunidades"
    }
  ];

  return (
    <section id="como-funciona" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Automação Simples, Resultados Extraordinários
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Em apenas 3 passos você transforma o atendimento da sua empresa
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0066FF] to-[#6B46C1] rounded-2xl blur-xl opacity-30"></div>
                    <div className="relative w-20 h-20 bg-gradient-to-r from-[#0066FF] to-[#6B46C1] rounded-2xl flex items-center justify-center">
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                  </div>
                  
                  <div className="text-5xl font-bold text-gray-100">{step.number}</div>
                  
                  <h3 className="text-xl font-bold text-gray-900">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </div>

                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-[#0066FF] to-[#6B46C1] opacity-20 -z-10"></div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
