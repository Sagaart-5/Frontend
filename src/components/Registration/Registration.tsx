import styles from 'src/components/Registration/Registration.module.scss'
import NavBar from 'src/components/NavBar/NavBar'
import RegistrationForm from 'src/components/RegistrationForm/RegistrationForm'
import Back from 'src/assets/images/icons/back.svg'
import { Link } from 'react-router-dom'

// interface SectionProps {
//   sectionId: string
//   children: ReactNode
// }

const Registration = () => {
  return (
    <div>
      <NavBar />
      <div className={styles.registration}>
        <div className={styles.back}>
          <Back />
        </div>
        <div className={styles.blur}>
          <div className={styles.popup}>
            <div className={styles.buttons}>
              <button className={styles.button}>Регистрация</button>
              <button className={styles.button}>
                <Link className={styles.link} to='/signin'>
                  Вход
                </Link>
              </button>
            </div>
            <p className={styles.title}>Регистрация</p>
            <RegistrationForm
              text={'Создайте аккаунт, чтобы мы могли поделиться с Вами результатом оценки'}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Registration
