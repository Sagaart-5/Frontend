import styles from 'src/components/Registration/Registration.module.scss'
import Back from 'src/assets/images/icons/back.svg'
import RegistrationForm from 'src/components/RegistrationForm/RegistrationForm'
import { Link } from 'react-router-dom'
import cn from 'classnames/bind'
const cx = cn.bind(styles)

// interface SectionProps {
//   sectionId: string
//   children: ReactNode
// }

const Login = () => {
  function handleBack() {
    window.history.back()
  }

  const signIn = location.pathname === '/signin'

  return (
    <div>
      <div className={styles.registration}>
        <div className={styles.back} onClick={handleBack}>
          <Back />
        </div>
        <div className={styles.blur}>
          <div className={styles.popup}>
            <div className={styles.buttons}>
              <button className={styles.button}>
                <Link className={styles.link} to='/signup'>
                  Регистрация
                </Link>
              </button>
              <button
                className={cx(styles.button, {
                  [styles.buttonPressed] : signIn,
                })}
              >
                Вход
              </button>
            </div>
            <p className={styles.title}>Вход</p>
            <RegistrationForm
              text={
                'Войдите в аккаунт, чтобы мы могли поделиться с Вами результатом оценки'
              }
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
