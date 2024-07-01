import { useState } from 'react'
import Button from 'src/ui/Button/Button'
import Popup from '../Popup/Popup'
import styles from './Appraisal.module.scss'

const Appraisal = () => {
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false)

  const handleOverlayClose = () => {
    setIsRegistrationOpen(false)
    document.body.style.overflow = 'unset'
  }

  const handleRegistrationOpen = () => {
    setIsRegistrationOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const steps = [
    'Загрузить фото',
    'Немного расскажите об арт-объекте',
    'Создайте аккаунт',
  ]

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Оцените свой арт-объект</h2>
      <ul className={styles.list}>
        {steps.map((step, index) => (
          <li key={index} className={styles.item}>
            <p className={styles.subtitle}>
              <span className={styles.currentStep}>{index + 1}</span>
              Шаг
            </p>
            <p className={styles.text}>{step}</p>
          </li>
        ))}
      </ul>
      <Button title='Оценить' type='button' onClick={handleRegistrationOpen} />
      {isRegistrationOpen && (
        <Popup
          setIsRegistrationOpen={setIsRegistrationOpen}
          handleOverlayClose={handleOverlayClose}
        />
      )}
    </div>
  )
}

export default Appraisal
