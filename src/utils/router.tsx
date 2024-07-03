import { createBrowserRouter, useParams } from 'react-router-dom'
import App from 'src/components/App/App'
import MainPage from 'src/pages/MainPage/MainPage'
import Registration from 'src/components/Registration/Registration'
import Login from 'src/components/Login/Login'
import ProfilePage from 'src/pages/ProfilePage/ProfilePage'
import MarketplacePage from 'src/pages/MarketplacePage/MarketplacePage'
import CatalogPage from 'src/pages/CatalogPage/CatalogPage'
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
        element: <ProfilePage />,
      },
      {
        path: 'marketplace',
        element: <MarketplacePage />,
      },
      {
        path: 'catalog',
        element: <CatalogPage />,
      },
      {
        path: 'art/:id',
        element: <ArtPage />,
      },
    ],
  },
])
