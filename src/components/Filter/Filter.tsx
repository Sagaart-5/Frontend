import { useEffect, useState } from 'react'
import styles from 'src/components/Filter/Filter.module.scss'
import CheckboxItem from 'src/ui/Checkbox/CheckboxItem'
import { priceData } from 'src/utils/constants'
export const BASE_URL = 'http://158.160.171.160:8000/api/v1'

const getResponseData = (res: Response) => {
  if (!res.ok) {
    return Promise.reject(`Ошибка: ${res.status}`)
  }
  return res.json()
}

export const getSearchFields = () => {
  return fetch(`${BASE_URL}/arts/art_search_fields/`, {
    method: 'GET',
  }).then(getResponseData)
}

export const getSearchArts = (
  orientation: string,
  color: string,
  category: string,
  style: string,
  price: string
) => {
  return fetch(
    `${BASE_URL}/arts/?${orientation ? 'orientation=' : ''}${
      orientation ? orientation : ''
    }&${color ? 'color=' : ''}${color ? color : ''}&${
      category ? 'category=' : ''
    }${category ? category : ''}&${style ? 'style=' : ''}${
      style ? style : ''
    }&${price ? 'price=' : ''}${price ? price : ''}`,
    {
      method: 'GET',
    }
  ).then(getResponseData)
}

const Filter = () => {
  const [price, setPrice] = useState('')
  console.log('price: ', price)
  const [orientation, setOrientation] = useState('')

  const [category, setCategory] = useState('')
  console.log('category: ', category)
  const [style, setStyle] = useState('')
  console.log('style: ', style)
  const [color, setColor] = useState('')
  console.log('color: ', color)

  const [searchFields, setSearchFields] = useState<any>([])
  const [arts, setArts] = useState<any>([])
  console.log('arts: ', arts)

  useEffect(() => {
    getSearchArts(orientation, color, category, style, price)
      .then(data => {
        setArts(data)
      })
      .catch(error => {
        console.error(error)
      })
  }, [orientation, color, category, style, price])

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
