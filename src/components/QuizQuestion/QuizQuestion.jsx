import React, { useState } from "react";
import QuizOption from "../QuizOption/QuizOption";
import "./QuizQuestion.css";
import { v4 as uuidv4 } from "uuid";
import { FaEye,FaEyeSlash } from "react-icons/fa";


const QuizQuestion = ({ question, options, correctAnswer, handleQuizAns,quizQuestionLength }) => {

  const [showAns, setShowAns] = useState('')
  const [ansIcon, setAnsIcon] = useState(false)

  const handleShowAns = () => {
    setShowAns(correctAnswer)
    setAnsIcon(true)
  }

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

      <div onClick={handleShowAns} className="ans__show">
      {ansIcon ? <FaEye /> : <FaEyeSlash />}Show Answer: {showAns}
      </div>
    </div>
  );
};

export default QuizQuestion;
