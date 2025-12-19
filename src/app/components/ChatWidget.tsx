import { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Olá! 👋 Sou o assistente virtual da Meu Robo Ai. Como posso ajudar você hoje?", isBot: true }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    // Adiciona mensagem do usuário
    const newMessages = [...messages, { text: inputMessage, isBot: false }];
    setMessages(newMessages);
    setInputMessage('');

    // Simula resposta do bot
    setTimeout(() => {
      const botResponse = getBotResponse(inputMessage);
      setMessages([...newMessages, { text: botResponse, isBot: true }]);
    }, 1000);
  };

  const getBotResponse = (message: string) => {
    const lowerMessage = message.toLowerCase();
    
    if (lowerMessage.includes('preço') || lowerMessage.includes('valor') || lowerMessage.includes('quanto custa')) {
      return "Temos 3 planos: Starter (R$ 297/mês), Professional (R$ 797/mês) e Enterprise (personalizado). Qual se encaixa melhor para você?";
    }
    if (lowerMessage.includes('demo') || lowerMessage.includes('demonstração')) {
      return "Que ótimo! Para agendar uma demo, por favor preencha o formulário na seção 'Agende uma Demo Gratuita' ou me informe seu email.";
    }
    if (lowerMessage.includes('integra') || lowerMessage.includes('whatsapp')) {
      return "Integramos com WhatsApp, Instagram, Facebook, site e também CRMs como HubSpot, RD Station e Pipedrive. A implementação leva de 3 a 7 dias.";
    }
    if (lowerMessage.includes('funciona') || lowerMessage.includes('como')) {
      return "É simples: 1) Conectamos seus canais, 2) A IA aprende sobre seu negócio, 3) Você recebe insights através de dashboards. Quer saber mais sobre alguma etapa específica?";
    }
    
    return "Entendi! Para melhor atendê-lo, gostaria de falar com um especialista? Ou posso responder dúvidas sobre preços, integrações e funcionalidades.";
  };

  return (
    <>
      {/* Widget Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-r from-[#0066FF] to-[#6B46C1] text-white rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center z-50 animate-bounce"
        >
          <MessageCircle className="w-7 h-7" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[600px] bg-white rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#0066FF] to-[#6B46C1] p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-white font-semibold">Assistente Meu Robo Ai</div>
                <div className="text-white/80 text-xs">Online agora</div>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/20 rounded-lg p-1 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-2xl ${
                    message.isBot
                      ? 'bg-white text-gray-800 shadow-sm'
                      : 'bg-gradient-to-r from-[#0066FF] to-[#6B46C1] text-white'
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200 bg-white">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Digite sua mensagem..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0066FF] focus:border-transparent outline-none"
              />
              <button
                onClick={handleSendMessage}
                className="px-4 py-2 bg-gradient-to-r from-[#0066FF] to-[#6B46C1] text-white rounded-lg hover:shadow-lg transition-shadow"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
