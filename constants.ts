
import { QuizStep } from './types';

export const QUIZ_STEPS: QuizStep[] = [
  {
    id: 1,
    question: "Qual o status atual da sua relação?",
    options: [
      { label: "Casado(a) / Morando juntos", value: "casado" },
      { label: "Namoro Sério", value: "namoro" },
      { label: "Separados Recentemente", value: "separados" },
      { label: "Em Crise Extrema", value: "crise" }
    ],
    statistic: "87% dos casais em crise conseguem reverter a situação se agirem nos primeiros 30 dias."
  },
  {
    id: 2,
    question: "Com que frequência ocorrem discussões sérias?",
    options: [
      { label: "Diariamente", value: "diario" },
      { label: "Algumas vezes por semana", value: "semana" },
      { label: "Raramente, mas o silêncio é pesado", value: "silencio" },
      { label: "Não nos falamos mais", value: "bloqueado" }
    ],
    statistic: "O 'Tratamento de Silêncio' é apontado como o principal gatilho para o fim definitivo de 65% das relações."
  },
  {
    id: 3,
    question: "Ainda existe intimidade ou demonstração de afeto?",
    options: [
      { label: "Sim, mas diminuiu muito", value: "pouco" },
      { label: "Não, agimos como estranhos", value: "nada" },
      { label: "Apenas de uma das partes", value: "unilateral" },
      { label: "Não dormimos mais no mesmo quarto", value: "quartos_separados" }
    ],
    statistic: "A falta de conexão emocional precede a traição em 92% dos casos analisados pela nossa metodologia."
  },
  {
    id: 4,
    question: "Você acredita que a outra pessoa ainda te ama?",
    options: [
      { label: "Sim, mas está magoada(o)", value: "magoado" },
      { label: "Não tenho certeza", value: "incerto" },
      { label: "Acredito que o amor acabou", value: "acabou" },
      { label: "Ela(e) diz que precisa de espaço", value: "espaco" }
    ],
    statistic: "Muitas vezes, o pedido de 'espaço' é na verdade um pedido desesperado por uma mudança de atitude que você ainda não percebeu."
  },
  {
    id: 5,
    question: "Em quanto tempo você deseja restaurar a paz no seu lar?",
    options: [
      { label: "Imediatamente, não suporto mais", value: "agora" },
      { label: "O mais rápido possível", value: "rapido" },
      { label: "Ainda esta semana", value: "semana" },
      { label: "Estou disposto(a) a seguir um plano", value: "plano" }
    ],
    statistic: "Urgência é o fator chave: 9 a cada 10 reversões de sucesso começam com um diagnóstico preciso como este."
  }
];
