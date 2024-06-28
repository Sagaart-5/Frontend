import Button from 'src/ui/Button/Button'
import styles from 'src/components/RegistrationForm/RegistrationForm.module.scss'

interface PopupRegistrationFormProps {
  text?: string
}

export default function PopupRegistrationForm({ text }: PopupRegistrationFormProps) {
  return (
    <div className={styles.container}>
      <p className={styles.text}>
        {text}
      </p>
      <form className={styles.form}>
        <input className={styles.input} type='text' placeholder='Имя' required={true} />
        <input
          className={styles.input}
          type='phone'
          placeholder='8 (____) ____ - ____ - __'
          required={true}
        />
        <input className={styles.input} type='text' placeholder='Email' required={true} />
        <input className={styles.input} type='password' placeholder='Пароль' required={true} />
        <input
          className={styles.input}
          type='password'
          placeholder='Повторите пароль'
          required={true}
        />
      </form>
      <Button title='Далее' type='submit' />
    </div>
  )
}
