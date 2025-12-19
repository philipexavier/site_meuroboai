import { Check, Sparkles } from 'lucide-react';

export function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "R$ 297",
      period: "/mês",
      description: "Para pequenos negócios",
      limit: "até 1.000 conversas/mês",
      features: [
        "1 canal de atendimento",
        "Chatbot personalizado",
        "Respostas automáticas",
        "Relatórios básicos",
        "Suporte por email",
        "Integração WhatsApp"
      ],
      highlighted: false,
      cta: "Começar Agora"
    },
    {
      name: "Professional",
      price: "R$ 797",
      period: "/mês",
      description: "Para empresas em crescimento",
      limit: "até 5.000 conversas/mês",
      features: [
        "3 canais de atendimento",
        "IA avançada com aprendizado",
        "Análise de sentimento",
        "Dashboards personalizados",
        "Suporte prioritário",
        "Integração CRM/ERP",
        "API completa",
        "Webhooks customizados"
      ],
      highlighted: true,
      cta: "Mais Popular",
      badge: "Recomendado"
    },
    {
      name: "Enterprise",
      price: "Personalizado",
      period: "",
      description: "Solução customizada",
      limit: "volume ilimitado",
      features: [
        "Canais ilimitados",
        "IA dedicada e treinada",
        "Análise preditiva avançada",
        "Relatórios executivos",
        "Gerente de conta dedicado",
        "SLA garantido",
        "Infraestrutura dedicada",
        "Customizações sob demanda",
        "Treinamento da equipe"
      ],
      highlighted: false,
      cta: "Falar com Vendas"
    }
  ];

  return (
    <section id="precos" className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Planos e Preços
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            Escolha o plano ideal para o tamanho do seu negócio
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#0066FF] to-[#6B46C1] text-white rounded-full">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">20% de desconto nos primeiros 3 meses</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative bg-white rounded-2xl p-8 ${
                plan.highlighted 
                  ? 'ring-2 ring-[#0066FF] shadow-2xl scale-105' 
                  : 'shadow-lg'
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-[#0066FF] to-[#6B46C1] text-white text-sm font-medium rounded-full">
                  {plan.badge}
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
                
                <div className="mb-2">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  {plan.period && <span className="text-gray-600">{plan.period}</span>}
                </div>
                
                <p className="text-sm text-gray-500">{plan.limit}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#0066FF] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button 
                className={`w-full py-3 rounded-lg font-medium transition-all ${
                  plan.highlighted
                    ? 'bg-gradient-to-r from-[#0066FF] to-[#6B46C1] text-white hover:shadow-lg'
                    : 'border-2 border-[#0066FF] text-[#0066FF] hover:bg-blue-50'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Todos os planos incluem: Sem taxa de setup • Cancele quando quiser • Dados seguros e criptografados
          </p>
        </div>
      </div>
    </section>
  );
}
