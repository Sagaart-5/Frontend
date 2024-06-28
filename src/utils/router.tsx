import { createBrowserRouter } from 'react-router-dom'
import App from 'src/components/App/App'
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
        path: 'marketplace',
        element: <MarketplacePage />,
      },
      {
        path: 'art/:id',
        element: <ArtPage />,
      },
    ],
  },
])
