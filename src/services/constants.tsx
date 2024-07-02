import { ArtType, AuthorType } from 'src/utils/types'

export const initialArt: ArtType = {
  id: 0,
  author: {
    id: 0,
    name: '',
    about: '',
    image: null,
    arts: [],
  },
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
