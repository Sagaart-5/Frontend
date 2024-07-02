import { FC, useState } from 'react'
import Select from 'src/ui/Select/Select'
import Button from 'src/ui/Button/Button'
import styles from 'src/components/ArtForm/ArtForm.module.scss'

interface ArtFormProps {
  next: () => void
}

const ArtForm: FC<ArtFormProps> = ({ next }) => {
  const [materialValue, setMaterialValue] = useState('')
  const [technologyValue, setTechnologyValue] = useState('')
  const [sizeValue, setSizeValue] = useState('')

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
        <input
          className={styles.input}
          type='text'
          placeholder='Название'
          required={true}
        />
        <Select
          text={'Материал'}
          value={materialValue}
          setValue={setMaterialValue}
        />
        <Select
          text={'Техника исполнения'}
          value={technologyValue}
          setValue={setTechnologyValue}
        />
        <input
          className={styles.input}
          type='date'
          placeholder='Дата создания'
          required={true}
        />
        <Select text={'Размер'} value={sizeValue} setValue={setSizeValue} />
      </form>
      <Button title='Далее' type='button' onClick={next} />
    </div>
  )
}

export default ArtForm
