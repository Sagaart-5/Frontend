import { useState, useEffect } from 'react'
import Button from 'src/ui/Button/Button'
import stubSelectCategory from 'src/assets/images/mock/select1.png'
import stubSelectPrice from 'src/assets/images/mock/select2.png'
import slide1 from 'src/assets/images/bg/intro1.jpg'
import slide2 from 'src/assets/images/bg/intro2.jpg'
import slide3 from 'src/assets/images/bg/intro3.jpg'
import styles from './Banner.module.scss'

const slides = [slide1, slide2, slide3]

const Banner = () => {
  const [slideIndex, setSlideIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      slideIndex === 2 ? setSlideIndex(0) : setSlideIndex(slideIndex + 1)
    }, 4000)
    return () => clearInterval(interval)
  }, [slideIndex])

  return (
    <section className={styles.banner}>
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`${styles.bannerSlide} ${
            index === slideIndex && styles.active
          }`}
          style={{
            backgroundImage: `url(${slide})`,
            zIndex: `${index}`,
          }}
        />
      ))}
      <h1 className={styles.bannerTitle}>
        Каталог объектов искусства с аналитикой по ценам
      </h1>
      <div className={styles.bannerBlock}>
        <h2 className={styles.bannerSubtitle}>
          Покупайте современное искусство
        </h2>
        <p className={styles.bannerText}>просто и безопасно</p>
        <div className={styles.bannerFilters}>
          <img
            src={stubSelectCategory}
            alt='Заглушка фильтра категории'
            className={styles.bannerSelect}
          />
          <img
            src={stubSelectPrice}
            alt='Заглушка фильтра цены'
            className={styles.bannerSelect}
          />
          <Button
            title='Найти'
            variant='dark'
            extraClass={styles.bannerButton}
          />
        </div>
      </div>
    </section>
  )
}

export default Banner
