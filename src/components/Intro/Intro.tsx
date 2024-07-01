import { useState, useEffect } from 'react'
import { BG_PATH } from 'src/utils/constants'
import Button from 'src/ui/Button/Button'
import styles from './Intro.module.scss'

const slides = ['intro1.jpg', 'intro2.jpg', 'intro3.jpg']

const Intro = () => {
  const [bgIndex, setBgIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      bgIndex === 2 ? setBgIndex(0) : setBgIndex(bgIndex + 1)
    }, 4000)
    return () => clearInterval(interval)
  }, [bgIndex])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    })
  }

  return (
    <>
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`${styles.container} ${
            index === bgIndex && styles.active
          }`}
          style={{
            backgroundImage: `url(${BG_PATH}/${slide})`,
            zIndex: `-${index + 1}`,
          }}
        />
      ))}
      <div className={styles.overlay}>
        <div className={`${styles.content} ${styles.blur}`}>
          <div>
            <h1 className={styles.title}>
              Раскройте подлинную стоимость Арт объектов!
            </h1>
            <Button
              title='Оценить'
              type='button'
              onClick={() => scrollToSection('appraisal')}
            />
          </div>
        </div>
        <div></div>
        <div></div>
        <div className={styles.blur}></div>
        <div></div>
        <div className={styles.blur}></div>
        <div></div>
      </div>
    </>
  )
}

export default Intro