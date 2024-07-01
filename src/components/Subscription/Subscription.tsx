import styles from 'src/components/Subscription/Subscription.module.scss'
import Button from 'src/ui/Button/Button'

// interface ArtUploadPageProps {
//   next: () => void
// }

const Subscription = () => {
  return (
    <div className={styles.subscription}>
      <div className={styles.item}>
        <p className={styles.title}>Дествительна до 05.07.2025</p>
        <Button
        className={styles.button}
        title={'Продлить подписку'}/>
      </div>
    </div>
  )
}

export default Subscription
