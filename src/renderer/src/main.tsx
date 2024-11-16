import './assets/main.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './routes/root'
import ErrorPage from './routes/error'
import About from './routes/about'
import Test from './routes/test'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <div>index</div>
      },
      {
        path: 'contacts',
        element: <div>contacts</div>
      },
      {
        path: 'archives',
        element: <div>archives</div>
      }
    ]
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/test/:id',
    element: <Test />
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
