import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from 'src/services/hooks'
import {
  fetchArtsData,
  fetchPopularArts,
  selectArts,
} from 'src/services/slices/artsSlice'
import Art from 'src/components/Art/Art'
import Button from 'src/ui/Button/Button'
import slide1 from 'src/assets/images/bg/intro1.jpg'
import slide2 from 'src/assets/images/bg/intro2.jpg'
import slide3 from 'src/assets/images/bg/intro3.jpg'
import stubSelectCategory from 'src/assets/images/mock/select1.png'
import stubSelectPrice from 'src/assets/images/mock/select2.png'
import styles from './MarketplacePage.module.scss'

const slides = [slide1, slide2, slide3]

const MarketplacePage = () => {
  const [slideIndex, setSlideIndex] = useState(0)
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const { arts, popularArts } = useAppSelector(selectArts)
  const limit = 5

  useEffect(() => {
    dispatch(fetchArtsData(limit))
    dispatch(fetchPopularArts())
  }, [dispatch])

  useEffect(() => {
    const interval = setInterval(() => {
      slideIndex === 2 ? setSlideIndex(0) : setSlideIndex(slideIndex + 1)
    }, 4000)
    return () => clearInterval(interval)
  }, [slideIndex])

  return (
    <main className={styles.marketplace}>
      <section className={styles.banner}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`${styles.bannerSlide} ${
              index === slideIndex && styles.active
            }`}
            style={{
              backgroundImage: `url(${slide})`,
              zIndex: `-${index + 1}`,
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
            <Button title='Найти' variant='dark' />
          </div>
        </div>
      </section>
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Анонсы категорий</h2>
        <ul className={styles.grid}>
          {['Живопись', 'Графика', 'Digital', 'Фотография'].map(
            (category, index) => (
              <li key={index} className={styles.category}>
                {category}
              </li>
            )
          )}
        </ul>
        <Button
          title='Посмотреть все'
          variant='dark'
          onClick={() => navigate('/catalog')}
        />
      </section>
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Каталог</h2>
        <ul className={styles.grid}>
          {arts.map(art => (
            <li key={art.id}>
              <Art data={art} />
            </li>
          ))}
        </ul>
        <Button
          title='Посмотреть все'
          variant='dark'
          onClick={() => navigate('/catalog')}
        />
      </section>
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Популярное</h2>
        <ul className={styles.grid}>
          {popularArts.map(art => (
            <li key={art.id}>
              <Art data={art} />
            </li>
          ))}
        </ul>
        <Button
          title='Посмотреть все'
          variant='dark'
          onClick={() => navigate('/catalog')}
        />
      </section>
    </main>
  )
}

export default MarketplacePage
