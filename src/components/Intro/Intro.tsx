import styles from './Intro.module.scss'

const Intro = () => {
  return (
    <div className={styles.intro}>
      <div className={styles.overlay}>
        <div className={`${styles.content} ${styles.blur}`}>
          <h1 className={styles.title}>Раскройте подлинную стоимость Арт объектов!</h1>
        </div>
        <div></div>
        <div></div>
        <div className={styles.blur}></div>
        <div></div>
        <div className={styles.blur}></div>
        <div></div>
      </div>
    </div>
  )
}

export default Intro
