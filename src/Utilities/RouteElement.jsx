import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from '../components/Home/Home'
import Main from '../Main'
import Statistics from '../components/Statistics/Statistics'
import Blog from '../components/Blog/Blog'
import Quiz from '../components/Quiz/Quiz'

const RouteElement = () => {

    const router = createBrowserRouter([
      {
        path: '/',
        element: <Main />,
        children: [
          {
            path: '/',
            element: <Home />,
            loader: async () => fetch('https://openapi.programming-hero.com/api/quiz')
          },
          {
          path: '/statistics',
          element: <Statistics />
          },
          {
            path: '/blog',
            element: <Blog />
          },
          {
            path: '/quiz/:quizId',
            loader: async ({params}) => {
              fetch(`https://openapi.programming-hero.com/api/quiz/${params}`)

            },
            element: <Quiz />
          }
        ]
      }
    ])

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default RouteElement