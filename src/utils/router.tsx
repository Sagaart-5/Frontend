import { createBrowserRouter } from 'react-router-dom'
import App from 'src/components/App/App'
import Login from 'src/components/Login/Login'
import Profile from 'src/components/Profile/Profile'
import Registration from 'src/components/Registration/Registration'
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
      {
        path: '/signup',
        element: <Registration />,
      },
      {
        path: '/signin',
        element: <Login />,
      },
      {
        path: '/profile',
        element: <Profile />,
      },
    ],
  },
])
