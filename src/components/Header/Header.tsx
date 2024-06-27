import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import CartIcon from 'src/assets/images/icons/cart.svg'
import ProfileIcon from 'src/assets/images/icons/profile.svg'
import styles from './Header.module.scss'

const Header = () => {
  const path = {
    events: '/#events',
    appraisal: '/#appraisal',
    marketplace: '/#marketplace',
    about: '/#about',
  }
  const location = useLocation()

  const setHeaderClass = () => {
    const path = location.pathname + location.hash
    const isSectionDark =
      path === '/' || path === '/#intro' || path === '/#appraisal'
    // const isSectionDark = path === '/' || path === '/#intro'
    return `${styles.header} ${
      isSectionDark ? styles.headerBgDark : styles.headerBgLight
    }`
  }

  const setLinkClass = (path: string) => {
    const isActive = path === location.pathname + location.hash
    return `${styles.menuLink} ${isActive ? styles.activeLink : ''}`
  }

  return (
    <header className={setHeaderClass()}>
      <Link to='/' reloadDocument>
        <div className={styles.logo} />
      </Link>
      <nav>
        <ul className={styles.menu}>
          <li>
            <HashLink to={path.events} className={setLinkClass(path.events)}>
              События
            </HashLink>
          </li>
          <li>
            <HashLink
              to={path.appraisal}
              className={setLinkClass(path.appraisal)}
            >
              Оценка
            </HashLink>
          </li>
          <li>
            <HashLink
              to={path.marketplace}
              className={setLinkClass(path.marketplace)}
            >
              Маркетплейс
            </HashLink>
          </li>
          <li>
            <HashLink to={path.about} className={setLinkClass(path.about)}>
              О нас
            </HashLink>
          </li>
        </ul>
      </nav>
      <div className={styles.rightBlock}>
        <Link to='/' className={styles.iconLink}>
          <CartIcon />
        </Link>
        <Link to='/' className={styles.iconLink}>
          <ProfileIcon />
        </Link>
      </div>
    </header>
  )
}

export default Header
