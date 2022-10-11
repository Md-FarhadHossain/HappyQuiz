import React from 'react'
import { Link } from 'react-router-dom'
import './QuizTopic.css'

const QuizTopic = ({name, logo, total,id}) => {
  return (
    <div className='quiz__topic'>
        <img src={logo} alt="" />
        <div className="quiz__topic--info">
        <h1>Quiz Topic: {name}</h1>
        <h3>Total quiz: {total}</h3>
        </div>
        <Link to={`/quiz/${id}`} className='btn start__now--btn'>Start Now</Link>

    </div>
  )
}

export default QuizTopic