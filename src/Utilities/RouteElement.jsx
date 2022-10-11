import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from '../components/Home/Home'
import Main from '../Main'
import Statistics from '../components/Statistics/Statistics'
import Blog from '../components/Blog/Blog'
import Quiz from '../components/Quiz/Quiz'
import ErrorPage from '../components/ErrorPage/ErrorPage'

const RouteElement = () => {

    const router = createBrowserRouter([
      {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
          {
            path: '/',
            element: <Home />,
            loader: async () => fetch('https://openapi.programming-hero.com/api/quiz'),
          },
          {
          path: '/statistics',
          loader: async () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Statistics />
          },
          {
            path: '/blog',
            element: <Blog />
          },
          {
            path: '/quiz/:quizId',
            loader: async ({params}) => {
              return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`)
              
            },
            element: <Quiz />,
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