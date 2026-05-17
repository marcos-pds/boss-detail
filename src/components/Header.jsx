import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function Header({ whatsappUrl }) {
  return (
    <header className="border-b border-zinc-800 bg-zinc-900/50 backdrop-blur sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex flex-col">
          <span className="text-3xl font-black italic tracking-wider text-transparent bg-clip-text bg-gradient-to-b from-lime-400 to-green-600 leading-none">
            BOSS
          </span>
          <span className="text-xs tracking-[0.3em] text-zinc-400 font-bold uppercase pl-0.5">
            DETAIL
          </span>
        </div>

        <a 
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-gradient-to-r from-lime-500 to-green-600 text-zinc-950 px-4 py-2 rounded-full font-bold shadow-lg shadow-lime-500/20 hover:scale-105 transition-all"
        >
          <MessageCircle size={18} />
          Agendar Horário
        </a>
      </div>
    </header>
  );
}