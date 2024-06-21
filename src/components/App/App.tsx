import { Outlet } from 'react-router-dom'
import styles from './App.module.scss'

const App = () => {
    const [isRegistrationOpen, setIsRegistrationOpen] = useState(false)

  function handleOverlayClose() {
    setIsRegistrationOpen(false)
  }

  function handleRegistrationOpen() {
    setIsRegistrationOpen(true)
  }
  return (
    <div className={styles.app}>
      <Outlet />
      <button onClick={handleRegistrationOpen}>Открыть попап</button>
      {isRegistrationOpen && (
        <PopupCostTwo
          setIsRegistrationOpen={setIsRegistrationOpen}
          handleOverlayClose={handleOverlayClose}
        />
      )}
    </div>
  )
}

export default App
