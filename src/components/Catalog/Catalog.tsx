import styles from 'src/components/Catalog/Catalog.module.scss'
import Filter from 'src/components/Filter/Filter'
import NavBar from '../NavBar/NavBar'

// interface ArtUploadPageProps {
//   next: () => void
// }

const Catalog = () => {
  return (
    <>
    <NavBar />
    <div className={styles.container}>
      <Filter />
      <div>КАТАЛОГ</div>
    </div>
    </>
  )
}

export default Catalog
