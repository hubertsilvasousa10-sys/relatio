
import React, { useEffect } from 'react';

interface TransitionPageProps {
  onFinished: () => void;
}

const TransitionPage: React.FC<TransitionPageProps> = ({ onFinished }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinished();
    }, 4000);
    return () => clearTimeout(timer);
  }, [onFinished]);

  return (
    <div id="loading-container" className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#001F3F] bg-gradient-to-br from-[#001F3F] to-[#003366] text-white p-6 text-center">
      <div className="max-w-2xl w-full space-y-8 animate-fade-in">
        {/* Title */}
        <h1 className="font-headline text-4xl md:text-6xl font-black tracking-tighter text-white uppercase italic">
          ANÁLISE CONCLUÍDA!
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl font-semibold text-blue-200">
          Seu Plano de Reversão Personalizado está sendo gerado...
        </p>

        {/* Animated Spinner */}
        <div className="flex justify-center py-6">
          <div className="relative w-24 h-24">
            <div className="absolute inset-0 border-8 border-white/10 rounded-full"></div>
            <div className="absolute inset-0 border-8 border-blue-500 rounded-full border-t-transparent animate-spin"></div>
          </div>
        </div>

        {/* Reinforcement Message */}
        <div className="space-y-4">
          <p className="text-lg md:text-xl text-gray-300 font-medium">
            "Com base nas suas 5 respostas, identificamos o Ponto de Virada exato para o seu relacionamento."
          </p>
          
          {/* Instruction */}
          <p className="text-sm md:text-base text-gray-400 uppercase tracking-widest font-bold animate-pulse">
            Aguarde. Você será redirecionado em instantes para a solução.
          </p>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default TransitionPage;
