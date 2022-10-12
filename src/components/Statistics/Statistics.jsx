import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import './Statistics.css'

const Statistics = () => {

  const quizData = useLoaderData()
  const dataOfTopic = quizData.data
  

  return (
    <div className='statistics__content'>
      <ResponsiveContainer width="90%">
      <LineChart  height={400} data={dataOfTopic}>
        <Line type='monotone' dataKey='total' stroke='#2196F3' strokeWidth={2} />
        <CartesianGrid stroke='#ccc' />
        <XAxis dataKey='name' />
        <YAxis />
        <Tooltip />
        <Legend />
      </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Statistics