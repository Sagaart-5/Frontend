import { FC, MouseEvent, useEffect, useRef, useState } from 'react'
import ArtUpload from 'src/components/ArtUpload/ArtUpload'
import ArtForm from 'src/components/ArtForm/ArtForm'
import RegistrationForm from 'src/components/RegistrationForm/RegistrationForm'
import BackIcon from 'src/assets/images/icons/back.svg'
import CloseIcon from 'src/assets/images/icons/close.svg'
import styles from 'src/components/Popup/Popup.module.scss'

interface PopupProps {
  handleOverlayClose: () => void
  setIsRegistrationOpen: (type: boolean) => void
}

const Popup: FC<PopupProps> = ({
  handleOverlayClose,
  setIsRegistrationOpen,
}) => {
  const modalRef = useRef<HTMLDivElement>(null)

  const [currentStep, setCurrentStep] = useState(1)

  const handleNextButtonClick = () => {
    if (currentStep === 1) {
      setCurrentStep(2)
    } else if (currentStep === 2) {
      setCurrentStep(3)
    }
  }

  const handleBackButtonClick = () => {
    if (currentStep === 2) {
      setCurrentStep(1)
    } else if (currentStep === 3) {
      setCurrentStep(2)
    }
  }

  const handlePopupClick = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation()
  }

  const popupClose = () => {
    setIsRegistrationOpen(false)
    unlockScroll()
  }

  const unlockScroll = () => {
    document.body.style.overflow = 'auto'
  }

  useEffect(() => {
    if (modalRef.current) {
      const modal = modalRef.current
      modal.style.display = 'flex'
      modal.style.opacity = '0'
      modal.animate([{ opacity: 0 }, { opacity: 1 }], {
        duration: 400,
        easing: 'ease-in-out',
        fill: 'forwards',
      })
    }
  }, [])

  return (
    <div className={styles.overlay} onClick={handleOverlayClose} ref={modalRef}>
      <div className={styles.popup} onClick={handlePopupClick}>
        <div className={styles.container}>
          <div className={styles.controlls}>
            <div onClick={handleBackButtonClick} className={styles.icon}>
              <BackIcon />
            </div>
            <div onClick={popupClose} className={styles.icon}>
              <CloseIcon />
            </div>
          </div>
          <div className={styles.content}>
            <h2 className={styles.tittle}>Узнайте стоимость Арт-объекта</h2>
            <p className={styles.subtitle}>
              Шаг
              <span className={styles.step}>{currentStep}</span>
            </p>
            {currentStep === 1 && <ArtUpload next={handleNextButtonClick} />}
            {currentStep === 2 && <ArtForm next={handleNextButtonClick} />}
            {currentStep === 3 && (
              <RegistrationForm setIsRegistrationOpen={setIsRegistrationOpen}
                text={
                  'Создайте аккаунт, чтобы мы могли поделиться с Вами результатом оценки'
                }
              />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Popup
