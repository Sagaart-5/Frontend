import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from 'src/services/hooks'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode } from 'swiper/modules'
import {
  fetchArtById,
  fetchAuthorById,
  selectArts,
} from 'src/services/slices/artsSlice'
import { initialArt, initialAuthor } from 'src/services/constants'
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
type Swiper = any;

const ArtPage = () => {
  const { id } = useParams()
  const dispatch = useAppDispatch()
  let { art, author } = useAppSelector(selectArts)

  art = typeof art !== 'undefined' ? art : initialArt
  author = typeof author !== 'undefined' ? author : initialAuthor

  useEffect(() => {
    if (id) {
      const parsedId = parseInt(id, 10)
      dispatch(fetchArtById(parsedId))
      dispatch(fetchAuthorById(art.authorId))
    }
  }, [dispatch, id, art])

  const handleBack = () => {
    window.history.back()
  }

  // Свайпер

  const [statusBtnSlide, setStatusBtnSlide] = useState({
    start: true,
    end: false,
  })
  const swiper = React.useRef<Swiper | null>(null);

  const handleDisBtn = () => {
    if (swiper.current && swiper.current.swiper) {
      setStatusBtnSlide({
        start: swiper.current.swiper.isBeginning,
        end: swiper.current.swiper.isEnd,
      })
    }
  }

  const changeSlideBtn = side => {
    if (swiper.current && swiper.current.swiper) {
      side === 'prev'
        ? swiper.current.swiper.slidePrev()
        : side === 'next'
        ? swiper.current.swiper.slideNext()
        : console.log('Слайд не найден')
    }
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
                <p className={styles.author}>{art.author}</p>
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
              <p className={styles.authorTitle}>{author.name}</p>
              <p className={styles.authorDescription}>{author.about}</p>
            </div>
            <div>
              <img
                className={styles.authorPhoto}
                src={author.image ? author.image : ''}
                alt={author.name}
              />
            </div>
          </div>
          <div className={styles.worksBlock}>
            <div className={styles.worksHeadline}>
              <h2 className={styles.worksTitle}>Работы художника</h2>
              <Link to='/catalog' className={styles.worksLink}>
                смотреть все
              </Link>
            </div>
            <button
              style={{ height: '20px', width: '20px', background: 'red' }}
              onClick={() => changeSlideBtn('prev')}
              disabled={statusBtnSlide.start}
            >
              -
            </button>
            <Swiper
              // slidesPerView={5}
              // spaceBetween={48}
              onSlideChange={() => {
                handleDisBtn()
              }}
              tag='ul'
              freeMode={true}
              pagination={{
                clickable: true,
              }}
              modules={[FreeMode]}
              ref={swiper}
              className={styles.swiper}
              breakpoints={{
                1440: {
                  slidesPerView: 5,
                  spaceBetween: 32,
                },
              }}

            >
              {author.arts?.length &&
                author.arts.map(art => (
                  <SwiperSlide key={art.id}>
                    <Art data={art} isPriceShown={true} />
                  </SwiperSlide>
                ))}
            </Swiper>
            <button
              onClick={() => changeSlideBtn('next')}
              style={{ height: '20px', width: '20px', background: 'black' }}
              disabled={statusBtnSlide.end}
            >
              -
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default ArtPage
