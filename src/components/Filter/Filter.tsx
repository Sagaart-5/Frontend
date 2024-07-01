import styles from 'src/components/Filter/Filter.module.scss'
import CheckboxItem from 'src/ui/Checkbox/CheckboxItem'
import {
  checkboxPrices,
  checkboxCategory,
  checkboxOrientation,
  checkboxStyle,
  checkboxColor,
} from 'src/utils/constants'

const Filter = () => {
  return (
    <div className={styles.container}>
      <CheckboxItem title={'Цена'} data={checkboxPrices} />
      <CheckboxItem title={'Категория'} data={checkboxCategory} />
      <CheckboxItem title={'Ориентация'} data={checkboxOrientation} />
      <CheckboxItem title={'Стили'} data={checkboxStyle} />
      <CheckboxItem title={'Цвет'} data={checkboxColor} />
    </div>
  )
}

export default Filter
