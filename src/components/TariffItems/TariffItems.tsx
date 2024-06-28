import styles from 'src/components/TariffItems/TariffItems.module.scss'
import Button from 'src/ui/Button/Button'

interface TariffItemsProps {
  width?: string
}

const TariffItems = ({ width }: TariffItemsProps) => {
  return (
    <div className={styles.container} style={{ width: width }}>
      <p className={styles.mounths}>1 месяц</p>
      <p className={styles.price}>Х руб.</p>
      <p className={styles.info}>Текст с преимуществами тарифа</p>
      <div style={{ margin: '0 auto' }}>
        <Button title={'Подписаться'} variant='dark' extraClass='short' />
      </div>
    </div>
  )
}

export default TariffItems
