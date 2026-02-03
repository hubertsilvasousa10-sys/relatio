
import React, { useState } from 'react';
import Quiz from './components/Quiz';
import Counter from './components/Counter';
import Credibility from './components/Credibility';
import TransitionPage from './components/TransitionPage';
import VSLPage from './components/VSLPage';
import { Answers } from './types';

type FunnelState = 'quiz' | 'transition' | 'vsl';

const App: React.FC = () => {
  const [funnelState, setFunnelState] = useState<FunnelState>('quiz');

  const handleQuizComplete = (answers: Answers) => {
    console.log("Quiz answers stored:", answers);
    setFunnelState('transition');
  };

  const handleTransitionFinished = () => {
    setFunnelState('vsl');
    // Scroll to top when moving to VSL
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Rendering logic for single page funnel
  if (funnelState === 'transition') {
    return <TransitionPage onFinished={handleTransitionFinished} />;
  }

  if (funnelState === 'vsl') {
    return <VSLPage />;
  }

  // Quiz view (Default)
  return (
    <div className="min-h-screen flex flex-col">
      {/* Urgent Banner */}
      <div className="bg-red-600 text-white text-center py-2 px-4 text-xs md:text-sm font-bold animate-pulse">
        ATENÇÃO: Este diagnóstico ficará disponível por tempo limitado.
      </div>

      <header className="pt-8 pb-4 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-headline text-3xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight mb-4">
            <span className="text-red-600">PARE!</span> Seu Relacionamento Está por um Fio? 
            <br className="hidden md:block" />
            Descubra o Diagnóstico em 3 Minutos.
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-6">
            O Método Usado por <span className="font-bold text-gray-800">1.3 Milhão de Pessoas</span> para Reverter a Crise e Salvar o Amor.
          </p>
          
          <Counter />
        </div>
      </header>

      <main className="flex-grow px-6 pb-12">
        <div className="max-w-4xl mx-auto text-center mb-8">
          <div className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full font-bold shadow-lg mb-4 animate-bounce">
            Inicie seu Diagnóstico Gratuito Abaixo
          </div>
          <p className="text-gray-700 font-semibold italic">
            "Não Deixe a Pessoa que Você Ama Escapar da Sua Vida Para Sempre."
          </p>
        </div>

        <Quiz onComplete={handleQuizComplete} />

        <div className="max-w-xl mx-auto mt-8 text-center">
          <p className="text-gray-500 text-sm">
            Chega de tentar no escuro. Responda 5 perguntas rápidas e receba o Seu Plano de Reversão Personalizado.
          </p>
        </div>
      </main>

      <div className="mb-12">
        <Credibility />
      </div>

      <footer className="bg-gray-100 py-10 px-6 border-t border-gray-200">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-gray-500 text-xs uppercase tracking-widest font-semibold">
          <div className="flex space-x-6">
            <a href="#" className="hover:text-blue-600 transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Privacidade</a>
          </div>
          <p>&copy; 2026 Relatio - Todos os direitos reservados</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
