import { Link } from 'react-router-dom'
import WhatsappIcon from 'src/assets/images/icons/whatsapp.svg'
import TelegramIcon from 'src/assets/images/icons/telegram.svg'
import InstagramIcon from 'src/assets/images/icons/instagram.svg'
import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.column}>
          <Link to='/' reloadDocument className={styles.link}>
            <div className={styles.logo} />
          </Link>
          <div className={styles.info}>
            <p className={styles.infoText}>Шагаарт</p>
            <p className={styles.infoText}>
              <span>Шагаарт, 2024</span>
              <span>Оценка Арт-объектов</span>
            </p>
            <p className={styles.infoText}>
              Политика конфиденциальности и пользовательское соглашение
            </p>
          </div>
        </div>
        <nav className={styles.navigation}>
          <ul className={styles.menu}>
            <li className={styles.menuItem}>Контакты</li>
            <li className={styles.menuItem}>Сервис</li>
            <li className={styles.menuItem}>Работы</li>
            <li className={styles.menuItem}>Художники</li>
            <li className={styles.menuItem}>Маркетплейс</li>
            <li className={styles.menuItem}>Стать селлером</li>
          </ul>
        </nav>
        <div className={styles.contacts}>
          <ul className={styles.socials}>
            <li className={styles.social}>
              <WhatsappIcon />
            </li>
            <li className={styles.social}>
              <TelegramIcon />
            </li>
            <li className={styles.social}>
              <InstagramIcon />
            </li>
          </ul>
          <address className={styles.contactsText}>+7 900 800-70-60</address>
          <address className={styles.contactsText}>shagaart@mail.ru</address>
        </div>
      </div>
    </footer>
  )
}

export default Footer
