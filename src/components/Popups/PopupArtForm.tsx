import styles from './Popup.module.scss'
import { POPUP_DATA } from '../utils/constants'
import Select from './../../components/ui/Select/Select'
import SubmitButton from '../ui/Button/Button'

interface PopupArtFormProps {
  next: () => void
}

export default function PopupArtForm({ next }: PopupArtFormProps) {
  const {
    popup__inputContainer,
    popup__input,
    popup__text,
    popup__containerNext,
    popup__container,
  } = styles
  return (
    <div className={popup__container}>
      <p className={popup__text}>{POPUP_DATA.subtitleArt}</p>
      <div className={popup__inputContainer}>
        <input
          className={popup__input}
          type='text'
          placeholder='Автор Арт-объекта'
          required={true}
        />
        <input
          className={popup__input}
          type='text'
          placeholder='Название'
          required={true}
        />
        <Select />
        <Select />
        <input
          className={popup__input}
          type='date'
          placeholder='Дата создания'
          required={true}
        />
        <Select />
      </div>
      <div className={popup__containerNext}>
        <SubmitButton
          title={POPUP_DATA.next}
          onClick={next}
          backgroundColor='white'
          color='#000000'
          borderColor='#2B2D33'
        />
      </div>
    </div>
  )
}
