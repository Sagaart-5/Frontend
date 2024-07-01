import styles from 'src/components/MyRate/MyRate.module.scss'
import Picker from 'src/assets/images/icons/calendar.svg'

// interface ArtUploadPageProps {
//   next: () => void
// }

const MyRate = () => {
  return (
    <div className={styles.myRate}>
      <div className={styles.item}>
        <div className={styles.wrapper}>
          <p className={styles.title}>Запрос №1</p>
          <div className={styles.button}>
            <p className={styles.status}>Отправлено</p>
          </div>
        </div>
        <div className={styles.dateContainer}>
          <Picker />
          <p className={styles.date}>07.06.2024</p>
        </div>
      </div>
      {/* Копия */}
      <div className={styles.item}>
        <div className={styles.wrapper}>
          <p className={styles.title}>Запрос №2</p>
          <div className={styles.button}>
            <p className={styles.status}>Отправлено</p>
          </div>
        </div>
        <div className={styles.dateContainer}>
          <Picker />
          <p className={styles.date}>01.01.2024</p>
        </div>
      </div>

    </div>
  )
}

export default MyRate
