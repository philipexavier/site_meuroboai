import { Star, Quote } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      name: "Carlos Silva",
      role: "CEO, TechStore Brasil",
      content: "Reduzimos 60% do tempo de atendimento e aumentamos a satisfação dos clientes em 40%. O ROI foi visível em menos de 2 meses.",
      rating: 5,
      company: "E-commerce"
    },
    {
      name: "Ana Paula Costa",
      role: "Gerente de Operações, Hotel Vista Mar",
      content: "O chatbot da Meu Robo Ai atende melhor que nossa antiga equipe humana. Os hóspedes adoram a rapidez nas respostas.",
      rating: 5,
      company: "Hotelaria"
    },
    {
      name: "Roberto Mendes",
      role: "Diretor Comercial, EduTech Academy",
      content: "Conseguimos escalar nosso atendimento de 100 para 1000 alunos sem contratar ninguém. A IA entende perfeitamente as dúvidas dos estudantes.",
      rating: 5,
      company: "Educação"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Empresas que Confiam
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Veja o que nossos clientes dizem sobre a transformação digital
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl relative"
            >
              <Quote className="absolute top-4 right-4 w-12 h-12 text-[#0066FF] opacity-20" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              <div className="border-t border-gray-200 pt-4">
                <div className="font-bold text-gray-900">{testimonial.name}</div>
                <div className="text-sm text-gray-600">{testimonial.role}</div>
                <div className="text-xs text-[#0066FF] font-medium mt-1">{testimonial.company}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center gap-12 flex-wrap">
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-[#0066FF] to-[#6B46C1] bg-clip-text text-transparent">+2.500</div>
            <div className="text-gray-600 mt-1">conversas por dia</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-[#0066FF] to-[#6B46C1] bg-clip-text text-transparent">+10</div>
            <div className="text-gray-600 mt-1">empresas atendidas</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-[#0066FF] to-[#6B46C1] bg-clip-text text-transparent">90%</div>
            <div className="text-gray-600 mt-1">taxa de satisfação</div>
          </div>
        </div>
      </div>
    </section>
  );
}
