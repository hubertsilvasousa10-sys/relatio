
import React, { useState, useEffect } from 'react';

const testimonials = [
  {
    name: "Ana e Marcos (Curitiba/PR)",
    text: "Estávamos separados há 3 meses e eu já tinha perdido as esperanças. O Plano de Reversão me mostrou erros que eu nem sabia que cometia. Hoje voltamos e estamos melhor do que no início do namoro.",
    stars: 5
  },
  {
    name: "Juliana T. (São Paulo/SP)",
    text: "O silêncio na nossa casa era ensurdecedor. O método de comunicação não violenta salvou meu casamento de 12 anos. Recomendo para todos que sentem que o amor está esfriando.",
    stars: 5
  },
  {
    name: "Ricardo e Patrícia (Belo Horizonte/MG)",
    text: "Eu achava que o divórcio era o único caminho. O contraste de valor que o curso faz abriu meus olhos. Valeu cada centavo para ver minha família unida de novo.",
    stars: 5
  },
  {
    name: "Beatriz L. (Recife/PE)",
    text: "Pensei que ele não me amava mais. O módulo de Reprogramação Emocional mudou o jogo. Em 10 dias ele já estava me procurando de novo.",
    stars: 5
  },
  {
    name: "Fernanda S. (Brasília/DF)",
    text: "Simples, direto e prático. Sem teorias chatas, o Plano de Reversão Relatio entrega o que promete. Meu marido mudou da água para o vinho.",
    stars: 5
  }
];

const videoTestimonials = [
  { id: 1, quote: "Minha vida mudou em 7 dias...", wistiaId: "d26a5l0mu7", aspect: "0.5504587155963303" },
  { id: 2, quote: "Recuperei meu casamento após 2 anos de briga.", wistiaId: "2e3i7kc4d2", aspect: "0.5504587155963303" },
  { id: 3, quote: "O método que realmente funciona no Brasil.", wistiaId: "nfduva0wh3", aspect: "0.5504587155963303" },
  { id: 4, quote: "Nunca imaginei que seria tão rápido.", wistiaId: "3c9jex60yz", aspect: "0.5504587155963303" }
];

const imageTestimonials = [
  { id: 1, title: "História de Superação #1", desc: "O que parecia impossível aconteceu. O Relatio nos deu uma nova chance.", url: "https://imgur.com/pyofhQd.jpg" },
  { id: 2, title: "História de Superação #2", desc: "Voltamos a ser o casal apaixonado de 10 anos atrás.", url: "https://imgur.com/4O5J75n.jpg" },
  { id: 3, title: "História de Superação #3", desc: "A paz voltou para o meu lar e para os meus filhos.", url: "https://imgur.com/18sxadM.jpg" },
  { id: 4, title: "História de Superação #4", desc: "Gratidão eterna ao Plano de Reversão Relatio.", url: "https://imgur.com/gNJV2Mo.jpg" }
];

const courseModules = [
  {
    id: 1,
    title: "Módulo 1: O Despertar da Realidade",
    lessons: [
      "A verdade nua e crua",
      "O diagnóstico relatio",
      "O Protocolo de Distanciamento",
      "A Lei do Espelho"
    ],
    description: "Neste primeiro estágio, paramos o sangramento emocional. Você aprenderá a diagnosticar o estado real da relação e aplicará o protocolo de distanciamento para gerar curiosidade imediata."
  },
  {
    id: 2,
    title: "Módulo 2: Reprogramação Magnética",
    lessons: [
      "O Resgate da Identidade Perdida",
      "O Fim da Dependência Emocional",
      "A Linguagem da Atração Silenciosa",
      "O Novo Você: A Versão Magnética"
    ],
    description: "Foco total em você. Vamos eliminar a carência que afasta as pessoas e construir uma aura de valor que fará com que o outro lado sinta medo de te perder definitivamente."
  },
  {
    id: 3,
    title: "Módulo 3: A Reaproximação Inevitável",
    lessons: [
      "A Comunicação que Desarma",
      "Os 5 Gatilhos de Reconexão",
      "O Teste Final: É Hora de Voltar?",
      "Blindagem Contra Futuras Crises"
    ],
    description: "O passo a passo da volta. Como usar as palavras certas para desarmar mágoas e os gatilhos psicológicos que reestabelecem o desejo e a admiração mútua."
  },
  {
    id: 4,
    title: "Bônus Exclusivos (Grátis Hoje)",
    lessons: [
      "SOS Ansiedade: Domine seu Impulso",
      "Guia do Perdão Profundo",
      "Comunidade VIP de Alunos",
      "Suporte Direto com Especialistas"
    ],
    description: "Pacote de ferramentas extras para acelerar seus resultados e garantir que você tenha apoio em cada decisão difícil que precisar tomar."
  }
];

