import React from 'react'
import { Link } from 'react-router-dom'
import './QuizTopic.css'

const QuizTopic = ({name, logo, total,id}) => {
  return (
    <div className='quiz__topic'>
        <img src={logo} alt="" />
        <h1>Quiz Topic: {name}</h1>
        <h3>Total quiz: {total}</h3>
        <Link to={`/quiz/${id}`} className='btn start__now--btn'>Start Now</Link>

    </div>
  )
}

export default QuizTopic