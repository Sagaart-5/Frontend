import { FC } from 'react'
import { Link } from 'react-router-dom'
import { ArtType } from 'src/utils/types'
import CartIcon from 'src/assets/images/icons/cart.svg'
import styles from './Art.module.scss'

interface ArtProps {
  data: ArtType
  isPriceShown?: boolean
  hasHover?: boolean
}

const Art: FC<ArtProps> = ({ data, isPriceShown = true, hasHover = false }) => {
  return (
    <Link to={`/art/${data.id}`} className={styles.link}>
      <article className={styles.art}>
        <div className={styles.picture}>
          <img src={data.image} alt={data.title} className={styles.pic} />
        </div>
        <h3 className={styles.title}>{data.title}</h3>
        <p className={styles.author}>{data.author}</p>
        {hasHover && <div className={styles.info}></div>}
        {isPriceShown && (
          <p className={styles.price}>
            <span>{`${data.price} руб.`}</span>
            <div className={styles.cart}>
              <CartIcon />
            </div>
          </p>
        )}
      </article>
    </Link>
  )
}

export default Art
