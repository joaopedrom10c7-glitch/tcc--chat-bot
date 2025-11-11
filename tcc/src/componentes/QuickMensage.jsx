import React from 'react';

const QuickQuestions = ({ onQuickQuestionClick }) => {
  const questions = [
    "Qual o saldo da minha conta?",
    "Cartões",  
    "Esqueci minha senha, o que fazer?",
    "Falar com um atendente"
  ];

  return (
    <div className="quick-questions">
      {questions.map((question, index) => (
        <button 
          key={index} 
          onClick={() => onQuickQuestionClick(question)}
        >
          {question}
        </button>
      ))}
    </div>
  );
};

export default QuickQuestions;