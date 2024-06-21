import Intro from 'src/components/Intro/Intro'
import styles from './MainPage.module.scss'

const MainPage = () => {
  return (
    <div className={styles.main}>
      <div className={styles.header}></div>
      <Intro />
    </div>
  )
}

export default MainPage
