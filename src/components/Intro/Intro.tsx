import { useState } from 'react'
import styles from './Intro.module.scss'
import Popup from '../Popups/Popup'
import SubmitButton from '../ui/Button/Button'
import { POPUP_DATA } from '../utils/constants'

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
          <SubmitButton
            title={POPUP_DATA.open}
            onClick={handleRegistrationOpen}
            backgroundColor='white'
            color='#000000'
            borderColor='#2B2D33'
          />
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
