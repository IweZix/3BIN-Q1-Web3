import { createRoot } from 'react-dom/client'
import App from './App'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Authors } from './components/Authors/Authors'
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
} from '@apollo/client'
import { Books } from './components/Books/Books'
import { AddBook } from './components/Books/AddBook'

const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache(),
})

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Authors />,
      },
      {
        path: "/books",
        element: <Books />,
      },
      {
        path: "/add-book",
        element: <AddBook />,
      }
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <ApolloProvider client={client}>
    <RouterProvider router={router} />
  </ApolloProvider>
)