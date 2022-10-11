import React from "react";
import "react-toastify/dist/ReactToastify.css";

const QuizOption = ({ option, correctAnswer,handleQuizAns }) => {
  

  return (
    <div>
      <button onClick={handleQuizAns}>{option}</button>
    </div>
  );
};

export default QuizOption;
