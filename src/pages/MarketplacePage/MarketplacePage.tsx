import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from 'src/services/hooks'
import {
  fetchArtsData,
  fetchPopularArts,
  selectArts,
} from 'src/services/slices/artsSlice'
import NavBar from 'src/components/NavBar/NavBar'
import Banner from 'src/components/Banner/Banner'
import Art from 'src/components/Art/Art'
import Button from 'src/ui/Button/Button'
import Footer from 'src/components/Footer/Footer'
import styles from './MarketplacePage.module.scss'

const MarketplacePage = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const { arts, popularArts } = useAppSelector(selectArts)
  const limit = 5

  useEffect(() => {
    dispatch(fetchArtsData(limit))
    dispatch(fetchPopularArts(limit))
  }, [dispatch])

  console.log('arts: ', arts)
  console.log('popularArts: ', popularArts)

  return (
    <>
      <main className={styles.marketplace}>
        <NavBar />
        <div className={styles.container}>
          <Banner />
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Анонсы категорий</h2>
            <ul className={styles.categories}>
              {['Живопись', 'Графика', 'Digital', 'Фотография'].map(
                (category, index) => (
                  <li key={index} className={styles.category}>
                    <div className={styles.categoryOverlay}>
                      <p className={styles.categoryTitle}>{category}</p>
                    </div>
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
        </div>
      </main>
      <Footer />
    </>
  )
}

export default MarketplacePage
