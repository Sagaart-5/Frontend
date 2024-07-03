import NavBar from 'src/components/NavBar/NavBar'
import AboutAuthor from 'src/components/AboutAuthor/AboutAuthor'
import AboutPicture from 'src/components/AboutPicture/AboutPicture'
import ImageContainer from 'src/components/ImageContainer/ImageContainer'
import Footer from 'src/components/Footer/Footer'
import styles from 'src/pages/ArtPage/ArtPage.module.scss'

const ArtPage = () => {
  return (
    <>
      <main className={styles.main}>
        <NavBar />
        <div className={styles.container}>
          <div className={styles.wrapper}>
            <ImageContainer />
            <AboutPicture />
          </div>
          <AboutAuthor />
          <div style={{ height: '420px', background: 'inherit' }}>
            <h1>Работы художника</h1>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default ArtPage
