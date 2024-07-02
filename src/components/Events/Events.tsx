import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from 'src/services/hooks'
import { fetchEventsData, selectEvents } from 'src/services/slices/eventsSlice'
import styles from './Events.module.scss'

const Events = () => {
  const dispatch = useAppDispatch()
  const { events } = useAppSelector(selectEvents)

  useEffect(() => {
    dispatch(fetchEventsData())
  }, [dispatch])

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>События</h1>
      <ul className={styles.list}>
        {events.map(event => (
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
        ))}
      </ul>
    </div>
  )
}

export default Events
