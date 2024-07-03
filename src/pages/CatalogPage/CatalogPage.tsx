import { useEffect, useState } from 'react'
import NavBar from 'src/components/NavBar/NavBar'
import Filter from 'src/components/Filter/Filter'
import Art from 'src/components/Art/Art'
import Footer from 'src/components/Footer/Footer'
import styles from 'src/pages/CatalogPage/CatalogPage.module.scss'
import * as Api from 'src/services/utils'
import { getSearchFields } from 'src/services/api'
import { limit } from 'src/services/constants'

const CatalogPage = () => {
  const [arts, setArts] = useState<any>([])
  const [searchFields, setSearchFields] = useState<any>([])
  const [price, setPrice] = useState('')
  const [orientation, setOrientation] = useState('')
  const [category, setCategory] = useState('')
  const [style, setStyle] = useState('')
  const [color, setColor] = useState('')


  useEffect(() => {
    Api.getSearchArts(limit, orientation, color, category, style, price)
      .then(data => {
        setArts(data)
      })
      .catch(error => {
        console.error(error)
      })
  }, [limit, orientation, color, category, style, price])

  useEffect(() => {
    getSearchFields()
      .then(data => {
        setSearchFields(data)
      })
      .catch(error => {
        console.error(error)
      })
  }, [])

  return (
    <>
      <main className={styles.main}>
        <NavBar />
        <section className={styles.catalog}>
          <Filter
            searchFields={searchFields}
            price={price}
            setPrice={setPrice}
            orientation={orientation}
            setOrientation={setOrientation}
            category={category}
            setCategory={setCategory}
            style={style}
            setStyle={setStyle}
            color={color}
            setColor={setColor}
          />
          <ul className={styles.grid}>
            {arts.results &&
              arts.results.map(art => (
                <li key={art.id} className={styles.item}>
                  <Art data={art} isPriceShown={true} />
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
