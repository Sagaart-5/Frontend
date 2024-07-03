import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import Header from 'src/components/Header/Header'
import styles from './App.module.scss'

const App = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className={styles.app}>
      <Header />
      <Outlet />
    </div>
  )
}

export default App
