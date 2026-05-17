import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Services from './components/Services';
import Footer from './components/Footer';

function App() {
  // Configurações Globais da Empresa - Ajuste aqui quando necessário
  const whatsappNumber = "5531999999999"; 
  const instagramUser = "boss_detail"; 
  const addressText = "Av. Principal, 123 - Contagem, MG";
  const mapsLink = "https://maps.google.com";

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Ol%C3%A1%21+Gostaria+de+conhecer+os+servi%C3%A7os+da+Boss+Detail+e+fazer+um+or%C3%A7amento.`;
  const instagramUrl = `https://instagram.com/${instagramUser}`;

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-lime-500 selection:text-black">
      <Header whatsappUrl={whatsappUrl} />
      <main>
        <Hero whatsappUrl={whatsappUrl} />
        <Features />
        <Services whatsappUrl={whatsappUrl} />
      </main>
      <Footer 
        whatsappUrl={whatsappUrl}
        instagramUrl={instagramUrl}
        instagramUser={instagramUser}
        addressText={addressText}
        mapsLink={mapsLink}
      />
    </div>
  );
}

export default App;