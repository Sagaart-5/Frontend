import styles from 'src/components/Registration/Registration.module.scss'
import Back from 'src/assets/images/icons/back.svg'
import NavBar from 'src/components/NavBar/NavBar'
import RegistrationForm from 'src/components/RegistrationForm/RegistrationForm'
import { Link } from 'react-router-dom'

// interface SectionProps {
//   sectionId: string
//   children: ReactNode
// }

const Login = () => {
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
              <button className={styles.button}>
                <Link className={styles.link} to='/signup'>
                  Регистрация{' '}
                </Link>
              </button>
              <button className={styles.button}>Вход</button>
            </div>
            <p className={styles.title}>Вход</p>
            <RegistrationForm
              text={'Войдите в аккаунт, чтобы мы могли поделиться с Вами результатом оценки'}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
