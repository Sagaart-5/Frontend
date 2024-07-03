import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from 'src/services/hooks'
import { fetchArtsData, selectArts } from 'src/services/slices/artsSlice'
import NavBar from 'src/components/NavBar/NavBar'
import Filter from 'src/components/Filter/Filter'
import Art from 'src/components/Art/Art'
import Footer from 'src/components/Footer/Footer'
import styles from './CatalogPage.module.scss'

const CatalogPage = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchArtsData())
  }, [dispatch])

  const { arts } = useAppSelector(selectArts)

  return (
    <>
      <main className={styles.main}>
        <NavBar />
        <section className={styles.catalog}>
          <Filter />
          <ul className={styles.grid}>
            {arts.map(art => (
              <li key={art.id} className={styles.item}>
                <Art data={art} isPriceShown={true} hasHover={true} />
              </li>
            ))}
          </ul>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default CatalogPage
