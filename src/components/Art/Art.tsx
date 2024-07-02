import { FC } from 'react'
import { Link } from 'react-router-dom'
import { ArtType } from 'src/utils/types'
import { numberWithSpaces } from 'src/utils/utils'
import CartIcon from 'src/assets/images/icons/cart.svg'
import styles from './Art.module.scss'

interface ArtProps {
  receivedById?: boolean
  data: ArtType
  isPriceShown?: boolean
  hasHover?: boolean
}

const Art: FC<ArtProps> = ({
  receivedById = false,
  data,
  isPriceShown = false,
  hasHover = false,
}) => {
  return (
    <Link to={`/marketplace/catalog/art/${data.id}`} className={styles.link}>
      <article className={`${styles.art} ${hasHover && styles.hover}`}>
        <div className={styles.picture}>
          <img src={data.image} alt={data.title} className={styles.pic} />
        </div>
        <h3 className={styles.title}>{data.title}</h3>
        <p className={styles.author}>
          {receivedById
            ? `${typeof data.author === 'object' && data.author.name}`
            : `${data.author}`}
        </p>
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
