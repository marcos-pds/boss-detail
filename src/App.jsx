import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Services from './components/Services';
import Footer from './components/Footer';

function App() {
  // Configurações Globais da Empresa - Ajuste aqui quando necessário
  const whatsappNumber = "553183819552"; 
  const instagramUser = "_bossdetail"; 
  const addressText = "Rua taurus 314 condomínio portal do Sol";
  const mapsLink = "https://www.google.com/maps/place/R.+Taurus,+314+-+Ch%C3%A1cara+Cotia,+Contagem+-+MG,+32183-830/@-19.8723867,-44.0492507,15z/data=!3m1!4b1!4m6!3m5!1s0xa693f2d4d55e17:0x12f0101ebd1d42b8!8m2!3d-19.872387!4d-44.038951!16s%2Fg%2F11m63p971q?entry=ttu&g_ep=EgoyMDI2MDUxMy4wIKXMDSoASAFQAw%3D%3D";

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