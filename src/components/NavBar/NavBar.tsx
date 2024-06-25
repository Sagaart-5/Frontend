import styles from 'src/components/NavBar/NavBar.module.scss'
import NextIcon from 'src/assets/images/icons/arrowR.svg'
import { Link } from 'react-router-dom'

const NavBar = () => {
  const registrationRoute = location.pathname === '/signup'
  const loginRoute = location.pathname === '/signin'
  const loginProfile = location.pathname === '/profile'

  return (
    <div className={styles.navBar}>
      <div className={styles.container}>
        <p className={styles.text}>
          <Link className={styles.link} to='/'>
            Главная
          </Link>
        </p>
        <NextIcon />
        <p className={styles.text}>
          {registrationRoute && 'Регистрация'}
          {loginRoute && 'Вход'}
          {loginProfile && 'Личный кабинет'}
        </p>
      </div>
    </div>
  )
}

export default NavBar
