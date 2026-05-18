import React, { useState } from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';
import ScrollAnimate from './ScrollAnimate';

export default function Faq() {
  // Estado para armazenar qual pergunta está expandida (null = nenhuma)
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: "Qual é o tempo de execução de um polimento?",
      answer: "O tempo médio para um polimento comercial ou técnico varia de 1 a 2 dias, dependendo do estado atual da pintura do veículo e do nível de correção necessário."
    },
    {
      question: "O que está incluso na higienização detalhada?",
      answer: "Está inclusa a limpeza profunda com extratora de todos os bancos, teto, carpetes, painel, laterais de porta e porta-malas, utilizando produtos bactericidas que eliminam odores, ácaros e fungos."
    },
    {
      question: "Como funciona a garantia da vitrificação?",
      answer: "A vitrificação cria uma camada cerâmica de alta resistência sobre a pintura. Dependendo do produto escolhido, a proteção e o brilho hidrofóbico duram de 1 a 3 anos, desde que seguidas as recomendações de lavagem."
    },
    {
      question: "Preciso agendar um horário com antecedência?",
      answer: "Sim, como trabalhamos com detalhamento automotivo premium e dedicação exclusiva a cada veículo, os atendimentos são realizados apenas mediante agendamento prévio pelo WhatsApp."
    }
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 px-4 bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-4xl mx-auto">
        
        {/* Título da Secção */}
        <div className="text-center mb-16">
          <span className="text-lime-400 text-sm font-bold uppercase tracking-widest bg-lime-500/10 px-4 py-1.5 rounded-full border border-lime-500/20 inline-flex items-center gap-2">
            <HelpCircle size={14} /> Dúvidas Comuns
          </span>
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-wide mt-4">
            Perguntas Frequentes
          </h2>
          <div className="w-16 h-1 bg-lime-500 mx-auto mt-4 rounded-full shadow-lg shadow-lime-500/50" />
        </div>

        {/* Lista de Accordions */}
        <div className="space-y-4">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <ScrollAnimate key={index}>
                <div className="bg-zinc-900 border border-zinc-800/80 rounded-2xl overflow-hidden transition-all duration-300 hover:border-zinc-700">
                  
                  {/* Botão da Pergunta */}
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full text-left px-6 py-5 flex justify-between items-center gap-4 font-bold text-zinc-100 hover:text-lime-400 transition-colors cursor-pointer"
                  >
                    <span className="text-base md:text-lg">{item.question}</span>
                    <ChevronDown 
                      size={20} 
                      className={`text-lime-500 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
                    />
                  </button>

                  {/* Bloco de Resposta Animado */}
                  <div 
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      isOpen ? 'max-h-40 border-t border-zinc-800/50' : 'max-h-0'
                    }`}
                  >
                    <div className="p-6 text-zinc-400 text-sm md:text-base leading-relaxed bg-zinc-900/50">
                      {item.answer}
                    </div>
                  </div>

                </div>
              </ScrollAnimate>
            );
          })}
        </div>

      </div>
    </section>
  );
}