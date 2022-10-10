import React from 'react'

const QuizOption = ({option,correctAnswer}) => {

    const handleQuizAns = () => {
        if(option !== correctAnswer){
            alert(`worng answer`)
        } else {
            alert(`Right answer`)
        }
    }

  return (
    <div>
        <button onClick={handleQuizAns}>{option}</button>
    </div>
  )
}

export default QuizOption