export interface EventType {
  id: number
  title: string
  image: string
  date: string
  link: string
}

// export interface ArtType {
//   id: number
//   title: string
//   author: string
//   image: string
//   price: number
//   category?: string
//   orientation?: string
//   style?: string
//   color?: string
//   size?: string
//   description?: string
//   popular?: number
// }

interface ShortArtType {
  id: number
  title: string
  image: string
  price: number
}

export interface ArtType {
  id: number
  title: string
  author: AuthorType | string
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

// interface ShortAuthorType {
//   id: number
//   name: string
//   about: string
//   image: string | null
// }

export interface AuthorType {
  id: number
  name: string
  about: string
  image: string | null
  arts: ShortArtType[]
}

// export interface LongArtType {
//   id: number
//   title: string
//   author: string | {
//     id: number
//     name: string
//     about: string
//     image: string | null
//   }
//   image: string
//   price: number
//   category?: string
//   orientation?: string
//   style?: string
//   color?: string
//   size?: string
//   description?: string
//   popular?: number
// }
