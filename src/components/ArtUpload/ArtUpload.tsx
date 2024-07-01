import { FC } from 'react'
import ArrowDownIcon from 'src/assets/images/icons/arrow-down.svg'
import Button from 'src/ui/Button/Button'
import styles from './ArtUpload.module.scss'

interface ArtUploadProps {
  next: () => void
}

const ArtUpload: FC<ArtUploadProps> = ({ next }) => {
  return (
    <div className={styles.container}>
      <p className={styles.text}>Загрузите фото</p>
      <div className={styles.image}>
        <ArrowDownIcon />
      </div>
      <Button title='Загрузить фото' type='button' onClick={next} />
    </div>
  )
}

export default ArtUpload
