interface QueryParams {
  category?: string
  style?: string
  orientation?: string
  color?: string
  price?: string
  limit?: string
}

const buildQueryString = (params: QueryParams): string => {
  const searchParams = new URLSearchParams()

  if (params.category) {
    searchParams.append('category', params.category)
  }

  if (params.style) {
    searchParams.append('style', params.style)
  }

  if (params.color) {
    searchParams.append('color', params.color)
  }

  if (params.price) {
    searchParams.append('price', params.price)
  }

  if (params.orientation) {
    searchParams.append('orientation', params.orientation)
  }

  if (params.limit) {
    searchParams.append('limit', params.limit)
  }

  return searchParams.toString()
}

export default buildQueryString
