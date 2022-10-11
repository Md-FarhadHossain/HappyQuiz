import React from "react";
import QuizOption from "../QuizOption/QuizOption";
import "./QuizQuestion.css";
import { v4 as uuidv4 } from "uuid";

const QuizQuestion = ({ question, options, correctAnswer, handleQuizAns,quizQuestionLength }) => {
  return (
    <div className="quizes__content">
      <div
        className="content"
        dangerouslySetInnerHTML={{ __html: question.question }}
      ></div>

      {options.map((option) => (
        <QuizOption
          key={uuidv4()}
          option={option}
          correctAnswer={correctAnswer}
          handleQuizAns={handleQuizAns}
        />
      ))}
    </div>
  );
};

export default QuizQuestion;
