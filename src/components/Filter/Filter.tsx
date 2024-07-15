// import {
//   PRICE_DATA,
//   ORIANTATION_DATA,
//   STYLE_DATA,
//   COLOR_DATA,
// } from 'src/utils/constants'
import CheckboxItem from 'src/ui/Checkbox/CheckboxItem'
import styles from 'src/components/Filter/Filter.module.scss'
import { mockSearchFields } from 'src/utils/mock/mockSearchFields'

const Filter = ({
  // searchFields,
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

  return (
    <div className={styles.container}>
      <CheckboxItem
        value={price}
        setValue={setPrice}
        title={'Цена'}
        data={mockSearchFields.price}
      />
        <CheckboxItem
          title={'Категория'}
          value={category}
          setValue={setCategory}
          data={mockSearchFields.categories}
        />
        <CheckboxItem
          title={'Ориентация'}
          value={orientation}
          setValue={setOrientation}
          data={mockSearchFields.orientations}
        />
        <CheckboxItem
          title={'Стили'}
          value={style}
          setValue={setStyle}
          data={mockSearchFields.styles}
        />
        <CheckboxItem
          title={'Цвет'}
          value={color}
          setValue={setColor}
          data={mockSearchFields.colors}
        />
    </div>
  )
}

export default Filter
