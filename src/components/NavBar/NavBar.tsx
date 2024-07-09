import styles from 'src/components/NavBar/NavBar.module.scss'
import NextIcon from 'src/assets/images/icons/arrowR.svg'
import { Link } from 'react-router-dom'
import { useAppSelector } from 'src/services/hooks'
import { selectArts } from 'src/services/slices/artsSlice'

const NavBar = () => {
  const { art } = useAppSelector(selectArts)

  const registrationRoute = location.pathname === '/signup'
  const loginRoute = location.pathname === '/signin'
  const profileRoute = location.pathname === '/profile'
  const marketRoute = location.pathname === '/marketplace'
  const catalogRoute = location.pathname === '/catalog'
  const imageId = location.pathname.includes('/art/')

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
        <div className={styles.text}>
          {registrationRoute && 'Регистрация'}
          {loginRoute && 'Вход'}
          {profileRoute && 'Личный кабинет'}
          {marketRoute && 'Маркетплейс'}
          {catalogRoute && (
            <>
              <Link className={styles.link} to='/marketplace'>
                Маркетплейс
              </Link>
              <div className={styles.image}>
                <NextIcon />
              </div>
              Каталог
            </>
          )}
          {imageId && (
            <>
              <Link className={styles.link} to='/catalog'>
                Каталог
              </Link>
              <div className={styles.image}>
                <NextIcon />
              </div>
              {art.title}
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default NavBar
