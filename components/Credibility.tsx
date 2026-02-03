
import React from 'react';

const Credibility: React.FC = () => {
  return (
    <section className="py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-center text-gray-400 text-sm font-bold uppercase tracking-widest mb-10">
          Por que este diagnóstico é fundamental?
        </h3>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04kM12 21.48l.308-.012a11.955 11.955 0 01-6.831-3.04" />
              </svg>
            </div>
            <h4 className="font-bold text-gray-800 mb-2">Ponto de Virada</h4>
            <p className="text-gray-600 text-sm">
              Identificamos o exato momento onde 99% dos casais ignoram a chance de salvação.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4 className="font-bold text-gray-800 mb-2">Urgência Real</h4>
            <p className="text-gray-600 text-sm">
              Quanto mais tempo você tenta sem um plano, mais afasta a pessoa amada.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h4 className="font-bold text-gray-800 mb-2">Baseado em Dados</h4>
            <p className="text-gray-600 text-sm">
              Estratégias validadas por mais de 1.3 milhão de histórias de restauração real.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Credibility;
