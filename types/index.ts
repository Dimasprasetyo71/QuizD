export type QuizProps = {
  question: string;
  answer: string;
  options: string[];
  onCorrectAnswer: () => void;
};
