import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const QuizOption = ({option,correctAnswer}) => {

    

    const handleQuizAns = () => {
        if(option !== correctAnswer){
            toast("Wrong answer")
        } else {
            toast("right answer")

        }
    }

  return (
    <div>
        <button onClick={handleQuizAns}>{option}</button>
        <ToastContainer />
    </div>
  )
}

export default QuizOption