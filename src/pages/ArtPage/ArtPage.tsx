import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from 'src/services/hooks'
import { fetchArtById, selectArts } from 'src/services/slices/artsSlice'
import { numberWithSpaces } from 'src/utils/utils'
import NavBar from 'src/components/NavBar/NavBar'
import Button from 'src/ui/Button/Button'
import Art from 'src/components/Art/Art'
import EyeIcon from 'src/assets/images/icons/eye.svg'
import UpIcon from 'src/assets/images/icons/up.svg'
import BackIcon from 'src/assets/images/icons/arrow-left.svg'
import MetkaIcon from 'src/assets/images/icons/metka.svg'
import ShopIcon from 'src/assets/images/icons/shop.svg'
import Footer from 'src/components/Footer/Footer'
import styles from 'src/pages/ArtPage/ArtPage.module.scss'

const ArtPage = () => {
  const { id } = useParams()
  const dispatch = useAppDispatch()
  const { art } = useAppSelector(selectArts)

  useEffect(() => {
    if (id) {
      const parsedId = parseInt(id, 10)
      dispatch(fetchArtById(parsedId))
    }
  }, [dispatch, id])

  const handleBack = () => {
    window.history.back()
  }
  return (
    <>
      <main className={styles.main}>
        <NavBar />
        <div className={styles.container}>
          <div className={styles.aboutArt}>
            <div className={styles.artContainer}>
              <div className={styles.artsWrapper}>
                <div className={`${styles.smallArtContainer} ${styles.active}`}>
                  <img
                    className={styles.smallPicture}
                    src={art.image}
                    alt={art.title}
                  />
                </div>
                <div className={styles.smallArtContainer}>
                  <img
                    className={styles.smallPicture}
                    src={art.image}
                    alt={art.title}
                  />
                </div>
                <div className={styles.smallArtContainer}>
                  <img
                    className={styles.smallPicture}
                    src={art.image}
                    alt={art.title}
                  />
                </div>
              </div>
              <div className={styles.largeArtContainer}>
                <img
                  className={styles.largePicture}
                  src={art.image}
                  alt={art.title}
                />
                <div className={styles.artTextContainer}>
                  <div className={styles.artTextContainerItem}>
                    <EyeIcon />
                    <p className={styles.artText}>Вид в комнате</p>
                  </div>
                  <div className={styles.artTextContainerItem}>
                    <UpIcon />
                    <p className={styles.artText}>Делиться</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.aboutContainer}>
              <button onClick={handleBack} className={styles.backButton}>
                <BackIcon />
                <span className={styles.backText}>Назад</span>
              </button>
              <div className={styles.underline}>
                <h2 className={styles.title}>{art.title}</h2>
                <p className={styles.author}>
                  {typeof art.author === 'object' && art.author.name}
                </p>
                <p className={styles.params}>{`${art.style}, ${art.year}`}</p>
                <p className={styles.params}>{art.category}</p>
                <p className={styles.params}>{art.size}</p>
                <p className={styles.description}>{art.description}</p>
              </div>
              <p className={styles.price}>{`${numberWithSpaces(
                art.price
              )} руб`}</p>
              <div className={styles.deliveryBlock}>
                <div className={styles.deliveryRow}>
                  <MetkaIcon />
                  <p className={styles.deliveryText}>Доставка из Москвы</p>
                </div>
                <div className={styles.deliveryRow}>
                  <ShopIcon />
                  <p className={styles.deliveryText}>
                    Ожидается доставка в течение 3–7 дней
                  </p>
                </div>
              </div>
              <div className={styles.buttons}>
                <Button title='Добавить в корзину' variant='dark' />
                <Button title='Посмотреть аналитику' />
              </div>
            </div>
          </div>
          <div className={styles.aboutAuthor}>
            <div className={styles.authorContainer}>
              <p className={styles.authorHint}>о художнике:</p>
              <p className={styles.authorTitle}>
                {typeof art.author === 'object' && art.author.name}
              </p>
              <p className={styles.authorDescription}>
                {typeof art.author === 'object' && art.author.about}
              </p>
            </div>
            <div>
              {art.author && typeof art.author === 'object' && (
                <img
                  className={styles.authorPhoto}
                  src={art.author.image ? art.author.image : ''}
                  alt={art.author.name ? art.author.name : ''}
                />
              )}
            </div>
          </div>
          <div className={styles.worksBlock}>
            <div className={styles.worksHeadline}>
              <h2 className={styles.worksTitle}>Работы художника</h2>
              <Link to='/catalog' className={styles.worksLink}>
                смотреть все
              </Link>
            </div>
            <ul className={styles.grid}>
              {typeof art.author === 'object' &&
                art.author.arts.slice(0, 5).map((art, index) => (
                  <li key={index}>
                    <Art data={art} />
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default ArtPage
