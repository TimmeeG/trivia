export interface Question {
  userAnswer: string;
  isCorrect: boolean;
  isAnswered: boolean;
  correct_answer: string;
  question: string;
  incorrect_answers: Array<string>;
  type: string;
  category: string;
}
