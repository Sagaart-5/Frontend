import Button from 'src/ui/Button/Button'
import styles from 'src/components/RegistrationForm/RegistrationForm.module.scss'

interface PopupRegistrationFormProps {
  text?: string
  setIsRegistrationOpen?: (type: boolean) => void
}

export default function PopupRegistrationForm({
  text,
  setIsRegistrationOpen,
}: PopupRegistrationFormProps) {

  const unlockScroll = () => {
    document.body.style.overflow = 'unset'
  }

const signup = location.pathname === '/signup'

  const closePopup = () => {
    if (setIsRegistrationOpen)
    setIsRegistrationOpen(false)
    unlockScroll()
  }

  return (
    <div className={styles.container}>
      <p className={styles.text}>{text}</p>
      <form className={styles.form}>
        <input
          className={styles.input}
          type='text'
          placeholder='Имя'
          required={true}
        />
        {signup ? <input
          className={styles.input}
          type='phone'
          placeholder='8 (____) ____ - ____ - __'
          required={true}
        /> : ''}
        {signup ? <input
          className={styles.input}
          type='text'
          placeholder='Email'
          required={true}
        /> : ''}
        <input
          className={styles.input}
          type='password'
          placeholder='Пароль'
          required={true}
        />
        {signup ? <input
          className={styles.input}
          type='password'
          placeholder='Повторите пароль'
          required={true}
        /> : ''}
      </form>
      <Button title='Далее' onClick={closePopup} />
    </div>
  )
}
