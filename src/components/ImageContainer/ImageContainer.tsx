import styles from 'src/components/ImageContainer/ImageContainer.module.scss'
import Picture from 'src/assets/images/mock/arts/art6.png'
import Eye from 'src/assets/images/icons/eye.svg'
import Up from 'src/assets/images/icons/up.svg'

const ImageContainer = () => {
  return (
    <div className={styles.picture}>
      <div className={styles.pictureContainer}>
        <div className={`${styles.pictureContainerLittle} ${styles.active}`}>
          <img
            className={styles.pictureLittle}
            src={Picture}
            alt='картина художника'
          />
        </div>
        <div className={styles.pictureContainerLittle}>
          <img
            className={styles.pictureLittle}
            src={Picture}
            alt='картина художника'
          />
        </div>
        <div className={styles.pictureContainerLittle}>
          <img
            className={styles.pictureLittle}
            src={Picture}
            alt='картина художника'
          />
        </div>
      </div>
      <div className={styles.pictureImage}>
        <img
          className={styles.pictureBig}
          src={Picture}
          alt='картина художника'
        />
        <div className={styles.pictureTextContainer}>
          <div className={styles.pictureTextContainerItem}>
            <Eye />
            <p className={styles.pictureText}>Вид в комнате</p>
          </div>
          <div className={styles.pictureTextContainerItem}>
            <Up />
            <p className={styles.pictureText}>Делиться</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ImageContainer
