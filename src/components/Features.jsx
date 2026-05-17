import React from 'react';
import { Shield, Sparkles, Car } from 'lucide-react';

export default function Features() {
  return (
    <section className="bg-zinc-900/40 border-y border-zinc-900 py-16 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex gap-4 p-4">
          <div className="p-3 bg-lime-500/10 text-lime-400 rounded-xl h-fit border border-lime-500/10">
            <Shield size={24} />
          </div>
          <div>
            <h3 className="font-bold text-lg mb-1">Proteção de Pintura</h3>
            <p className="text-zinc-400 text-sm">Vitrificação e selantes de alta durabilidade contra ações do tempo.</p>
          </div>
        </div>
        <div className="flex gap-4 p-4">
          <div className="p-3 bg-lime-500/10 text-lime-400 rounded-xl h-fit border border-lime-500/10">
            <Sparkles size={24} />
          </div>
          <div>
            <h3 className="font-bold text-lg mb-1">Brilho Impecável</h3>
            <p className="text-zinc-400 text-sm">Polimento técnico corretivo para remover riscos e imperfeições.</p>
          </div>
        </div>
        <div className="flex gap-4 p-4">
          <div className="p-3 bg-lime-500/10 text-lime-400 rounded-xl h-fit border border-lime-500/10">
            <Car size={24} />
          </div>
          <div>
            <h3 className="font-bold text-lg mb-1">Higienização Interna</h3>
            <p className="text-zinc-400 text-sm">Limpeza detalhada de bancos, painel e teto com foco na saúde.</p>
          </div>
        </div>
      </div>
    </section>
  );
}