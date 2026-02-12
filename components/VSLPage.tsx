
import React, { useState, useEffect, useRef } from 'react';

const testimonials = [
  {
    name: "Ana e Marcos (Curitiba/PR)",
    text: "Estávamos separados há 3 meses e eu já tinha perdido as esperanças. O Plano de Reversão me mostrou erros que eu nem sabia que cometia. Hoje voltamos e estamos melhor do que no início do namoro.",
    stars: 5,
    tag: "Restaurado em 12 dias"
  },
  {
    name: "Juliana T. (São Paulo/SP)",
    text: "O silêncio na nossa casa era ensurdecedor. O método de comunicação não violenta salvou meu casamento de 12 anos. Recomendo para todos que sentem que o amor está esfriando.",
    stars: 5,
    tag: "Casamento Blindado"
  },
  {
    name: "Ricardo e Patrícia (Belo Horizonte/MG)",
    text: "Eu achava que o divórcio era o único caminho. O contraste de valor que o curso faz abriu meus olhos. Valeu cada centavo para ver minha família unida de novo.",
    stars: 5,
    tag: "Família Unida"
  },
  {
    name: "Cláudia M. (Salvador/BA)",
    text: "O método de Reprogramação Magnética é surreal. Em menos de 48 horas ele me procurou querendo conversar depois de semanas de bloqueio.",
    stars: 5,
    tag: "Reconexão Imediata"
  },
  {
    name: "Felipe S. (Porto Alegre/RS)",
    text: "Eu era muito reativo e afastei ela. O curso me ensinou a ter inteligência emocional e a reconquistar o respeito dela antes de qualquer coisa.",
    stars: 5,
    tag: "Mudança Interna"
  }
];

const videoTestimonials = [
  { id: 1, quote: "Minha vida mudou em 7 dias...", wistiaId: "d26a5l0mu7", aspect: "0.5504587155963303" },
  { id: 2, quote: "Recuperei meu casamento após 2 anos de briga.", wistiaId: "2e3i7kc4d2", aspect: "0.5504587155963303" },
  { id: 3, quote: "O método que realmente funciona no Brasil.", wistiaId: "nfduva0wh3", aspect: "0.5504587155963303" },
  { id: 4, quote: "Nunca imaginei que seria tão rápido.", wistiaId: "3c9jex60yz", aspect: "0.5504587155963303" }
];

const imageTestimonials = [
  { id: 1, title: "Superação #1", desc: "O que parecia impossível aconteceu. O Relatio nos deu uma nova chance.", url: "https://imgur.com/pyofhQd.jpg" },
  { id: 2, title: "Superação #2", desc: "Voltamos a ser o casal apaixonado de 10 anos atrás.", url: "https://imgur.com/4O5J75n.jpg" },
  { id: 3, title: "Superação #3", desc: "A paz voltou para o meu lar e para os meus filhos.", url: "https://imgur.com/18sxadM.jpg" },
  { id: 4, title: "Superação #4", desc: "Gratidão eterna ao Plano de Reversão Relatio.", url: "https://imgur.com/gNJV2Mo.jpg" },
  { id: 5, title: "Confirmação", desc: "Receber essa mensagem depois de 1 mês de silêncio foi a melhor sensação.", url: "https://imgur.com/4O5J75n.jpg" },
  { id: 6, title: "Paz no Lar", desc: "O ambiente da nossa casa mudou completamente. Meus filhos agradecem.", url: "https://imgur.com/18sxadM.jpg" }
];

const WistiaPlayer: React.FC<{ mediaId: string; aspect: string }> = ({ mediaId, aspect }) => {
  useEffect(() => {
    if (!document.querySelector(`script[src="https://fast.wistia.com/embed/${mediaId}.js"]`)) {
      const script = document.createElement('script');
      script.src = `https://fast.wistia.com/embed/${mediaId}.js`;
      script.async = true;
      script.type = 'module';
      document.head.appendChild(script);
    }
  }, [mediaId]);

  const paddingTop = (1 / parseFloat(aspect)) * 100;
  const WistiaCustomTag = 'wistia-player' as any;

  return (
    <div className="w-full h-full relative">
      <style>{`
        wistia-player[media-id='${mediaId}']:not(:defined) { 
          background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/${mediaId}/swatch'); 
          display: block; 
          filter: blur(5px); 
          padding-top: ${paddingTop}%; 
        }
      `}</style>
      <WistiaCustomTag media-id={mediaId} aspect={aspect}></WistiaCustomTag>
    </div>
  );
};

