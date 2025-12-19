import { Hotel, ShoppingBag, Briefcase, GraduationCap, Heart } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function UseCases() {
  const cases = [
    {
      icon: Hotel,
      title: "Hotéis e Hospedagem",
      description: "Reservas automatizadas, check-in digital e atendimento 24/7 para hóspedes",
      image: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMGhvc3BpdGFsaXR5fGVufDF8fHx8MTc2NjA4ODYzM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      color: "bg-blue-500"
    },
    {
      icon: ShoppingBag,
      title: "E-commerce",
      description: "Recomendações personalizadas, rastreamento de pedidos e suporte de vendas",
      image: "https://images.unsplash.com/photo-1658297063569-162817482fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjBzaG9wcGluZyUyMGVjb21tZXJjZXxlbnwxfHx8fDE3NjYwODExMjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      color: "bg-purple-500"
    },
    {
      icon: Briefcase,
      title: "Serviços Profissionais",
      description: "Agendamentos inteligentes, qualificação de leads e CRM integrado",
      image: "https://images.unsplash.com/photo-1758310999515-645097b709db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBzZXJ2aWNlcyUyMG9mZmljZXxlbnwxfHx8fDE3NjYwMTg4MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      color: "bg-green-500"
    },
    {
      icon: GraduationCap,
      title: "Educação",
      description: "Matrículas online, suporte acadêmico e comunicação com alunos",
      image: "https://images.unsplash.com/photo-1730382624709-81e52dd294d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGdyb3d0aCUyMHN1Y2Nlc3N8ZW58MXx8fHwxNzY2MDY5ODk0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      color: "bg-yellow-500"
    },
    {
      icon: Heart,
      title: "Saúde",
      description: "Agendamento de consultas, lembretes e triagem de sintomas",
      image: "https://images.unsplash.com/photo-1553775282-20af80779df7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b21lciUyMHN1cHBvcnQlMjBzZXJ2aWNlfGVufDF8fHx8MTc2NTk3NTgyMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      color: "bg-red-500"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Casos de Uso por Segmento
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Soluções especializadas para diferentes indústrias
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((useCase, index) => {
            const Icon = useCase.icon;
            return (
              <div 
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all cursor-pointer"
              >
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback 
                    src={useCase.image}
                    alt={useCase.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className={`absolute top-4 left-4 w-12 h-12 ${useCase.color} rounded-xl flex items-center justify-center`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-600">
                    {useCase.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
