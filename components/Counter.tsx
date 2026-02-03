
import React, { useState, useEffect } from 'react';

const Counter: React.FC = () => {
  const [count, setCount] = useState(1324892);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount(prev => prev + Math.floor(Math.random() * 3));
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center space-y-2 py-4">
      <div className="flex items-center space-x-2 bg-green-50 px-4 py-2 rounded-full border border-green-200">
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
        </span>
        <span className="text-green-800 text-xs md:text-sm font-bold tracking-tight">
          {count.toLocaleString('pt-BR')} Casos Analisados Hoje
        </span>
      </div>
    </div>
  );
};

export default Counter;
