import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';

export function FAQ() {
  const faqs = [
    {
      question: "Como funciona a integração?",
      answer: "A integração é simples e rápida. Nossa equipe técnica configura tudo para você em até 48 horas. Conectamos o chatbot aos seus canais (WhatsApp, Instagram, Facebook, site) através de APIs oficiais. Não é necessário conhecimento técnico da sua parte."
    },
    {
      question: "Quanto tempo leva para implementar?",
      answer: "O processo completo leva de 3 a 7 dias úteis, dependendo da complexidade. Dia 1-2: Configuração inicial e integração dos canais. Dia 3-5: Treinamento da IA com suas informações. Dia 6-7: Testes e ajustes finais. Você pode começar a usar em modo de teste desde o primeiro dia."
    },
    {
      question: "Posso cancelar a qualquer momento?",
      answer: "Sim, não há fidelidade ou multa por cancelamento. Você pode cancelar seu plano a qualquer momento e o serviço continuará ativo até o final do período já pago. Todos os seus dados podem ser exportados antes do cancelamento."
    },
    {
      question: "O chatbot substitui minha equipe?",
      answer: "Não necessariamente. O chatbot complementa sua equipe, automatizando tarefas repetitivas e atendimento básico. Sua equipe pode focar em casos complexos e vendas. Muitos clientes mantêm equipes menores e mais estratégicas, enquanto o chatbot cuida do volume."
    },
    {
      question: "Quais plataformas são suportadas?",
      answer: "Atualmente suportamos: WhatsApp Business API, Instagram Direct, Facebook Messenger, site (widget web), Telegram. Também integramos com CRMs populares (HubSpot, RD Station, Pipedrive) e ERPs (Bling, Tiny, SAP)."
    },
    {
      question: "A IA entende gírias e erros de digitação?",
      answer: "Sim! Nossa IA é treinada para compreender linguagem natural, incluindo gírias brasileiras, erros de digitação comuns, abreviações e diferentes formas de fazer a mesma pergunta. Ela aprende continuamente com as conversas."
    },
    {
      question: "Como funciona o suporte técnico?",
      answer: "Plano Starter: Suporte por email em até 24h. Plano Professional: Suporte prioritário por chat em até 4h. Plano Enterprise: Gerente de conta dedicado + suporte 24/7 com SLA garantido."
    },
    {
      question: "Meus dados estão seguros?",
      answer: "Totalmente. Utilizamos criptografia de ponta a ponta, servidores em nuvem certificados (AWS) e estamos em conformidade com a LGPD. Seus dados nunca são compartilhados e você tem controle total sobre eles."
    }
  ];

  return (
    <section id="faq" className="py-16 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-lg text-gray-600">
            Tire suas dúvidas sobre nossa solução
          </p>
        </div>

        <Accordion.Root type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <Accordion.Item 
              key={index} 
              value={`item-${index}`}
              className="bg-gray-50 rounded-xl overflow-hidden"
            >
              <Accordion.Header>
                <Accordion.Trigger className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-100 transition-colors group">
                  <span className="font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown className="w-5 h-5 text-[#0066FF] flex-shrink-0 transition-transform group-data-[state=open]:rotate-180" />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="px-6 pb-6 text-gray-600 leading-relaxed">
                {faq.answer}
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>

        <div className="mt-12 text-center p-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl">
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            Ainda tem dúvidas?
          </h3>
          <p className="text-gray-600 mb-4">
            Nossa equipe está pronta para ajudar você
          </p>
          <button className="px-6 py-3 bg-gradient-to-r from-[#0066FF] to-[#6B46C1] text-white rounded-lg hover:shadow-lg transition-shadow">
            Falar com Especialista
          </button>
        </div>
      </div>
    </section>
  );
}
