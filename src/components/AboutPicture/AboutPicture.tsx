import styles from 'src/components/AboutPicture/AboutPicture.module.scss'
import Back from 'src/assets/images/icons/arrow-left.svg'
import Metka from 'src/assets/images/icons/metka.svg'
import Shop from 'src/assets/images/icons/shop.svg'
import Button from 'src/ui/Button/Button'

const AboutPicture = () => {
  function handleBack() {
    window.history.back()
  }

  return (
    <div className={styles.aboutPicture}>
      <div onClick={handleBack} className={styles.container}>
        <div className={styles.buttonBack}>
          <Back />
        </div>
        <p className={styles.back}>Назад</p>
      </div>
      <div className={styles.underline}>
        <h3 className={styles.name}>Легкий бриз </h3>
        <p className={styles.author}>Елена Василькова</p>
        <p className={styles.params}>Холст, масло, 2008</p>
        <p className={styles.params}>Галерейный холст</p>
        <p className={styles.params}>90 × 60 см</p>
        <p className={styles.description}>
          Динамичная и неуловимая абстракция и текстура. Играет между линиями
          хаоса и спокойствия. Идеально подходит для современных и стильных
          интерьеров.
        </p>
      </div>
      <p className={styles.price}>620 000 р</p>
      <div className={styles.containerDeliveryButtons}>
        <div className={styles.containerDelivery}>
          <Metka />
          <p className={styles.delivery}>Доставка из Москвы</p>
        </div>
        <div className={styles.containerDelivery}>
          <Shop />
          <p className={styles.delivery}>
            Ожидается доставка в течение 3–7 дней
          </p>
        </div>
      </div>
      <div className={styles.buttons}>
        <Button variant='dark' title='Добавить в корзину' />
        <Button title='Посмотреть аналитику' />
      </div>
    </div>
  )
}

export default AboutPicture
