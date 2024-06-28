import styles from 'src/components/NavBar/NavBar.module.scss'
import NextIcon from 'src/assets/images/icons/arrowR.svg'
import { Link } from 'react-router-dom'

const NavBar = () => {
  const registrationRoute = location.pathname === '/signup'
  const loginRoute = location.pathname === '/signin'
  const profileRoute = location.pathname === '/profile'
  // const marketRoute = location.pathname === '/маркетплейс'
  const catalogRoute = location.pathname === '/catalog'

  return (
    <div className={styles.navBar}>
      <div className={styles.container}>
        <p className={styles.text}>
          <Link className={styles.link} to='/'>
            Главная
          </Link>
        </p>
        <div className={styles.image}>
          <NextIcon />
        </div>
        <p className={styles.text}>
          {registrationRoute && 'Регистрация'}
          {loginRoute && 'Вход'}
          {profileRoute && 'Личный кабинет'}
          {/* {marketRoute && 'Маркетплейс'} */}
          {catalogRoute && (
            <>
              {/* маркетплей роут дописать */}
              <Link className={styles.link} to='/'>
                Маркетплейс
              </Link>
              <div className={styles.image}>
                <NextIcon />
              </div>
              Каталог
            </>
          )}
        </p>
      </div>
    </div>
  )
}

export default NavBar
