import { useEffect, useState } from 'react'
import NavBar from 'src/components/NavBar/NavBar'
import Filter from 'src/components/Filter/Filter'
import Art from 'src/components/Art/Art'
import Footer from 'src/components/Footer/Footer'
import styles from 'src/pages/CatalogPage/CatalogPage.module.scss'
import { mockArtsData } from 'src/utils/mock/mockArtsData'
// import * as Api from 'src/services/utils'
// import { limit } from 'src/services/constants'

const CatalogPage = () => {
  // const [arts, setArts] = useState<any>([])
  // const [searchFields, setSearchFields] = useState<any>([])
  const [price, setPrice] = useState<any[]>([])
  const [orientation, setOrientation] = useState<any[]>([])
  const [category, setCategory] = useState<any[]>([])
  const [style, setStyle] = useState<any[]>([])
  const [color, setColor] = useState<any[]>([])
  const [visibleItems, setVisibleItems] = useState(12)

    // useEffect(() => {
  //   Api.getSearchArts(limit, orientation, color, category, style, price)
  //     .then(data => {
  //       setArts(data)
  //       console.log('data: ', data);
  //     })
  //     .catch(error => {
  //       console.error(error)
  //     })
  // }, [limit, orientation, color, category, style, price])

  // useEffect(() => {
  //   getSearchFields()
  //     .then(data => {
  //       setSearchFields(data)
  //     })
  //     .catch(error => {
  //       console.error(error)
  //     })
  // }, [])

  // Фильтрация
  const filterArtData = (data, filters) => {
    return data.filter(art => {
      if (
        (filters.price.length === 0 ||
          filters.price.some(priceRange => {
            const [min, max] = priceRange.split(' - ').map(Number)
            return art.price >= min && art.price <= max
          })) &&
        (filters.orientation.length === 0 ||
          filters.orientation.includes(art.orientation)) &&
        (filters.category.length === 0 ||
          filters.category.includes(art.category)) &&
        (filters.style.length === 0 || filters.style.includes(art.style)) &&
        (filters.color.length === 0 || filters.color.includes(art.color))
      ) {
        return true
      }
      return false
    })
  }

  const filteredArtData = filterArtData(mockArtsData, {
    price,
    orientation,
    category,
    style,
    color,
  })

  // Подгрузка карточек
  const handleScroll = () => {
    const scrollY = window.scrollY
    const windowHeight = window.innerHeight
    const documentHeight = document.documentElement.scrollHeight
    if (scrollY + windowHeight >= documentHeight - 400) {
      setVisibleItems(prev => Math.min(prev + 4, filteredArtData.length))
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  
  return (
    <>
      <main className={styles.main}>
        <NavBar />
        <section className={styles.catalog}>
          <Filter
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
            {filteredArtData.slice(0, visibleItems).map(art => (
              <li key={art.id} className={styles.item}>
                <Art data={art} isPriceShown={true} />
              </li>
            ))}
          </ul>
          {/* <ul className={styles.grid}>
            {arts.results &&
              arts.results.map(art => (
                <li key={art.id} className={styles.item}>
                  <Art data={art} isPriceShown={true} />
                </li>
              ))}
          </ul> */}
        </section>
      </main>
      <Footer />
    </>
  )
}

export default CatalogPage
