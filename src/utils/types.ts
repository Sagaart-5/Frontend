export interface EventType {
  id: number
  title: string
  image: string
  date: string
  link: string
}

interface ShortArtType {
  id: number
  title: string
  image: string
  price: number
}

export interface ArtType {
  id: number
  title: string
  author: any // AuthorType | string
  image: string
  price: number
  category?: string
  orientation?: string
  style?: string
  color?: string
  size?: string
  year?: number
  description?: string
  popular?: number
}

export interface AuthorType {
  id: number
  name: string
  about: string
  image: string | null
  arts: ShortArtType[]
}

export interface FilterType {
  categories: string[]
  styles: string[]
  sizes: string[]
  orientations: string[]
  colors: string[]
}
