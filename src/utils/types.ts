export interface EventType {
  id: number
  title: string
  image: string
  date: string
  link: string
}

export interface ArtType {
  id: number
  title: string
  author: string
  image: string
  price: number
  category?: string
  orientation?: string
  style?: string
  color?: string
  size?: string
  description?: string
  popular?: number
}

export interface AuthorType {
  id: number
  name: string
  image: string
  about: string
  arts: ArtType[]
}
