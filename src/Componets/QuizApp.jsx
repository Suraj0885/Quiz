import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// Sample questions data with additional questions
const questions = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    correct: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Jupiter", "Mars", "Venus", "Mercury"],
    correct: "Mars",
  },
  {
    question: "What is 2 + 2?",
    options: ["3", "4", "5", "6"],
    correct: "4",
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    options: ["William Shakespeare", "Jane Austen", "Charles Dickens", "Mark Twain"],
    correct: "William Shakespeare",
  },
  {
    question: "What is the largest mammal in the world?",
    options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
    correct: "Blue Whale",
  },
  {
    question: "Which element has the chemical symbol 'O'?",
    options: ["Gold", "Oxygen", "Osmium", "Oganesson"],
    correct: "Oxygen",
  },
];

// Question component
const Question = ({ question, options, onAnswer, selected }) => (
  <div className="card p-4 mb-4 w-100" style={{ maxWidth: '500px' }}>
    <h2 className="card-title h5 mb-3">{question}</h2>
    <div className="d-flex flex-column gap-2">
      {options.map((option, index) => (
        <button
          key={index}
          className={`btn ${selected === option ? 'btn-primary' : 'btn-outline-secondary'}`}
          onClick={() => onAnswer(option)}
        >
          {option}
        </button>
      ))}
    </div>
  </div>
);

// Result component
const Result = ({ score, total, onRestart }) => (
  <div className="card p-4 text-center w-100" style={{ maxWidth: '500px' }}>
    <h2 className="card-title h4 mb-3">Quiz Completed!</h2>
    <p className="card-text mb-3">
      Your Score: {score} out of {total}
    </p>
    <button
      className="btn btn-success"
      onClick={onRestart}
    >
      Restart Quiz
    </button>
  </div>
);

// Main App component
const QuizApp = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (option) => {
    setSelectedOption(option);
    if (option === questions[currentQuestion].correct) {
      setScore(score + 1);
    }
    setTimeout(() => {
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion);
        setSelectedOption(null);
      } else {
        setShowResult(true);
      }
    }, 500);
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setScore(0);
    setSelectedOption(null);
    setShowResult(false);
  };

  return (
    <div className="d-flex flex-column align-items-center p-3">
      <h1 className="h3 mb-4">Quiz App</h1>
      {showResult ? (
        <Result score={score} total={questions.length} onRestart={handleRestart} />
      ) : (
        <Question
          question={questions[currentQuestion].question}
          options={questions[currentQuestion].options}
          onAnswer={handleAnswer}
          selected={selectedOption}
        />
      )}
    </div>
  );
};

export default QuizApp;