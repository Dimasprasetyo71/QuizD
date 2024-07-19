import React, { useState } from 'react';

type QuizProps = {
  question: string;
  answer: string;
  options: string[];
  onCorrectAnswer: () => void;
};

const Quiz: React.FC<QuizProps> = ({ question, answer, options, onCorrectAnswer }: QuizProps )  => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setShowAnswer(true);
    if (option === answer) {
      onCorrectAnswer();
    }
  };

  return (
    <div className="my-5 p-5 border border-gray-300 rounded-lg shadow-md bg-gradient-to-tr ">
      <p className="text-xl font-bold text-gray-800 mb-4">{question}</p>
      <div className="space-y-2">
        {options.map((option) => (
          <button
            key={option}
            className={`block w-full text-left p-3 rounded-md border ${
              showAnswer ? (option === answer ? 'bg-green-200 border-green-400' : option === selectedOption ? 'bg-red-200 border-red-400' : '') : 'bg-gray-100 border-gray-300'
            }`}
            onClick={() => handleOptionClick(option)}
            disabled={showAnswer}
          >
            {option}
          </button>
        ))}
      </div>
      {showAnswer && (
        <p className={`mt-4 text-lg font-semibold ${selectedOption === answer ? 'text-green-600' : 'text-red-600'}`}>
          {selectedOption === answer ? 'Correct!' : `Wrong! The correct answer is ${answer}.`}
        </p>
      )}
    </div>
  );
};

export default Quiz;
