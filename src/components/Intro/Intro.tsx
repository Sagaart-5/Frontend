import { useState } from 'react'
import Button from 'src/ui/Button/Button'
import Popup from '../Popup/Popup'
import styles from './Intro.module.scss'

const Intro = () => {
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false)

  function handleOverlayClose() {
    setIsRegistrationOpen(false)
  }

  function handleRegistrationOpen() {
    setIsRegistrationOpen(true)
  }

  return (
    <div className={styles.intro}>
      <div className={styles.overlay}>
        <div className={`${styles.content} ${styles.blur}`}>
          <h1 className={styles.title}>Раскройте подлинную стоимость Арт объектов!</h1>
          <Button title='Оценить' type='button' onClick={handleRegistrationOpen} />
        </div>
        <div></div>
        <div></div>
        <div className={styles.blur}></div>
        <div></div>
        <div className={styles.blur}></div>
        <div></div>
      </div>
      {isRegistrationOpen && (
        <Popup
          setIsRegistrationOpen={setIsRegistrationOpen}
          handleOverlayClose={handleOverlayClose}
        />
      )}
    </div>
  )
}

export default Intro
