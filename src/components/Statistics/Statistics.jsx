import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts'

const Statistics = () => {

  const quizData = useLoaderData()
  const dataOfTopic = quizData.data
  

  return (
    <div>
      <LineChart width={600} height={300} data={dataOfTopic}>
        <Line type='monotone' dataKey='total' stroke='#2196F3' strokeWidth={2} />
        <CartesianGrid stroke='#ccc' />
        <XAxis dataKey='name' />
        <YAxis />
        <Tooltip />
        <Legend />
      </LineChart>
    </div>
  )
}

export default Statistics