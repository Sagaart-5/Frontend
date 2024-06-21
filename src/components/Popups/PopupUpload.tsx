import styles from './Popup.module.scss'
import { POPUP_DATA } from '../utils/constants'
import Arrow from './../../assets/arrow-down.svg?react'
import SubmitButton from '../ui/Button/Button'

interface PopupUploadProps {
  next: () => void
}

export default function PopupUpload({ next }: PopupUploadProps) {
  const { popup__text, popup__containerNext, popup__container } = styles
  return (
    <div className={popup__container}>
      <p className={popup__text}>{POPUP_DATA.subtitleUpload}</p>
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Arrow />
      </div>
      <div className={popup__containerNext}>
        <SubmitButton
          title={POPUP_DATA.upload}
          onClick={next}
          backgroundColor='white'
          color='#000000'
          borderColor='#2B2D33'
        />
      </div>
    </div>
  )
}
