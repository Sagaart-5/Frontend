import styles from 'src/components/ArtUploadPage/ArtUploadPage.module.scss'
import ArrowDownIcon from 'src/assets/images/icons/arrow-down.svg'
import Button from 'src/ui/Button/Button'

// interface ArtUploadPageProps {
//   next: () => void
// }

const ArtUploadPage = () =>
  // { next }: ArtUploadPageProps
  {
    return (
      <div className={styles.container}>
        <h2 className={styles.tittle}>Узнайте стоимость Арт-объекта</h2>
        <p className={styles.text}>Загрузите фото</p>
        <div className={styles.image}>
          <img src={ArrowDownIcon} alt='иконка стрелки' />
          {/* <Woman /> */}
        </div>
        <Button
          title='Загрузить фото'
          type='button'
          variant='dark'
          //  onClick={next}
        />
      </div>
    )
  }

export default ArtUploadPage
