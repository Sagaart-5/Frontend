import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from 'src/services/hooks'
import { fetchArtsData, selectArts } from 'src/services/slices/artsSlice'
import Art from '../Art/Art'
import styles from './Marketplace.module.scss'

const Marketplace = () => {
  const dispatch = useAppDispatch()
  const { arts } = useAppSelector(selectArts)
  const limit = 10

  useEffect(() => {
    dispatch(fetchArtsData(limit))
  }, [dispatch])

  return (
    <div className={styles.container}>
      <div className={styles.headline}>
        <h2 className={styles.title}>Маркетплейс</h2>
        <Link to='/marketplace' className={styles.link}>
          смотреть все
        </Link>
      </div>
      <ul className={styles.grid}>
        {arts.map(art => (
          <li key={art.id}>
            <Art data={art} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Marketplace
