import React from 'react';

export default function Hero({ whatsappUrl }) {
  return (
    <section className="relative py-24 px-4 max-w-6xl mx-auto text-center overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-lime-500/10 rounded-full blur-[120px] pointer-events-none" />

      <span className="text-lime-400 text-sm font-bold uppercase tracking-widest bg-lime-500/10 px-4 py-1.5 rounded-full border border-lime-500/20">
        Estética Automotiva Premium
      </span>
      <h1 className="text-4xl md:text-6xl font-black tracking-tight mt-6 mb-6">
        O cuidado que o seu <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-green-500">
          carro merece.
        </span>
      </h1>
      <p className="text-zinc-400 max-w-2xl mx-auto text-lg mb-10">
        Proteção, brilho e renovação. Deixe seu veículo sob os cuidados de especialistas que entendem de detalhamento automotivo.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <a 
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto bg-gradient-to-r from-lime-500 to-green-600 text-zinc-950 font-black px-8 py-4 rounded-xl text-lg shadow-xl shadow-lime-500/10 hover:shadow-lime-500/20 hover:-translate-y-0.5 transition-all text-center"
        >
          Fazer Orçamento Grátis
        </a>
        <a 
          href="#servicos"
          className="w-full sm:w-auto border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-900 font-bold px-8 py-4 rounded-xl text-lg transition-all text-center"
        >
          Ver Nossos Serviços
        </a>
      </div>
    </section>
  );
}