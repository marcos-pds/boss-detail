import React from 'react';

export default function Loading({ fadeOut }) {
  return (
    <div className={`fixed inset-0 bg-zinc-950 flex flex-col items-center justify-center z-50 transition-opacity duration-700 ${fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
      
      {/* Container do Logo Centralizado */}
      <div className="flex items-center justify-center font-sans tracking-wide animate-pulse">
        <span className="text-3xl md:text-4xl font-black text-white uppercase">
          BOSS
        </span>
        {/* O ponto verde neon */}
        <span className="text-3xl md:text-4xl font-black text-lime-500 mx-0.5">
          .
        </span>
        <span className="text-3xl md:text-4xl font-black text-white uppercase">
          DETAIL
        </span>
      </div>

      {/* Linha fina decorativa atualizada com o verde padrão e um leve brilho */}
      <div className="w-32 h-[2px] bg-gradient-to-r from-transparent via-lime-500 to-transparent mt-4 shadow-lg shadow-lime-500/50" />

    </div>
  );
}