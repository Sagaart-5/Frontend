import { Outlet } from 'react-router-dom'
import Header from 'src/components/Header/Header'
import styles from './App.module.scss'

const App = () => {
  return (
    <div className={styles.app}>
      <Header />
      <Outlet />
    </div>
  )
}

export default App
