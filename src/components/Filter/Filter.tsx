import { useEffect, useState } from 'react'
import { BASE_URL, getSearchFields } from 'src/services/api'
import buildQueryString from 'src/services/utils'
import { priceData } from 'src/utils/constants'
import CheckboxItem from 'src/ui/Checkbox/CheckboxItem'
import styles from 'src/components/Filter/Filter.module.scss'

const getResponseData = (res: Response) => {
  if (!res.ok) {
    return Promise.reject(`Ошибка: ${res.status}`)
  }
  return res.json()
}

export const getSearchArts = (
  limit: string,
  orientation: string,
  color: string,
  category: string,
  style: string,
  price: string
) => {
  return fetch(
    `${BASE_URL}/arts/?${buildQueryString({
      limit,
      orientation,
      color,
      category,
      style,
      price,
    })}`,
    {
      method: 'GET',
    }
  ).then(getResponseData)
}

const Filter = () => {
  const limit = '12'
  const [price, setPrice] = useState('')
  const [orientation, setOrientation] = useState('')
  const [category, setCategory] = useState('')
  const [style, setStyle] = useState('')
  const [color, setColor] = useState('')

  const [arts, setArts] = useState<any>([])

  useEffect(() => {
    getSearchArts(limit, orientation, color, category, style, price)
      .then(data => {
        setArts(data)
      })
      .catch(error => {
        console.error(error)
      })
  }, [limit, orientation, color, category, style, price])

  const [searchFields, setSearchFields] = useState<any>([])

  useEffect(() => {
    getSearchFields()
      .then(data => {
        setSearchFields(data)
      })
      .catch(error => {
        console.error(error)
      })
  }, [])

  return (
    <div className={styles.container}>
      <CheckboxItem
        value={price}
        setValue={setPrice}
        title={'Цена'}
        data={priceData}
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
