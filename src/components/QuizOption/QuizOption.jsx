import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const QuizOption = ({ option, correctAnswer }) => {
  const [gender, setgender] = useState();
  console.log(gender);
  const radioId = uuidv4();

  const handlegender = (e) => {
    setgender(e.target.value);
  };

  const handleQuizAns = () => {
    if (option !== correctAnswer) {
      toast.error('Wrong Answer!', {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
    } else {
      toast.success('Right Answer!', {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
    }
  };

  return (
    <div>
      <input
        type="radio"
        name="gender"
        value={option}
        id={radioId}
        onChange={handlegender}
      />
      <label htmlFor={radioId}>
        {" "}
        <p id={radioId} onClick={handleQuizAns}>
          {option}
        </p>
      </label>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default QuizOption;
