import { ArtType, AuthorType, FilterType } from 'src/utils/types'

export const limit = '55'

export const initialArt: ArtType = {
  id: 0,
  author: '',
  authorId: 0,
  title: '',
  image: '',
  price: 0,
  size: '',
  category: '',
  orientation: '',
  style: '',
  color: '',
  year: 0,
  description: '',
  popular: 0,
}

export const initialAuthor: AuthorType = {
  id: 0,
  name: '',
  about: '',
  image: '',
  arts: [],
}

export const initialFilter: FilterType = {
  price: [],
  categories: [],
  styles: [],
  sizes: [],
  orientations: [],
  colors: [],
}
