import React from 'react';
import { Phone, MapPin, Clock } from 'lucide-react';

export default function Footer({ whatsappUrl, instagramUrl, instagramUser, addressText, mapsLink }) {
  return (
    <footer className="border-t border-zinc-900 bg-zinc-950 py-16 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        
        <div>
          <div className="flex flex-col mb-4">
            <span className="text-2xl font-black italic tracking-wider text-transparent bg-clip-text bg-gradient-to-b from-lime-400 to-green-600 leading-none">
              BOSS
            </span>
            <span className="text-[10px] tracking-[0.3em] text-zinc-400 font-bold uppercase pl-0.5">
              DETAIL
            </span>
          </div>
          <p className="text-zinc-500 text-sm">
            Estética automotiva especializada em levar o brilho de carro zero quilômetro de volta para a sua garagem.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="font-bold text-zinc-300 uppercase tracking-wider text-sm">Contatos e Redes</h4>
          
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-zinc-400 hover:text-lime-400 transition-colors text-sm">
            <Phone size={18} className="text-lime-500" />
            WhatsApp: Chamar no Chat
          </a>

          <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-zinc-400 hover:text-lime-400 transition-colors text-sm">
            {/* Ícone SVG estável do Instagram */}
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-lime-500"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            Instagram: @{instagramUser}
          </a>

          <div className="flex items-center gap-3 text-zinc-400 text-sm">
            <Clock size={18} className="text-lime-500" />
            <span>Seg a Sex: 08h às 18h | Sáb: 08h às 13h</span>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="font-bold text-zinc-300 uppercase tracking-wider text-sm">Onde Estamos</h4>
          <a href={mapsLink} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 text-zinc-400 hover:text-lime-400 transition-colors text-sm">
            <MapPin size={18} className="text-lime-500 shrink-0 mt-0.5" />
            <span>{addressText} <br /> <span className="text-xs text-lime-500/70 underline">Ver no Google Maps</span></span>
          </a>
        </div>

      </div>

      <div className="max-w-6xl mx-auto text-center text-zinc-600 text-xs mt-16 pt-8 border-t border-zinc-900">
        © {new Date().getFullYear()} Boss Detail. Todos os direitos reservados.
      </div>
    </footer>
  );
}