import React from "react";
import QuizOption from "../QuizOption/QuizOption";
import './QuizQuestion.css'

const QuizQuestion = ({ question, options,correctAnswer }) => {
  console.log(question);
  return (
    <div className="quizes__content">

      <div
        className="content"
        dangerouslySetInnerHTML={{ __html: question.question }}

      ></div>


      {
        options.map(option => <QuizOption option={option} correctAnswer={correctAnswer}  />)
      }
    </div>
  );
};

export default QuizQuestion;
