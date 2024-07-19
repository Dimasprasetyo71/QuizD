
'use client'
import React, { useState, useEffect } from 'react';
import Quiz from './Quiz';
import SkeletonQuiz from './skeletonquiz';
import { QuizProps } from '../types';

const QuizApp: React.FC = () => {
  const [quizzes, setQuizzes] = useState<QuizProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [score, setScore] = useState(0);

  useEffect(() => {
    // Simulate a data fetching delay
    setTimeout(() => {
      setQuizzes([
        {
            question: "Who was the first President of the United States?",
            answer: "George Washington",
            options: ["George Washington", "Thomas Jefferson", "Abraham Lincoln", "John Adams"],
            onCorrectAnswer: function (): void {
                throw new Error('Function not implemented.');
            }
        },
        {
            question: "Which war lasted from 1914 to 1918 and involved many European countries?",
            answer: "World War I",
            options: ["World War I", "World War II", "Korean War", "Vietnam War"],
            onCorrectAnswer: function (): void {
                throw new Error('Function not implemented.');
            }
        },
        {
            question: "Who was the leader of the Soviet Union during World War II?",
            answer: "Joseph Stalin",
            options: ["Joseph Stalin", "Vladimir Lenin", "Leon Trotsky", "Mikhail Gorbachev"],
            onCorrectAnswer: function (): void {
                throw new Error('Function not implemented.');
            }
        },
        // Add more history questions here
        {
            question: "What is the capital of France?",
            answer: "Paris",
            options: ["Berlin", "Madrid", "Paris", "Rome"],
            onCorrectAnswer: function (): void {
                throw new Error('Function not implemented.');
            }
        },
        // Add more history questions here
        {
            question: "What is the square root of 144?",
            answer: "12",
            options: ["12", "14", "16", "18"],
            onCorrectAnswer: function (): void {
                throw new Error('Function not implemented.');
            }
        },
        {
            question: "Simplify the expression: 3x + 2x - 5x",
            answer: "0",
            options: ["0", "x", "5x", "-4x"],
            onCorrectAnswer: function (): void {
                throw new Error('Function not implemented.');
            }
        },
        {
            question: "What is the next number in the sequence: 1, 1, 2, 3, 5, 8, ...?",
            answer: "13",
            options: ["10", "11", "13", "21"],
            onCorrectAnswer: function (): void {
                throw new Error('Function not implemented.');
            }
        },
        // Add more math questions here
      ]);
      setLoading(false);
    }, 2000); // Simulate 2 seconds loading time
  }, []);

  const handleCorrectAnswer = () => {
    setScore((prevScore) => prevScore + 10);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-6 sparkle bg-gradient-to-t  text-yellow-4000 to-red-300 from-slate-600  text-transparent bg-clip-text     ">Quiz App</h1>
      <p className="text-xl text-center mb-4">Score: {score}</p>
      {loading ? (
        <>
          <SkeletonQuiz />
          <SkeletonQuiz />
          <SkeletonQuiz />
        </>
      ) : (
        quizzes.map((quiz, index) => (
          <Quiz key={index} {...quiz} onCorrectAnswer={handleCorrectAnswer} />
        ))
      )}
    </div>
  );
};

export default QuizApp;
