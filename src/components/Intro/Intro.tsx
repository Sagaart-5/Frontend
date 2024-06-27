import Button from 'src/ui/Button/Button'
import styles from './Intro.module.scss'

const Intro = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    })
  }

  return (
    <div className={styles.intro}>
      <div className={styles.overlay}>
        <div className={`${styles.content} ${styles.blur}`}>
          <h1 className={styles.title}>
            Раскройте подлинную стоимость Арт объектов!
          </h1>
          <Button
            title='Оценить'
            type='button'
            onClick={() => scrollToSection('appraisal')}
          />
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
