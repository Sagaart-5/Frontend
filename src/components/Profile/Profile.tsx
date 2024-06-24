import styles from 'src/components/Profile/Profile.module.scss'
import NavBar from 'src/components/NavBar/NavBar'
import { HashLink } from 'react-router-hash-link'

// interface SectionProps {
//   sectionId: string
//   children: ReactNode
// }

const Profile = () => {
  return (
    <div>
      <NavBar />
      <div className={styles.container}>
        <nav>
          <ul className={styles.menu}>
            <li>
              <HashLink to='/' className={events}>
                События
              </HashLink>
            </li>
            <li>
              <HashLink to='/' className={events}>
                Оценка
              </HashLink>
            </li>
            <li>
              <HashLink to='/' className={events}>
                Маркетплейс
              </HashLink>
            </li>
            <li>
              <HashLink to='/' className={events}>
                О нас
              </HashLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Profile
