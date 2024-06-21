import { useEffect, useRef, useState } from 'react'
import { POPUP_DATA } from '../utils/constants'
import Back from './../../assets/back.svg?react'
import Close from './../../assets/close.svg?react'
import styles from './Popup.module.scss'
import PopupArtForm from './PopupArtForm'
import PopupRegistrationForm from './PopupRegistrationForm'
import PopupUpload from './PopupUpload'

interface PopupProps {
  handleOverlayClose: () => void
  setIsRegistrationOpen: (type: boolean) => void
}

export default function PopupCostTwo({
  handleOverlayClose,
  setIsRegistrationOpen,
}: PopupProps) {
  const modalRef = useRef<HTMLDivElement>(null)
  const {
    popup,
    popup__overlay,
    popup__tittle,
    popup__span,
    popup__containerButton,
    popup__subtitle,
    popup__step,
    popup__circleStep,
    popup__containerStep,
  } = styles

  const [currentPopup, setCurrentPopup] = useState(1)

  const handleNextButtonClick = () => {
    if (currentPopup === 1) {
      setCurrentPopup(2)
    } else if (currentPopup === 2) {
      setCurrentPopup(3)
    }
  }

  const handleBackButtonClick = () => {
    if (currentPopup === 2) {
      setCurrentPopup(1)
    } else if (currentPopup === 3) {
      setCurrentPopup(2)
    }
  }

  const handlePopupClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
  }

  function popupClose() {
    setIsRegistrationOpen(false)
  }

  useEffect(() => {
    if (modalRef.current) {
      const modal = modalRef.current
      modal.style.display = 'block'
      modal.style.opacity = '0'
      modal.animate([{ opacity: 0 }, { opacity: 1 }], {
        duration: 400,
        easing: 'ease-in-out',
        fill: 'forwards',
      })
    }
  }, [])

  return (
    <div className={popup__overlay} onClick={handleOverlayClose} ref={modalRef}>
      <div className={popup} onClick={handlePopupClick}>
        <div className={popup__containerButton}>
          <Back onClick={handleBackButtonClick} />
          <Close onClick={popupClose} />
        </div>
        <h2 className={popup__tittle}>
          {POPUP_DATA.titleOne}
          <span className={popup__span}>{POPUP_DATA.titleTwo}</span>
        </h2>
        <div className={popup__containerStep}>
          <p className={popup__subtitle}>{POPUP_DATA.step}</p>
          <div className={popup__circleStep}>
            <p className={popup__step}>{currentPopup}</p>
          </div>
        </div>
        {currentPopup === 1 && <PopupUpload next={handleNextButtonClick} />}
        {currentPopup === 2 && <PopupArtForm next={handleNextButtonClick} />}
        {currentPopup === 3 && <PopupRegistrationForm />}
      </div>
    </div>
  )
}
