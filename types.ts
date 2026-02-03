
export interface QuizOption {
  label: string;
  value: string;
}

export interface QuizStep {
  id: number;
  question: string;
  options: QuizOption[];
  statistic: string;
}

export interface Answers {
  [key: number]: string;
}
