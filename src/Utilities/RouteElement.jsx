import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from '../components/Home/Home'
import Main from '../Main'

const RouteElement = () => {

    const router = createBrowserRouter([
      {
        path: '/',
        element: <Main />,
        children: [
          {
            path: '/',
            element: <Home />
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