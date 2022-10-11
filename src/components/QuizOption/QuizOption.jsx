import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const QuizOption = ({ option, correctAnswer }) => {
  const [gender,setgender]=useState()
  console.log(gender)
  const radioId = uuidv4()

  const handlegender=(e)=>{
     setgender(e.target.value)
   }

  const handleQuizAns = () => {
    if(option !== correctAnswer){
      toast('wrong answer')
    } else {
      toast('it right')
    }
  }
  

  return (
    <div>

     <input type="radio" name="gender" value={option} id={radioId} onChange={handlegender} />
     <label htmlFor={radioId}> <p id={radioId} onClick={handleQuizAns}>{option}</p></label>
      <ToastContainer />
    </div>
  );
};

export default QuizOption;
