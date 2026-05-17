import React from 'react';

export default function Services({ whatsappUrl }) {
  return (
    <section id="servicos" className="py-24 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-black uppercase tracking-wide">Nossos Serviços</h2>
        <div className="w-16 h-1 bg-lime-500 mx-auto mt-4 rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-zinc-900 border border-zinc-800/80 p-6 rounded-2xl hover:border-lime-500/30 transition-all flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold mb-2">Polimento Comercial</h3>
            <p className="text-zinc-400 text-sm mb-6">Ideal para devolver o brilho e remover marcas superficiais da pintura do dia a dia.</p>
          </div>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-lime-400 font-bold text-sm flex items-center gap-1 hover:underline">
            Consultar preço →
          </a>
        </div>

        <div className="bg-zinc-900 border border-zinc-800/80 p-6 rounded-2xl hover:border-lime-500/30 transition-all flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold mb-2">Vitrificação de Pintura</h3>
            <p className="text-zinc-400 text-sm mb-6">Aplicação de revestimento cerâmico que protege a pintura por anos contra raios UV e sujeira.</p>
          </div>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-lime-400 font-bold text-sm flex items-center gap-1 hover:underline">
            Consultar preço →
          </a>
        </div>

        <div className="bg-zinc-900 border border-zinc-800/80 p-6 rounded-2xl hover:border-lime-500/30 transition-all flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold mb-2">Higienização Detalhada</h3>
            <p className="text-zinc-400 text-sm mb-6">Remoção de manchas, odores e ácaros de bancos e estofados com extratora e produtos bactericidas.</p>
          </div>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-lime-400 font-bold text-sm flex items-center gap-1 hover:underline">
            Consultar preço →
          </a>
        </div>
      </div>
    </section>
  );
}