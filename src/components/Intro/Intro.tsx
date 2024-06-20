import styles from './Intro.module.scss'

const Intro = () => {
  return (
    <section className={styles.intro}>
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
    </section>
  )
}

export default Intro
