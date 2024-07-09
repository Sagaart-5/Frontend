import {
  PRICE_DATA,
  // CATEGOTY_DATA,
  // ORIANTATION_DATA,
  // STYLE_DATA,
  // COLOR_DATA,
} from 'src/utils/constants'
import CheckboxItem from 'src/ui/Checkbox/CheckboxItem'
import styles from 'src/components/Filter/Filter.module.scss'

const Filter = ({
  searchFields,
  price,
  setPrice,
  orientation,
  setOrientation,
  category,
  setCategory,
  style,
  setStyle,
  color,
  setColor,
}: any) => {
  console.log('searchFields: ', searchFields)

  return (
    <div className={styles.container}>
      <CheckboxItem
        value={price}
        setValue={setPrice}
        title={'Цена'}
        data={PRICE_DATA}
      />
      {searchFields.categories && (
        <CheckboxItem
          title={'Категория'}
          value={category}
          setValue={setCategory}
          data={searchFields.categories}
        />
      )}
      {searchFields.orientations && (
        <CheckboxItem
          title={'Ориентация'}
          value={orientation}
          setValue={setOrientation}
          data={searchFields.orientations}
        />
      )}
      {searchFields.styles && (
        <CheckboxItem
          title={'Стили'}
          value={style}
          setValue={setStyle}
          data={searchFields.styles}
        />
      )}
      {searchFields.colors && (
        <CheckboxItem
          title={'Цвет'}
          value={color}
          setValue={setColor}
          data={searchFields.colors}
        />
      )}
    </div>
  )
}

export default Filter