const VSLPage: React.FC = () => {
  const [currentVideoSlide, setCurrentVideoSlide] = useState(0);
  const [currentImageSlide, setCurrentImageSlide] = useState(0);
  const offersRef = useRef<HTMLElement>(null);

  const checkoutLink = "https://www.ggcheckout.com/checkout/v2/REJSI0EhWtp0FKnDdLFL";

  const scrollToOffers = () => {
    offersRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const nextVideo = () => setCurrentVideoSlide((prev) => (prev + 1) % videoTestimonials.length);
  const prevVideo = () => setCurrentVideoSlide((prev) => (prev === 0 ? videoTestimonials.length - 1 : prev - 1));

  const nextImage = () => setCurrentImageSlide((prev) => (prev + 1) % imageTestimonials.length);
  const prevImage = () => setCurrentImageSlide((prev) => (prev === 0 ? imageTestimonials.length - 1 : prev - 1));

  return (
    <div id="vsl-container" className="min-h-screen bg-white text-gray-900 font-sans selection:bg-red-100 overflow-x-hidden">
      {/* 1. Urgency Banner */}
      <div className="bg-red-600 text-white text-center py-2.5 px-4 text-xs md:text-sm font-bold animate-pulse uppercase tracking-[0.2em]">
        ⚠️ ATENÇÃO: NÃO FECHE ESTA PÁGINA. SEU DIAGNÓSTICO PERSONALIZADO EXPIRA EM 15 MINUTOS.
      </div>

      {/* 2. Hero Section */}
      <header className="max-w-5xl mx-auto px-6 pt-12 md:pt-20 text-center">
        <h1 className="font-headline text-3xl md:text-6xl font-black text-gray-900 leading-tight mb-8">
          Chega de Noites em Branco! Descubra o Método Relatio de <span className="text-red-600 italic">Reprogramação Magnética</span> e Ative a Reconexão em Apenas 48 Horas.
        </h1>
        <h2 className="text-lg md:text-2xl text-gray-600 max-w-3xl mx-auto font-medium mb-12">
          O segredo para desarmar a mágoa e fazer com que a pessoa amada sinta um desejo incontrolável de estar ao seu lado novamente.
        </h2>

        {/* 3. VSL Embed */}
        <div className="max-w-4xl mx-auto relative group">
          <div className="relative aspect-video bg-black rounded-3xl shadow-[0_35px_100px_rgba(0,0,0,0.4)] overflow-hidden border-4 border-gray-100 transition-transform duration-500 hover:scale-[1.01]">
            <WistiaPlayer mediaId="sqw28d5hlt" aspect="1.7777777777777777" />
          </div>
          <p className="mt-8 text-sm md:text-base text-gray-400 font-bold italic animate-bounce">
            🔉 Assista até o final para liberar sua vaga
          </p>
        </div>

        {/* 3.1 Unique Mechanism Highlight Box */}
        <div className="max-w-3xl mx-auto mt-16 p-8 bg-blue-50 rounded-[2.5rem] border-2 border-blue-200 shadow-lg text-left relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <svg className="w-24 h-24 text-blue-600" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/></svg>
          </div>
          <h3 className="text-xl md:text-2xl font-black text-blue-900 mb-4 uppercase tracking-tight">O que é a Reprogramação Magnética?</h3>
          <p className="text-gray-700 leading-relaxed font-medium">
            Diferente de conselhos genéricos, a <span className="text-blue-600 font-bold">Reprogramação Magnética</span> atua diretamente no subconsciente do parceiro(a). Através de estímulos psicológicos específicos, nós <span className="font-bold border-b-2 border-blue-300">Ativamos os Gatilhos da Reconexão</span>, substituindo a raiva e a indiferença por uma saudade profunda e admiração renovada em menos de 2 dias.
          </p>
        </div>

        <div className="mt-12">
           <button 
             onClick={scrollToOffers}
             className="inline-block bg-green-600 hover:bg-green-700 text-white font-headline text-xl md:text-2xl font-black py-6 px-14 rounded-full shadow-[0_20px_50px_rgba(22,163,74,0.4)] transition-all transform hover:scale-105 active:scale-95 uppercase tracking-tighter"
           >
             QUERO ATIVAR A RECONEXÃO AGORA
           </button>
        </div>
      </header>

      {/* 4. Pain Section */}
      <section className="bg-gray-50 py-24 mt-24 px-6 border-y border-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 italic uppercase tracking-tighter text-center">
              O tempo está jogando contra você...
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            {[
              { title: "Indiferença Total", desc: "Cada dia de silêncio reforça a ideia de que a separação é o único caminho possível." },
              { title: "Erros Repetitivos", desc: "Sem a estratégia de Reprogramação Magnética, você continuará implorando e afastando quem ama." },
              { title: "Risco de Terceiros", desc: "A vulnerabilidade do momento abre espaço para pessoas que querem ver vocês separados." },
              { title: "O Fim da Admiração", desc: "Sem admiração não existe amor. Nós ensinamos como resgatar o brilho nos olhos dele(a)." }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-xl flex items-start space-x-6 hover:shadow-2xl transition-all">
                <div className="bg-red-50 p-3 rounded-2xl">
                  <svg className="w-8 h-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">{item.title}</h4>
                  <p className="text-gray-600 text-sm mt-2 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VIDEO TESTIMONIALS SLIDER - REIMAGINED & POLISHED */}
      <section className="py-24 bg-white px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-6xl font-black mb-6 tracking-tighter italic uppercase">Depoimentos em Vídeo</h2>
          <p className="text-gray-500 font-bold mb-16 uppercase tracking-widest text-sm">Vejas as histórias de quem já viveu essa transformação</p>
          
          <div className="relative flex items-center justify-center max-w-4xl mx-auto">
             {/* Navigation Controls - Premium Glass Style */}
             <div className="absolute inset-y-0 left-0 md:-left-20 flex items-center z-20">
                <button 
                  onClick={prevVideo}
                  className="w-12 h-12 md:w-16 md:h-16 bg-white/90 backdrop-blur-xl rounded-full shadow-2xl flex items-center justify-center text-gray-900 hover:bg-blue-600 hover:text-white transition-all transform hover:scale-110 active:scale-90 border border-gray-100 group"
                >
                  <svg className="w-6 h-6 md:w-8 md:h-8 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M15 19l-7-7 7-7" strokeWidth="4" /></svg>
                </button>
             </div>

             <div className="w-full max-w-[320px] md:max-w-[360px] relative">
                <div className="aspect-[9/16] bg-slate-950 rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden border-[8px] md:border-[12px] border-gray-900 shadow-[0_50px_100px_rgba(0,0,0,0.5)] relative">
                   <WistiaPlayer 
                     key={`video-vsl-${videoTestimonials[currentVideoSlide].wistiaId}`}
                     mediaId={videoTestimonials[currentVideoSlide].wistiaId} 
                     aspect={videoTestimonials[currentVideoSlide].aspect} 
                   />
                </div>
             </div>

             <div className="absolute inset-y-0 right-0 md:-right-20 flex items-center z-20">
                <button 
                  onClick={nextVideo}
                  className="w-12 h-12 md:w-16 md:h-16 bg-white/90 backdrop-blur-xl rounded-full shadow-2xl flex items-center justify-center text-gray-900 hover:bg-blue-600 hover:text-white transition-all transform hover:scale-110 active:scale-90 border border-gray-100 group"
                >
                  <svg className="w-6 h-6 md:w-8 md:h-8 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M9 5l7 7-7 7" strokeWidth="4" /></svg>
                </button>
             </div>
          </div>

          <div className="max-w-2xl mx-auto mt-12 px-6">
             <div className="bg-gray-50 p-8 rounded-[2rem] border border-gray-100 shadow-sm">
                <p className="text-xl md:text-2xl font-black italic text-gray-800 leading-tight">"{videoTestimonials[currentVideoSlide].quote}"</p>
                <div className="flex justify-center mt-6 space-x-2">
                   {videoTestimonials.map((_, idx) => (
                     <button 
                       key={idx} 
                       onClick={() => setCurrentVideoSlide(idx)}
                       className={`h-1.5 rounded-full transition-all duration-500 ${idx === currentVideoSlide ? 'w-12 bg-blue-600' : 'w-3 bg-gray-300 hover:bg-gray-400'}`}
                     />
                   ))}
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* IMAGE TESTIMONIALS SLIDER - NORMAL SIZE & SLIDER STYLE */}
      <section className="py-24 bg-gray-50 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black italic uppercase tracking-tighter">Resultados Reais</h2>
            <p className="text-gray-500 mt-4 font-bold uppercase tracking-widest text-xs">A prova de que a reconexão funciona</p>
          </div>

          <div className="relative flex flex-col md:flex-row items-center justify-center max-w-5xl mx-auto gap-8">
             {/* Left Column: The Image (Normal Proportions) */}
             <div className="w-full md:w-1/2 flex justify-center">
                <div className="relative group">
                  <div className="bg-white p-4 rounded-[2rem] shadow-2xl border border-gray-100 transform transition-all duration-500 hover:rotate-1">
                    <img 
                      src={imageTestimonials[currentImageSlide].url} 
                      alt={imageTestimonials[currentImageSlide].title} 
                      className="max-h-[600px] w-auto rounded-[1.5rem] object-contain shadow-inner"
                    />
                  </div>
                </div>
             </div>

             {/* Right Column: Text & Navigation */}
             <div className="w-full md:w-1/2 text-center md:text-left">
                <div className="bg-white p-10 md:p-12 rounded-[3rem] shadow-xl border border-gray-100 relative">
                   <div className="absolute -top-6 left-1/2 -translate-x-1/2 md:left-12 md:translate-x-0">
                      <span className="bg-green-500 text-white px-6 py-2 rounded-full text-xs font-black uppercase tracking-[0.2em] shadow-lg">Depoimento Verificado</span>
                   </div>
                   
                   <h4 className="text-3xl font-black text-gray-900 mb-6 italic uppercase tracking-tighter mt-4">{imageTestimonials[currentImageSlide].title}</h4>
                   <p className="text-gray-600 text-xl font-medium leading-relaxed italic mb-10">"{imageTestimonials[currentImageSlide].desc}"</p>
                   
                   <div className="flex items-center justify-center md:justify-start space-x-6">
                      <button 
                        onClick={prevImage}
                        className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center text-gray-900 hover:bg-blue-600 hover:text-white transition-all transform active:scale-90"
                      >
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M15 19l-7-7 7-7" strokeWidth="4" /></svg>
                      </button>
                      
                      <div className="flex space-x-2">
                        {imageTestimonials.map((_, idx) => (
                          <button 
                            key={idx} 
                            onClick={() => setCurrentImageSlide(idx)}
                            className={`h-2 rounded-full transition-all duration-300 ${idx === currentImageSlide ? 'w-10 bg-blue-600' : 'w-2 bg-gray-200'}`}
                          />
                        ))}
                      </div>

                      <button 
                        onClick={nextImage}
                        className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center text-gray-900 hover:bg-blue-600 hover:text-white transition-all transform active:scale-90"
                      >
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M9 5l7 7-7 7" strokeWidth="4" /></svg>
                      </button>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* WALL OF LOVE (TEXT) */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-6xl mx-auto">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {testimonials.map((t, i) => (
              <div key={i} className="break-inside-avoid bg-blue-50/50 p-8 rounded-3xl border border-blue-100/50 hover:border-blue-300 transition-all duration-300">
                <div className="flex items-center space-x-1 text-amber-400 mb-4">
                  {[...Array(5)].map((_, s) => (
                    <svg key={s} className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                  ))}
                </div>
                <p className="text-gray-700 font-medium italic mb-6 leading-relaxed">"{t.text}"</p>
                <div className="flex justify-between items-center">
                  <span className="font-black text-gray-900 text-sm">{t.name}</span>
                  <span className="bg-white text-blue-600 text-[10px] font-black px-3 py-1 rounded-full border border-blue-100">{t.tag}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. SINGLE OFFER SECTION - UPDATED CHECKOUT LINK */}
      <section ref={offersRef} id="offer" className="py-24 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] aspect-square bg-blue-600/10 rounded-full -translate-y-2/3 pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
           <div className="mb-12">
              <span className="bg-amber-400 text-blue-950 font-black px-6 py-2 rounded-full text-xs uppercase tracking-[0.3em] shadow-2xl animate-bounce">
                OFERTA ÚNICA & VITALÍCIA
              </span>
              <h2 className="text-4xl md:text-7xl font-black mt-8 italic tracking-tighter text-white">Plano Relatio Completo</h2>
              <p className="text-blue-200 text-lg md:text-xl font-medium mt-4 italic">Reprogramação Magnética: O atalho para o coração de quem você ama.</p>
           </div>

           <div className="bg-white/5 backdrop-blur-xl border-4 border-white/10 rounded-[4rem] p-10 md:p-20 shadow-[0_0_100px_rgba(37,99,235,0.2)]">
              <div className="flex flex-col md:flex-row items-center justify-between gap-12 text-left mb-16">
                 <div className="space-y-6 flex-grow text-white">
                    {[
                      "Mecanismo de Reprogramação Magnética",
                      "Protocolo de Reconexão 48 Horas",
                      "Acesso Vitalício (Sem Mensalidades)",
                      "Guia SOS Crises e Brigas",
                      "Atualizações Gratuitas para Sempre"
                    ].map((benefit, bidx) => (
                      <div key={bidx} className="flex items-center space-x-4">
                        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>
                        </div>
                        <span className="text-lg md:text-xl font-bold tracking-tight">{benefit}</span>
                      </div>
                    ))}
                 </div>
                 
                 <div className="text-center md:text-right flex-shrink-0 bg-white/5 p-8 rounded-[3rem] border border-white/5">
                    <p className="text-gray-400 font-bold line-through text-xl">De R$ 197,00</p>
                    <p className="text-amber-400 font-black text-sm uppercase tracking-widest mt-2">Por apenas</p>
                    <div className="flex items-baseline justify-center md:justify-end space-x-2 mt-2">
                       <span className="text-3xl font-black">R$</span>
                       <span className="text-7xl md:text-9xl font-black tracking-tighter">23,80</span>
                    </div>
                    <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mt-4 italic">Acesso Imediato • Vitalício</p>
                 </div>
              </div>

              <a 
                href={checkoutLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-green-500 hover:bg-green-600 text-white font-headline text-2xl md:text-4xl font-black py-8 px-10 rounded-[2.5rem] transition-all shadow-[0_30px_60px_rgba(34,197,94,0.3)] uppercase tracking-tighter transform hover:scale-105 active:scale-95 text-center block"
              >
                ATIVAR MEU ACESSO AGORA!
              </a>
              
              <div className="mt-10 flex justify-center space-x-8 opacity-40 grayscale group-hover:grayscale-0 transition-all">
                <img src="https://img.icons8.com/color/48/visa.png" alt="Visa" className="h-8" />
                <img src="https://img.icons8.com/color/48/mastercard.png" alt="Mastercard" className="h-8" />
                <img src="https://img.icons8.com/color/48/pix.png" alt="Pix" className="h-8" />
              </div>
           </div>
        </div>
      </section>

      {/* 9. Guarantee */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12 bg-blue-50 p-12 md:p-20 rounded-[4rem] border-2 border-blue-100">
           <div className="w-40 h-40 md:w-56 md:h-56 flex-shrink-0 relative">
              <div className="absolute inset-0 bg-blue-600 rounded-full animate-ping opacity-10"></div>
              <div className="relative bg-white rounded-full w-full h-full border-8 border-blue-600 flex flex-col items-center justify-center shadow-2xl">
                 <span className="text-4xl md:text-6xl font-black text-blue-600 italic">30</span>
                 <span className="text-xs font-black uppercase tracking-widest text-blue-900 text-center">Dias de<br/>Garantia</span>
              </div>
           </div>
           <div className="text-center md:text-left">
              <h3 className="text-3xl font-black mb-6 italic tracking-tight uppercase">Risco Zero para Você</h3>
              <p className="text-lg text-blue-900/70 font-medium leading-relaxed">
                Nós confiamos tanto na <span className="font-bold">Reprogramação Magnética</span> que se você não notar uma mudança real na forma como a pessoa amada te olha em 30 dias, nós devolvemos cada centavo do seu investimento. Sem burocracia.
              </p>
           </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="flex justify-center space-x-10 text-[10px] font-black uppercase tracking-[0.3em] opacity-40">
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
          </div>
          <p className="text-[10px] opacity-20 max-w-2xl mx-auto font-medium leading-relaxed">
            ESTE SITE NÃO É DO FACEBOOK: Este site não faz parte do site do Facebook ou Facebook Inc. Além disso, este site NÃO é endossado pelo Facebook de forma alguma. FACEBOOK é uma marca comercial da FACEBOOK, Inc.
          </p>
          <p className="text-xs font-bold uppercase tracking-widest opacity-40">&copy; 2026 RELATIO - PROTOCOLO DE REVERSÃO. TODOS OS DIREITOS RESERVADOS.</p>
        </div>
      </footer>
    </div>
  );
};

export default VSLPage;
