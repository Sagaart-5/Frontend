import styles from './Popup.module.scss'
import { POPUP_DATA } from '../utils/constants'
import SubmitButton from '../ui/Button/Button'

export default function PopupRegistrationForm() {
  const {
    popup__inputContainer,
    popup__input,
    popup__text,
    popup__containerNext,
    popup__container,
  } = styles
  return (
    <div className={popup__container}>
      <p className={popup__text}>{POPUP_DATA.subtitleRegistration}</p>
      <div className={popup__inputContainer}>
        <input
          className={popup__input}
          type='text'
          placeholder='Имя'
          required={true}
        />
        <input
          className={popup__input}
          type='phone'
          placeholder='8 (____) ____ - ____ - __'
          required={true}
        />
        <input
          className={popup__input}
          type='text'
          placeholder='Email'
          required={true}
        />
        <input
          className={popup__input}
          type='password'
          placeholder='Пароль'
          required={true}
        />
        <input
          className={popup__input}
          type='password'
          placeholder='Повторите пароль'
          required={true}
        />
      </div>
      <div className={popup__containerNext}>
        <SubmitButton
          title={POPUP_DATA.next}
          backgroundColor='white'
          color='#000000'
          borderColor='#2B2D33'
        />
      </div>
    </div>
  )
}
