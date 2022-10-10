import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from '../components/Home/Home'
import Main from '../Main'
import Statistics from '../components/Statistics/Statistics'
import Blog from '../components/Blog/Blog'

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