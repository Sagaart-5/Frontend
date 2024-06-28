export interface EventType {
  id: number
  title: string
  image: string
  date: string
  link: string
}

export interface ArtType {
  id: number
  author: string
  title: string
  image: string
  size: string
  price: number
  category: string
  orientation: string
  style: string
  color: string
  popular?: number
}
