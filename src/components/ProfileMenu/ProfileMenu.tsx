import styles from 'src/components/ProfileMenu/ProfileMenu.module.scss'

interface ProfileMenuProps {
  activeItem: string | null
  handleMenuItemClick: (type: string) => void
}

const ProfileMenu = ({ activeItem, handleMenuItemClick }: ProfileMenuProps) => {
  return (
    <ul className={styles.menu}>
      <li
        className={`${styles.item} ${activeItem === 'artUpload' ? styles.isActive : ''}`}
        onClick={() => handleMenuItemClick('artUpload')}
      >
        Оценка арт объекта
      </li>
      <li
        className={`${styles.item} ${activeItem === 'myRate' ? styles.isActive : ''}`}
        onClick={() => handleMenuItemClick('myRate')}
      >
        Мои оценки
      </li>
      <li
        className={`${styles.item} ${activeItem === 'subscription' ? styles.isActive : ''}`}
        onClick={() => handleMenuItemClick('subscription')}
      >
        Моя подписка
      </li>
      <li
        className={`${styles.item} ${activeItem === 'tariffs' ? styles.isActive : ''}`}
        onClick={() => handleMenuItemClick('tariffs')}
      >
        Тарифы
      </li>
    </ul>
  )
}

export default ProfileMenu
