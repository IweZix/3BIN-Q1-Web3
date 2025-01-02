import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { AppLoader } from 'components/App/AppLoader'
import { Home } from 'components/Home/Home'
import { Jokes } from 'components/Jokes/Jokes'

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLoader />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/famous-jokes",
        element: <Jokes />,
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
