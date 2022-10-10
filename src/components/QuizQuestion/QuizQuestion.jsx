import React from 'react'

const QuizQuestion = ({question}) => {
    console.log(question)
  return (
    <div>
        <h1>{question.correctAnswer}</h1>
    </div>
  )
}

export default QuizQuestion