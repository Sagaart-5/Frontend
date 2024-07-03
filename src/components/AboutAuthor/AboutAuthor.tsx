import styles from 'src/components/AboutAuthor/AboutAuthor.module.scss'
import Pic from 'src/assets/images/mock/arts/art1.png'

const AboutAuthor = () => {
  return (
    <div className={styles.aboutAuthor}>
      <div className={styles.container}>
        <p className={styles.author}>о художнике:</p>
        <p className={styles.name}>Елена Василькова</p>
        <p className={styles.description}>
          Елена Василькова родилась — Koschatzky ART Award, организованного
          Rotary Albertina Wien. Выставка номинантов была представлена дворце
          Schönborn, председателем жюри выступила генеральный директор музея
          современного искусства Mumok & Leopold Museum — Карола Краус.
        </p>
      </div>
      <div >
        <img className={styles.photo} src={Pic} alt='картинка автора' />
      </div>
    </div>
  )
}

export default AboutAuthor
