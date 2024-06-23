import { FC } from 'react'
import Select from 'src/ui/Select/Select'
import Button from 'src/ui/Button/Button'
import styles from './ArtForm.module.scss'

interface ArtFormProps {
  next: () => void
}

const ArtForm: FC<ArtFormProps> = ({ next }) => {
  return (
    <div className={styles.container}>
      <p className={styles.text}>Немного расскажите об Арт-объекте</p>
      <form className={styles.form}>
        <input
          className={styles.input}
          type='text'
          placeholder='Автор Арт-объекта'
          required={true}
        />
        <input className={styles.input} type='text' placeholder='Название' required={true} />
        <Select />
        <Select />
        <input className={styles.input} type='date' placeholder='Дата создания' required={true} />
        <Select />
      </form>
      <Button title='Далее' type='button' onClick={next} />
    </div>
  )
}

export default ArtForm
