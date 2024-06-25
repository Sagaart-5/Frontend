import styles from 'src/components/ProfileMenu/ProfileMenu.module.scss'
import { Link } from 'react-router-dom'

// interface SectionProps {
//   sectionId: string
//   children: ReactNode
// }

const ProfileMenu = () => {
  return (
    <nav>
      <ul className={styles.menu}>
        <li className={styles.item}>
          <Link to='/' className={styles.link}>
            Оценка арт объекта
          </Link>
        </li>
        <li className={styles.item}>
          <Link to='/' className={styles.link}>
            Мои оценки
          </Link>
        </li>
        <li className={styles.item}>
          <Link to='/' className={styles.link}>
            Моя подписка
          </Link>
        </li>
        <li className={styles.item}>
          <Link to='/' className={styles.link}>
            Тарифы
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default ProfileMenu
