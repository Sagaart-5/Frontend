import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from 'src/services/hooks'
import { fetchEventsData, selectEvents } from 'src/services/slices/eventsSlice'
import styles from './Events.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Pagination } from 'swiper/modules'
import Left from 'src/assets/images/icons/Left.svg'
import Right from 'src/assets/images/icons/Right.svg'
type Swiper = any

const Events = () => {
  const dispatch = useAppDispatch()
  const { events } = useAppSelector(selectEvents)

  useEffect(() => {
    dispatch(fetchEventsData())
  }, [dispatch])

  // Свайпер

  const swiper = React.useRef<Swiper | null>(null)

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
    <div className={styles.container}>
      <h1 className={styles.title}>События</h1>
      <button
        className={`${styles.button} ${styles.buttonLeft}`}
        onClick={() => changeSlideBtn('prev')}
      >
        <Left />
      </button>
      <button
        className={`${styles.button} ${styles.buttonRight}`}
        onClick={() => changeSlideBtn('next')}
      >
        <Right />
      </button>
      <div className={`${styles.shadow} ${styles.shadowLeft}`}></div>
      <div className={`${styles.shadow} ${styles.shadowRight}`}></div>
      <Swiper
        tag='ul'
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        ref={swiper}
        className={styles.list}
        loop={events.length > 1}
        breakpoints={{
          1440: {
            slidesPerView: 5,
            spaceBetween: 36,
          },
        }}
      >
        {events?.length &&
          events.map(event => (
            <SwiperSlide key={event.id}>
              <li key={event.id} className={styles.item}>
                <Link to={event.link} target='_blank' className={styles.link}>
                  <div className={styles.picture}>
                    <img
                      src={event.image}
                      alt={event.title}
                      className={styles.pic}
                    />
                  </div>
                  <h3 className={styles.name}>{event.title}</h3>
                  <p className={styles.date}>{event.date}</p>
                </Link>
              </li>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  )
}

export default Events
