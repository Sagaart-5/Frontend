import AboutAuthor from 'src/components/AboutAuthor/AboutAuthor'
import AboutPicture from 'src/components/AboutPicture/AboutPicture'
import ImageContainer from 'src/components/ImageContainer/ImageContainer'
import NavBar from 'src/components/NavBar/NavBar'
import styles from 'src/pages/ArtPage/ArtPage.module.scss'

const ArtPage = () => {
  return (
    <main className={styles.art}>
      <NavBar />
      <div className={styles.wrapper}>
        <ImageContainer />
        <AboutPicture />
      </div>
      <AboutAuthor />
      <div style={{ height: '420px' }}>
        <h1>Работы художника</h1>
      </div>
    </main>
  )
}

export default ArtPage
