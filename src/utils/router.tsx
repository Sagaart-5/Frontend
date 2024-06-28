import { createBrowserRouter } from 'react-router-dom'
import App from 'src/components/App/App'
import Catalog from 'src/components/Catalog/Catalog'
import Login from 'src/components/Login/Login'
import Profile from 'src/components/Profile/Profile'
import Registration from 'src/components/Registration/Registration'
import MainPage from 'src/pages/MainPage/MainPage'
import MarketplacePage from 'src/pages/MarketplacePage/MarketplacePage'
import ArtPage from 'src/pages/ArtPage/ArtPage'

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
        path: 'signup',
        element: <Registration />,
      },
      {
        path: 'signin',
        element: <Login />,
      },
      {
        path: 'profile',
        element: <Profile />,
      },
      {
        path: 'marketplace',
        element: <MarketplacePage />,
      },
      {
        path: 'catalog',
        element: <Catalog />,
      },
      {
        path: 'art/:id',
        element: <ArtPage />,

      },
    ],
  },
])
