import { createBrowserRouter } from 'react-router-dom'
import App from 'src/components/App/App'
import MainPage from 'src/pages/MainPage/MainPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <MainPage />,
      },
    ],
  },
])
