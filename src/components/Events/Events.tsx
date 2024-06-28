import { FC } from 'react'
import { Link } from 'react-router-dom'
import { EventType } from 'src/utils/types'
import styles from './Events.module.scss'

interface EventsProps {
  events: EventType[]
}

const Events: FC<EventsProps> = ({ events }) => {
  return (
    <div className={styles.events}>
      <h1 className={styles.title}>События</h1>
      <ul className={styles.list}>
        {events.map(event => (
          <li key={event.id} className={styles.item}>
            <Link to={event.link} className={styles.link}>
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
