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

export const getSearchArts = (orientation: any) => {
  return fetch(`${BASE_URL}/arts/?${orientation ? 'orientation=' : ''}${orientation ? orientation : ''}`, {
    method: 'GET',
  }).then(getResponseData)
}


const Filter = () => {
  const [checkedItems, setCheckedItems] = useState({})

  // const [price, setPrice] = useState()
  const [orientation, setOrientation] = useState('')
  
  // const [category, setCategory] = useState({})
  // const [style, setStyle] = useState({})
  // const [color, setColor] = useState({})

  const [searchFields, setSearchFields] = useState<any>([])
  const [arts, setArts] = useState<any>([])
  console.log('arts: ', arts)

  useEffect(() => {
    getSearchArts(orientation)
      .then(data => {
        setArts(data)
      })
      .catch(error => {
        console.error(error)
      })
  }, [orientation])

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
        value={checkedItems}
        setValue={setCheckedItems}
        title={'Цена'}
        data={priceData}
      />
      {searchFields.categories && (
        <CheckboxItem
          title={'Категория'}
          value={checkedItems}
          setValue={setCheckedItems}
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
          value={checkedItems}
          setValue={setCheckedItems}
          data={searchFields.styles}
        />
      )}
      {searchFields.colors && (
        <CheckboxItem
          title={'Цвет'}
          value={checkedItems}
          setValue={setCheckedItems}
          data={searchFields.colors}
        />
      )}
    </div>
  )
}

export default Filter
