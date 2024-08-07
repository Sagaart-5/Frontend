import { FC } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ArtType, ShortArtType } from 'src/utils/types'
import { numberWithSpaces } from 'src/utils/utils'
import CartIcon from 'src/assets/images/icons/cart.svg'
import styles from './Art.module.scss'

interface ArtProps {
  data: ArtType | ShortArtType
  isPriceShown?: boolean
  hasHover?: boolean
}

const Art: FC<ArtProps> = ({
  data,
  isPriceShown = false,
  hasHover = false,
}) => {
  const location = useLocation()
  const isArtPage = location.pathname.includes(`/art/${data.id}`)

    return (
    <Link to={`/art/${data.id}`} className={styles.link}>
      <article className={`${styles.art} ${hasHover && styles.hover}`}>
        <div className={styles.picture}>
          <img src={data.image} alt={data.title} className={styles.pic} />
        </div>
        <h3 className={styles.title}>{data.title}</h3>
        {!isArtPage && (
          <p className={styles.author}>
            {data.hasOwnProperty('author') ? data['author'] : ''}
          </p>
        )}
        {hasHover && <div className={styles.info}></div>}
        {isPriceShown && (
          <div className={styles.priceBlock}>
            <p className={styles.price}>{`${numberWithSpaces(
              data.price
            )} руб.`}</p>
            <div className={styles.cart}>
              <CartIcon />
            </div>
          </div>
        )}
      </article>
    </Link>
  )
}

export default Art
