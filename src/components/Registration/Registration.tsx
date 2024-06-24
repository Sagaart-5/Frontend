import styles from 'src/components/Registration/Registration.module.scss'

import NavBar from 'src/components/NavBar/NavBar'
import PopupRegistrationForm from '../RegistrationForm/RegistrationForm'

// interface SectionProps {
//   sectionId: string
//   children: ReactNode
// }

const Registration = () => {
  return (
    <div>
      <NavBar />
      <div className={styles.registration}>
        <div className={styles.blur}>
          <div className={styles.button}>
            <p className={styles.text}>Регистрация</p>
            <p className={styles.text}>Вход</p>
          </div>
          <div className={styles.popup}>
            <PopupRegistrationForm />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Registration
