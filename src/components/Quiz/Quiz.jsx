import React from "react";
import { useLoaderData } from "react-router-dom";
import QuizQuestion from "../QuizQuestion/QuizQuestion";
import 'react-toastify/dist/ReactToastify.css';
const Quiz = () => {
  const loadQuiz = useLoaderData();
  const quizData = loadQuiz.data;
  const quizDataQuestion = quizData.questions;

  

  const handleQuizAns = () => {
    
  };

  return (
    <div>
      <h1>Quiz name: {quizData.name}</h1>
      <h3>Total quiz: {quizData.total}</h3>

      {quizDataQuestion.map((question) => (
        <QuizQuestion
          key={question.id}
          question={question}
          options={question.options}
          correctAnswer={question.correctAnswer}
          handleQuizAns={handleQuizAns}
        />
      ))}

    </div>
  );
};

export default Quiz;
