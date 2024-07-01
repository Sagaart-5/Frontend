import { FC } from 'react'
import { Link } from 'react-router-dom'
import { ArtType } from 'src/utils/types'
import Art from '../Art/Art'
import styles from './Marketplace.module.scss'

interface MarketplaceProps {
  arts: ArtType[]
}

const Marketplace: FC<MarketplaceProps> = ({ arts }) => {
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
