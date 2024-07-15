// import { BASE_URL } from 'src/services/api'

// interface QueryParams {
//   category?: string
//   style?: string
//   orientation?: string
//   color?: string
//   price?: string
//   limit?: string
// }

// const buildQueryString = (params: QueryParams): string => {
//   const searchParams = new URLSearchParams()

//   if (params.category) {
//     searchParams.append('category', params.category)
//   }

//   if (params.style) {
//     searchParams.append('style', params.style)
//   }

//   if (params.color) {
//     searchParams.append('color', params.color)
//   }

//   if (params.price) {
//     searchParams.append('price', params.price)
//   }

//   if (params.orientation) {
//     searchParams.append('orientation', params.orientation)
//   }

//   if (params.limit) {
//     searchParams.append('limit', params.limit)
//   }

//   return searchParams.toString()
// }

// export default buildQueryString

// const getResponseData = (res: Response) => {
//   if (!res.ok) {
//     return Promise.reject(`Ошибка: ${res.status}`)
//   }
//   return res.json()
// }

// export const getSearchArts = (
//   limit: string,
//   orientation: any[],
//   color: any[],
//   category: any[],
//   style: any[],
//   price: any[]
// ) => {
//   return fetch(
//     `${BASE_URL}/arts/?${buildQueryString({
//       limit,
//       orientation: orientation.join(','),
//       color: color.join(','),
//       category: category.join(','),
//       style: style.join(','),
//       price: price.join(','),
//     })}`,
//     {
//       method: 'GET',
//     }
//   ).then(getResponseData)
// }
