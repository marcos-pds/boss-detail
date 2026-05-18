import React from 'react';
import { Star, MessageSquare } from 'lucide-react';
import ScrollAnimate from './ScrollAnimate';

export default function Testimonials() {
  // Lista de depoimentos fictícios de estética automotiva (ajuste os nomes e textos se quiser)
  const reviews = [
    {
      id: 1,
      name: "Rodrigo Silva",
      vehicle: "Honda Civic (Vitrificação)",
      comment: "O trabalho que o pessoal da Boss Detail fez no meu carro foi espetacular. A pintura parecia espelho e a água simplesmente escorrega. Valeu cada centavo!",
      stars: 5,
      date: "Há 1 semana"
    },
    {
      id: 2,
      name: "Mariana Costa",
      vehicle: "Jeep Compass (Higienização)",
      comment: "Tenho dois cachorros e o banco de tecido estava um caos. O carro voltou cheiroso, sem nenhuma mancha e pareceria que tinha acabado de sair da concessionária.",
      stars: 5,
      date: "Há 2 semanas"
    },
    {
      id: 3,
      name: "Carlos Eduardo",
      vehicle: "VW Gol (Polimento Comercial)",
      comment: "Atendimento nota 10, super profissionais e pontuais. Tiraram aqueles riscos chatos de lavagem de posto que me incomodavam muito. Recomendo demais!",
      stars: 5,
      date: "Há 1 mês"
    }
  ];

  return (
    <section id="depoimentos" className="py-24 px-4 bg-zinc-900/20 border-t border-zinc-900">
      <div className="max-w-6xl mx-auto">
     <ScrollAnimate>  
        {/* Título da Seção */}
        <div className="text-center mb-16">
            
          <span className="text-lime-400 text-sm font-bold uppercase tracking-widest bg-lime-500/10 px-4 py-1.5 rounded-full border border-lime-500/20 inline-flex items-center gap-2">
            <MessageSquare size={14} /> Quem já veio, aprovou
          </span>
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-wide mt-4">
            Avaliações dos Clientes
          </h2>
          <div className="w-16 h-1 bg-lime-500 mx-auto mt-4 rounded-full shadow-lg shadow-lime-500/50" />
        </div>
       </ScrollAnimate>

       
        {/* Grid de Depoimentos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div 
              key={review.id} 
              className="bg-zinc-900 border border-zinc-800/80 p-6 rounded-2xl flex flex-col justify-between hover:border-lime-500/20 transition-all duration-300 group"
            >
        <ScrollAnimate>
              <div>
                {/* Estrelas */}
                <div className="flex gap-1 mb-4 text-amber-400">
                  {[...Array(review.stars)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>

                {/* Texto do comentário */}
                <p className="text-zinc-300 text-sm leading-relaxed italic mb-6">
                  "{review.comment}"
                </p>
              </div>
        </ScrollAnimate>
              {/* Informações do Cliente */}
              <div className="flex items-center justify-between border-t border-zinc-800/60 pt-4 mt-auto">
                <div>
                  <h4 className="font-bold text-zinc-100 text-sm group-hover:text-lime-400 transition-colors">
                    {review.name}
                  </h4>
                  <span className="text-zinc-500 text-xs">
                    {review.vehicle}
                  </span>
                </div>
                <span className="text-zinc-600 text-xs">
                  {review.date}
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}