const WistiaPlayer: React.FC<{ mediaId: string; aspect: string }> = ({ mediaId, aspect }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://fast.wistia.com/embed/${mediaId}.js`;
    script.async = true;
    script.type = 'module';
    document.head.appendChild(script);

    return () => {};
  }, [mediaId]);

  const paddingTop = (1 / parseFloat(aspect)) * 100;

  // Fix: Declare a dynamic tag for the custom element 'wistia-player' to bypass TypeScript JSX validation errors
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
      {/* Fix: Using the custom tag variable to avoid property 'wistia-player' does not exist error */}
      <WistiaCustomTag media-id={mediaId} aspect={aspect}></WistiaCustomTag>
    </div>
  );
};

const VSLPage: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentVideoSlide, setCurrentVideoSlide] = useState(0);
  const [currentImageSlide, setCurrentImageSlide] = useState(0);
  const [activeModule, setActiveModule] = useState<number | null>(null);

  useEffect(() => {
    const textTimer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => {
      clearInterval(textTimer);
    };
  }, []);

  const nextVideo = () => setCurrentVideoSlide((prev) => (prev + 1) % videoTestimonials.length);
  const prevVideo = () => setCurrentVideoSlide((prev) => (prev === 0 ? videoTestimonials.length - 1 : prev - 1));

  const nextImage = () => setCurrentImageSlide((prev) => (prev + 1) % imageTestimonials.length);
  const prevImage = () => setCurrentImageSlide((prev) => (prev === 0 ? imageTestimonials.length - 1 : prev - 1));

  return (
    <div id="vsl-container" className="min-h-screen bg-white text-gray-900 font-sans selection:bg-red-100">
      {/* 1. Top Urgency Banner */}
      <div className="bg-red-600 text-white text-center py-2 px-4 text-xs md:text-sm font-bold animate-pulse uppercase tracking-widest">
        ⚠️ Atenção: Não feche esta página. Seu diagnóstico personalizado expira em 15 minutos.
      </div>

      {/* 2. Hero Section: Headline & Sub-headline */}
      <header className="max-w-5xl mx-auto px-6 pt-12 md:pt-20 text-center">
        <h1 className="font-headline text-3xl md:text-6xl font-black text-gray-900 leading-tight mb-6">
          Se Você Não Agir <span className="text-red-600">AGORA</span>, Esta Pode Ser a Última Noite Que Vocês Dormem Sob o Mesmo Teto.
        </h1>
        <p className="text-lg md:text-2xl text-gray-600 max-w-3xl mx-auto font-medium">
          Conheça o protocolo exato para rearmar o amor e a conexão no seu relacionamento em 14 dias, mesmo que o outro lado já tenha desistido.
        </p>

        {/* 3. VSL Embed - Wider Angle (max-w-5xl) */}
        <div className="mt-12 max-w-5xl mx-auto relative group px-2 md:px-0 text-center">
          <div className="relative aspect-video bg-slate-900 rounded-2xl shadow-[0_35px_80px_rgba(0,0,0,0.45)] overflow-hidden border-2 md:border-8 border-gray-100/50 backdrop-blur-sm transition-transform duration-500 hover:scale-[1.01]">
            <WistiaPlayer mediaId="sqw28d5hlt" aspect="1.7777777777777777" />
          </div>
          <p className="mt-6 text-sm md:text-base text-gray-500 font-bold italic">
            🔉 Certifique-se de que seu som está ligado
          </p>
        </div>

        <div className="mt-16">
           <a href="#offers" className="inline-block bg-green-600 hover:bg-green-700 text-white font-headline text-xl font-black py-5 px-12 rounded-full shadow-2xl transition-all transform hover:scale-105 active:scale-95 uppercase tracking-tighter">
             Ver Planos de Reversão
           </a>
        </div>
      </header>

      {/* 5. Pain Section */}
      <section className="bg-gray-50 py-24 mt-24 px-6 border-y border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-16 text-gray-800 italic uppercase tracking-tighter">
            Você sente que sua relação chegou ao limite?
          </h2>
          <div className="grid md:grid-cols-2 gap-10">
            {[
              { title: "Silêncio Ensurdecedor", desc: "Vocês moram na mesma casa, mas agem como dois estranhos ou 'colegas de quarto'." },
              { title: "Brigas por Nada", desc: "Qualquer conversa simples vira uma explosão de mágoas do passado que nunca cicatrizam." },
              { title: "O Medo da Perda", desc: "A ansiedade aperta o peito só de pensar em ver a outra pessoa com outra pessoa." },
              { title: "A Culpa que Corrói", desc: "Você sente que errou, mas não sabe como pedir perdão ou como mudar as coisas." }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-xl flex items-start space-x-6 hover:shadow-2xl transition-shadow">
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

      {/* 6. Unique Mechanism */}
      <section className="py-24 px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-red-600 font-bold uppercase tracking-widest text-sm">O Método Científico</span>
          <h2 className="text-3xl md:text-5xl font-black mt-2 mb-16 italic tracking-tighter">Como Funciona o Plano de Reversão?</h2>
          
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 -translate-x-1/2 z-0"></div>
            
            <div className="space-y-16">
              {[
                { step: "01", title: "Detox Emocional", desc: "Limpamos as mágoas acumuladas e paramos a 'hemorragia' de brigas imediatamente." },
                { step: "02", title: "A Quebra de Padrão", desc: "Ensinamos gatilhos de curiosidade que fazem a pessoa te olhar com outros olhos em 48h." },
                { step: "03", title: "Recalibragem Íntima", desc: "O passo a passo para reestabelecer a conexão física e emocional de forma natural." },
                { step: "04", title: "Blindagem de Longo Prazo", desc: "Como garantir que as crises nunca mais voltem a destruir o que você construiu." }
              ].map((item, i) => (
                <div key={i} className={`relative flex items-center justify-center w-full ${i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className="w-[45%] md:w-[42%] text-left">
                    <div className="bg-white p-6 md:p-10 rounded-3xl border border-gray-100 shadow-2xl relative z-10 transition-transform hover:scale-[1.03]">
                      <span className="text-3xl md:text-5xl font-black text-blue-100 block mb-2">{item.step}</span>
                      <h4 className="text-base md:text-2xl font-black text-gray-900 mb-3 leading-tight">{item.title}</h4>
                      <p className="text-xs md:text-base text-gray-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                  <div className="w-[10%] md:w-[16%] flex justify-center z-20">
                    <div className="w-8 h-8 md:w-12 md:h-12 bg-red-600 rounded-full border-4 border-white shadow-xl flex items-center justify-center text-white font-black text-[10px] md:text-sm">
                      {item.step}
                    </div>
                  </div>
                  <div className="w-[45%] md:w-[42%]"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. Modules Section */}
      <section className="bg-slate-900 text-white py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-center mb-6 italic uppercase tracking-tighter">O Que Você Vai Receber:</h2>
          <p className="text-center text-blue-300 mb-16 font-medium text-lg">Clique nos módulos para revelar o conteúdo estratégico</p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {courseModules.map((mod) => (
              <div 
                key={mod.id} 
                onClick={() => setActiveModule(activeModule === mod.id ? null : mod.id)}
                className={`cursor-pointer transition-all duration-300 p-10 rounded-[2.5rem] border-2 flex flex-col ${
                  activeModule === mod.id 
                  ? 'bg-blue-600 border-white shadow-[0_0_50px_rgba(37,99,235,0.5)] scale-[1.02]' 
                  : 'bg-white/5 border-white/10 hover:bg-white/10'
                }`}
              >
                <div className="flex justify-between items-start mb-8">
                   <div className={`w-14 h-14 rounded-2xl flex items-center justify-center font-black text-2xl ${activeModule === mod.id ? 'bg-white text-blue-600' : 'bg-blue-600 text-white'}`}>
                     {mod.id}
                   </div>
                   <div className={`transition-transform duration-500 ${activeModule === mod.id ? 'rotate-45 scale-125' : ''}`}>
                      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4v16m8-8H4" />
                      </svg>
                   </div>
                </div>
                
                <h4 className="text-2xl md:text-3xl font-black mb-6 uppercase tracking-tight italic leading-none">{mod.title}</h4>
                
                <ul className="space-y-4 flex-grow">
                  {mod.lessons.map((lesson, idx) => (
                    <li key={idx} className="flex items-center space-x-4 text-sm md:text-base font-bold">
                      <div className={`w-2 h-2 rounded-full flex-shrink-0 ${activeModule === mod.id ? 'bg-white' : 'bg-blue-500'}`}></div>
                      <span className="opacity-90">{lesson}</span>
                    </li>
                  ))}
                </ul>

                {activeModule === mod.id && (
                  <div className="mt-10 pt-8 border-t border-white/20 animate-[fade-in_0.5s_ease-out]">
                    <p className="text-sm md:text-base italic leading-relaxed text-blue-50 font-medium">
                      {mod.description}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SLIDER: Visual Testimonials Section (Videos & Images) */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 italic tracking-tighter">Casos Reais, Vidas Transformadas</h2>
            <p className="text-gray-500 text-lg md:text-2xl font-medium max-w-3xl mx-auto">Essas pessoas estavam onde você está agora. Elas decidiram agir.</p>
          </div>

          {/* Videos Slider - Manual Navigation */}
          <div className="mb-24">
            <h3 className="text-xl font-black text-center mb-12 uppercase tracking-widest text-red-600 italic">Depoimentos em Vídeo (Confidencial)</h3>
            <div className="relative group overflow-hidden h-[550px] md:h-[720px] flex items-center justify-center">
              
              <button 
                onClick={prevVideo} 
                className="absolute left-4 md:left-8 z-30 bg-white/95 hover:bg-white text-gray-900 p-4 rounded-full shadow-2xl transition-all transform hover:scale-110 active:scale-95 flex items-center justify-center border border-gray-100"
              >
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" /></svg>
              </button>
              <button 
                onClick={nextVideo} 
                className="absolute right-4 md:right-8 z-30 bg-white/95 hover:bg-white text-gray-900 p-4 rounded-full shadow-2xl transition-all transform hover:scale-110 active:scale-95 flex items-center justify-center border border-gray-100"
              >
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" /></svg>
              </button>

              {videoTestimonials.map((v, i) => (
                <div 
                  key={v.id} 
                  className={`absolute transition-all duration-700 ease-in-out transform w-full max-w-[310px] md:max-w-[380px] ${
                    i === currentVideoSlide ? 'opacity-100 translate-x-0 scale-100 z-10' : (i < currentVideoSlide ? 'opacity-0 -translate-x-full scale-90 z-0' : 'opacity-0 translate-x-full scale-90 z-0')
                  } pointer-events-auto`}
                >
                  <div className="relative aspect-[9/16] bg-slate-900 rounded-[3.5rem] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.5)] border-[10px] border-gray-100 group">
                    <WistiaPlayer mediaId={v.wistiaId} aspect={v.aspect || "0.5504587155963303"} />
                    <div className="absolute bottom-12 left-8 right-8 text-center pointer-events-none">
                      <p className="text-white font-black text-sm uppercase italic drop-shadow-[0_2px_4px_rgba(0,0,0,1)] tracking-tight">"{v.quote}"</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex justify-center space-x-3 mt-8">
              {videoTestimonials.map((_, i) => (
                <button 
                  key={i} 
                  onClick={() => setCurrentVideoSlide(i)}
                  className={`h-2.5 rounded-full transition-all duration-500 ${i === currentVideoSlide ? 'bg-red-600 w-10' : 'bg-gray-200'}`}
                />
              ))}
            </div>
          </div>

          {/* Results Images Slider - Manual Navigation */}
          <div>
            <h3 className="text-xl font-black text-center mb-12 uppercase tracking-widest text-blue-600 italic">Resultados Confirmados (Prints de Conversa)</h3>
            <div className="relative group overflow-hidden h-[620px] md:h-[780px] flex items-center justify-center">
              
              <button onClick={prevImage} className="absolute left-4 md:left-8 z-30 bg-white/95 hover:bg-white text-gray-900 p-4 rounded-full shadow-2xl transition-all transform hover:scale-110 flex items-center justify-center border border-gray-100">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" /></svg>
              </button>
              <button onClick={nextImage} className="absolute right-4 md:right-8 z-30 bg-white/95 hover:bg-white text-gray-900 p-4 rounded-full shadow-2xl transition-all transform hover:scale-110 flex items-center justify-center border border-gray-100">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" /></svg>
              </button>

              {imageTestimonials.map((img, i) => (
                <div 
                  key={img.id} 
                  className={`absolute transition-all duration-700 ease-in-out transform w-full max-w-[320px] md:max-w-[420px] px-4 ${
                    i === currentImageSlide ? 'opacity-100 translate-x-0 scale-100 z-10' : (i < currentImageSlide ? 'opacity-0 -translate-x-full scale-95 z-0' : 'opacity-0 translate-x-full scale-95 z-0')
                  } pointer-events-auto h-full`}
                >
                  <div className="bg-white rounded-[3rem] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.15)] border border-gray-100 group flex flex-col h-full">
                    <div className="flex-grow relative overflow-hidden bg-gray-50/50">
                      <img 
                        src={img.url} 
                        alt={`Resultado ${img.id}`} 
                        className="w-full h-full object-contain group-hover:scale-[1.03] transition-transform duration-700"
                      />
                      <div className="absolute top-6 right-6 bg-green-500 text-white text-[11px] font-black px-4 py-2 rounded-full shadow-xl uppercase tracking-widest z-20">
                        ✅ Verificado
                      </div>
                    </div>
                    <div className="p-8 text-center bg-white border-t border-gray-50 flex-shrink-0">
                      <h4 className="font-black text-gray-900 text-lg mb-2 uppercase italic tracking-tighter">{img.title}</h4>
                      <p className="text-gray-500 text-xs md:text-sm leading-relaxed italic font-medium">"{img.desc}"</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center space-x-3 mt-8">
              {imageTestimonials.map((_, i) => (
                <button 
                  key={i} 
                  onClick={() => setCurrentImageSlide(i)}
                  className={`h-2.5 rounded-full transition-all duration-500 ${i === currentImageSlide ? 'bg-blue-600 w-10' : 'bg-gray-200'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. Prova Social (Slides - Text) */}
      <section className="py-24 bg-gray-50 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-16 text-gray-900 italic uppercase tracking-tighter">O que dizem os nossos alunos</h2>
          <div className="relative overflow-hidden min-h-[350px] flex items-center justify-center">
            {testimonials.map((t, i) => (
              <div 
                key={i} 
                className={`absolute transition-all duration-1000 ease-in-out transform w-full max-w-2xl px-4 ${
                  i === currentSlide ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'
                }`}
              >
                <div className="bg-white p-12 md:p-16 rounded-[3rem] shadow-2xl border border-gray-100 relative">
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white p-4 rounded-full shadow-xl border border-gray-100">
                     <svg className="w-10 h-10 text-blue-600 opacity-20" fill="currentColor" viewBox="0 0 32 32"><path d="M10 8v8h6v8h-8v-8h-2v-8h4zm14 0v8h6v8h-8v-8h-2v-8h4z"/></svg>
                  </div>
                  <div className="flex justify-center mb-8 text-amber-400">
                    {[...Array(t.stars)].map((_, s) => (
                      <svg key={s} className="w-7 h-7 mx-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-xl md:text-2xl text-gray-700 font-medium leading-relaxed mb-8">"{t.text}"</p>
                  <p className="font-black text-gray-900 text-lg tracking-tight">— {t.name}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center space-x-3 mt-12">
            {testimonials.map((_, i) => (
              <button 
                key={i} 
                onClick={() => setCurrentSlide(i)}
                className={`h-2.5 rounded-full transition-all duration-500 ${i === currentSlide ? 'bg-red-600 w-10' : 'bg-gray-200'}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 9. Guarantee Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto bg-blue-50 rounded-[4rem] p-12 md:p-20 border-2 border-blue-100 flex flex-col md:flex-row items-center space-y-12 md:space-y-0 md:space-x-16 shadow-2xl">
          <div className="flex-shrink-0">
             <div className="w-40 h-40 md:w-56 md:h-56 relative">
               <svg className="w-full h-full text-blue-600 animate-[spin_30s_linear_infinite]" viewBox="0 0 100 100">
                 <path id="circlePath" fill="none" d="M 10, 50 a 40,40 0 1,1 80,0 40,40 0 1,1 -80,0" />
                 <text className="text-[9px] font-black uppercase tracking-[0.2em] fill-current">
                   <textPath href="#circlePath">Garantia Incondicional • Risco Zero • Satisfação Total •</textPath>
                 </text>
               </svg>
               <div className="absolute inset-0 flex items-center justify-center font-headline text-5xl font-black text-blue-800 italic">
                 30D
               </div>
             </div>
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-3xl md:text-4xl font-black text-blue-900 mb-6 uppercase italic tracking-tighter leading-tight">Sua Felicidade é o Nosso Compromisso</h3>
            <p className="text-blue-800/80 text-lg leading-relaxed font-medium">
              Você tem 30 dias para testar o método completo. Se você não sentir uma mudança palpável na energia do seu lar, basta um e-mail. Devolvemos 100% do valor sem perguntas. O risco de tentar é zero, o risco de não fazer nada é perder quem você ama.
            </p>
          </div>
        </div>
      </section>

      {/* 10. Pricing & Offers */}
      <section id="offers" className="py-24 px-6 bg-gray-900 text-white overflow-hidden relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] aspect-square bg-blue-600/10 rounded-full -translate-y-2/3 pointer-events-none"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black mb-8 italic tracking-tighter text-white">Pronto para Reverter o Jogo?</h2>
            <p className="text-blue-200 text-lg md:text-xl max-w-2xl mx-auto font-medium">Sua família é o seu bem mais precioso. Escolha o plano que vai trazer a paz de volta para o seu lar hoje mesmo.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-10 items-stretch">
            {/* Basic */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[2.5rem] p-10 flex flex-col hover:border-blue-500/40 transition-all group">
              <div className="mb-10">
                <h3 className="text-2xl font-black mb-3 uppercase italic tracking-tight">Plano Essencial</h3>
                <p className="text-gray-400 text-sm font-medium">Ideal para dar os primeiros passos.</p>
              </div>
              <div className="mb-10">
                <div className="flex items-baseline space-x-2">
                  <span className="text-5xl font-black">R$ 10,00</span>
                  <span className="text-gray-400 text-sm font-bold uppercase">/mês</span>
                </div>
              </div>
              <ul className="flex-grow space-y-4 mb-12 text-sm text-gray-300 font-bold">
                <li className="flex items-center space-x-4">
                  <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>
                  <span>Acesso por 1 mês</span>
                </li>
                <li className="flex items-center space-x-4">
                  <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>
                  <span>Vídeo aulas (3 módulos)</span>
                </li>
                <li className="flex items-center space-x-4">
                  <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>
                  <span>Suporte via e-mail</span>
                </li>
                <li className="flex items-center space-x-4 text-amber-400">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>
                  <span>+ Bônus Exclusivos</span>
                </li>
              </ul>
              <a 
                href="https://www.ggcheckout.com/checkout/v2/3mzqpPOcdX1ZiZf3b0KU"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-white/10 hover:bg-white/20 text-white font-black py-5 px-8 rounded-2xl transition-all border border-white/10 uppercase tracking-widest text-xs text-center block"
              >
                ASSINAR BÁSICO
              </a>
            </div>

            {/* Premium */}
            <div className="bg-blue-600 rounded-[3rem] p-10 flex flex-col shadow-[0_0_80px_rgba(37,99,235,0.4)] scale-105 border-4 border-white/30 z-10 relative">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-amber-400 text-blue-900 font-black px-6 py-2 rounded-full text-xs uppercase tracking-[0.3em] shadow-2xl border-2 border-white">
                MAIS VENDIDO
              </div>
              <div className="mb-10 mt-4">
                <h3 className="text-3xl font-black mb-3 uppercase italic tracking-tight text-white">Plano Premium</h3>
                <p className="text-blue-100 text-sm font-bold">A reversão definitiva para seu lar.</p>
              </div>
              <div className="mb-10">
                <div className="flex items-baseline space-x-2 text-white">
                  <span className="text-6xl font-black tracking-tighter">R$ 14,99</span>
                  <span className="text-blue-200 text-sm font-black uppercase">/mês</span>
                </div>
              </div>
              <ul className="flex-grow space-y-4 mb-12 text-sm text-white font-bold">
                <li className="flex items-center space-x-4">
                  <svg className="w-5 h-5 text-amber-300" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>
                  <span>Acesso Premium Vitalício</span>
                </li>
                <li className="flex items-center space-x-4">
                  <svg className="w-5 h-5 text-amber-300" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>
                  <span>Vídeo aulas toda semana</span>
                </li>
                <li className="flex items-center space-x-4">
                  <svg className="w-5 h-5 text-amber-300" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>
                  <span>Suporte via e-mail + WhatsApp</span>
                </li>
                <li className="flex items-center space-x-4">
                  <svg className="w-5 h-5 text-amber-300" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>
                  <span>Baixar aulas e App Celular</span>
                </li>
                <li className="flex items-center space-x-4 text-amber-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>
                  <span>+ Bônus Adicionais</span>
                </li>
              </ul>
              <a 
                href="https://www.ggcheckout.com/checkout/v2/R4fjIo10tsJQHyuCsNYZ"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-amber-400 hover:bg-amber-500 text-blue-900 font-headline text-2xl font-black py-6 px-10 rounded-[2rem] transition-all shadow-2xl uppercase tracking-tighter transform hover:scale-105 active:scale-95 text-center block"
              >
                QUERO REVERTER AGORA
              </a>
            </div>

            {/* Lifetime */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[2.5rem] p-10 flex flex-col hover:border-amber-500/40 transition-all group">
              <div className="mb-10">
                <h3 className="text-2xl font-black mb-3 uppercase italic tracking-tight">Plano Vitalício</h3>
                <p className="text-gray-400 text-sm font-medium">Sua blindagem total para a vida toda.</p>
              </div>
              <div className="mb-10">
                <div className="flex items-baseline space-x-2 text-white">
                  <span className="text-5xl font-black">R$ 45,99</span>
                  <span className="text-gray-400 text-sm font-bold uppercase">/único</span>
                </div>
              </div>
              <ul className="flex-grow space-y-4 mb-12 text-sm text-gray-300 font-bold">
                <li className="flex items-center space-x-4">
                  <svg className="w-5 h-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>
                  <span>Tudo do Premium e muito mais</span>
                </li>
                <li className="flex items-center space-x-4">
                  <svg className="w-5 h-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>
                  <span>Um único pagamento</span>
                </li>
                <li className="flex items-center space-x-4">
                  <svg className="w-5 h-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>
                  <span>Acesso para sempre (sem renovação)</span>
                </li>
                <li className="flex items-center space-x-4 text-amber-400">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>
                  <span>Atualizações Vitalícias Inclusas</span>
                </li>
              </ul>
              <a 
                href="https://www.ggcheckout.com/checkout/v2/e62Rd3QTr1HoXZ1m0eyN"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-white/10 hover:bg-amber-400 hover:text-blue-950 text-white font-black py-5 px-8 rounded-2xl transition-all border border-white/10 uppercase tracking-widest text-xs text-center block"
              >
                QUERO ACESSO TOTAL
              </a>
            </div>
          </div>
          
          <div className="mt-20 text-center">
            <div className="inline-flex items-center space-x-4 bg-white/5 px-8 py-4 rounded-full border border-white/10 shadow-xl">
               <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"/></svg>
               <span className="text-xs md:text-sm font-black uppercase tracking-[0.2em] text-gray-300">Ambiente Criptografado e Seguro</span>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-black text-gray-600 py-20 px-6 text-center border-t border-white/5">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="flex justify-center space-x-10 text-[10px] md:text-xs font-black uppercase tracking-[0.3em]">
            <a href="#" className="hover:text-white transition-colors">Termos</a>
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Suporte</a>
          </div>
          <p className="text-[9px] md:text-[10px] leading-relaxed max-w-2xl mx-auto opacity-30 font-medium">
            O RESULTADO VARIA DE PESSOA PARA PESSOA. ESTA PÁGINA NÃO É AFILIADA AO GOOGLE OU FACEBOOK. TODA ESTRATÉGIA REQUER EMPENHO E APLICAÇÃO DO MÉTODO.
          </p>
          <div className="pt-8 border-t border-white/5">
             <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest">&copy; 2026 Relatio - Protocolo de Reversão. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes progress {
          from { width: 0%; }
          to { width: 100%; }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default VSLPage;
