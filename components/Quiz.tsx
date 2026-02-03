
import React, { useState } from 'react';
import { QUIZ_STEPS } from '../constants';
import { Answers } from '../types';

interface QuizProps {
  onComplete: (answers: Answers) => void;
}

const Quiz: React.FC<QuizProps> = ({ onComplete }) => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});

  const currentStepData = QUIZ_STEPS[step];
  const progress = ((step + 1) / QUIZ_STEPS.length) * 100;

  const handleOptionSelect = (value: string) => {
    const newAnswers = { ...answers, [currentStepData.id]: value };
    setAnswers(newAnswers);

    if (step < QUIZ_STEPS.length - 1) {
      setStep(step + 1);
    } else {
      // Direct completion to trigger the dedicated TransitionPage in the parent
      onComplete(newAnswers);
    }
  };

  return (
    <div id="quiz-container" className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 max-w-2xl mx-auto">
      {/* Progress Bar */}
      <div className="h-2 bg-gray-100 w-full">
        <div 
          className="h-full bg-blue-600 transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <div className="p-6 md:p-10">
        <div className="mb-8">
          <span className="text-blue-600 font-bold text-xs uppercase tracking-widest block mb-2">
            Passo {step + 1} de {QUIZ_STEPS.length}
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 leading-tight">
            {currentStepData.question}
          </h2>
        </div>

        <div className="grid gap-4 mb-8">
          {currentStepData.options.map((option) => (
            <button
              key={option.value}
              onClick={() => handleOptionSelect(option.value)}
              className="w-full text-left p-4 rounded-xl border-2 border-gray-100 hover:border-blue-500 hover:bg-blue-50 transition-all group flex items-center justify-between"
            >
              <span className="text-gray-700 font-semibold group-hover:text-blue-700">
                {option.label}
              </span>
              <div className="h-5 w-5 rounded-full border-2 border-gray-300 group-hover:border-blue-500 flex items-center justify-center transition-colors">
                <div className="h-2.5 w-2.5 rounded-full bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            </button>
          ))}
        </div>

        {/* Statistic Element (News Style) */}
        <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-amber-800 italic">
                {currentStepData.statistic}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
