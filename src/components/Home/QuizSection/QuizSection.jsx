import React from 'react'
import { useLoaderData } from 'react-router-dom'

const QuizSection = () => {
    const loadQuizTopic = useLoaderData()
    const quizTopicData = loadQuizTopic.data
    
  return (
    <div>
        <h1>quiz data {quizTopicData.length}</h1>
        
        

    </div>
  )
}

export default QuizSection