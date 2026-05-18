import React from 'react';
import { Shield, Sparkles, Car } from 'lucide-react';

export default function Features() {
  return (
    <section className="bg-zinc-900/20 border-y border-zinc-900 py-16 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Item 1 */}
   
        <div className="flex gap-4 p-5 rounded-2xl border border-transparent hover:border-zinc-800 hover:bg-zinc-900/40 transition-all duration-300 group">
          <div className="p-3 bg-lime-500/10 text-lime-400 rounded-xl h-fit border border-lime-500/10 group-hover:scale-110 group-hover:bg-lime-500 group-hover:text-zinc-950 transition-all duration-300">
            <Shield size={24} />
          </div>
          <div>
            <h3 className="font-bold text-lg mb-1 text-zinc-200 group-hover:text-lime-400 transition-colors">Proteção de Pintura</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">Vitrificação e selantes de alta durabilidade contra ações do tempo.</p>
          </div>
        </div>
     
        {/* Item 2 */}
        <div className="flex gap-4 p-5 rounded-2xl border border-transparent hover:border-zinc-800 hover:bg-zinc-900/40 transition-all duration-300 group">
          <div className="p-3 bg-lime-500/10 text-lime-400 rounded-xl h-fit border border-lime-500/10 group-hover:scale-110 group-hover:bg-lime-500 group-hover:text-zinc-950 transition-all duration-300">
            <Sparkles size={24} />
          </div>
          <div>
            <h3 className="font-bold text-lg mb-1 text-zinc-200 group-hover:text-lime-400 transition-colors">Brilho Impecável</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">Polimento técnico corretivo para remover riscos e imperfeições.</p>
          </div>
        </div>

        {/* Item 3 */}
        <div className="flex gap-4 p-5 rounded-2xl border border-transparent hover:border-zinc-800 hover:bg-zinc-900/40 transition-all duration-300 group">
          <div className="p-3 bg-lime-500/10 text-lime-400 rounded-xl h-fit border border-lime-500/10 group-hover:scale-110 group-hover:bg-lime-500 group-hover:text-zinc-950 transition-all duration-300">
            <Car size={24} />
          </div>
          <div>
            <h3 className="font-bold text-lg mb-1 text-zinc-200 group-hover:text-lime-400 transition-colors">Higienização Interna</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">Limpeza detalhada de bancos, painel e teto com foco na saúde.</p>
          </div>
        </div>

      </div>
    </section>
  );
}