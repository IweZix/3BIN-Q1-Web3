import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Books } from 'components/Books/Books.jsx'
import { Home } from 'components/Home/Home.jsx'
import { AppLoader } from 'components/App/AppLoader.jsx'

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
        path: "/books",
        element: <Books />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
