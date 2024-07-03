interface QueryParams {
  limit: string;
  orientation: string;
  color: string;
  category: string;
  style: string;
  price: string;
}

export default function buildQueryString(params: QueryParams): string  {
  const searchParams = new URLSearchParams();

  if (params.limit) {
    searchParams.append('limit', params.limit);
  }

  if (params.orientation) {
    searchParams.append('orientation', params.orientation);
  }

  if (params.color) {
    searchParams.append('color', params.color);
  }

  if (params.category) {
    searchParams.append('category', params.category);
  }

  if (params.style) {
    searchParams.append('style', params.style);
  }

  if (params.price) {
    searchParams.append('price', params.price);
  }

  return searchParams.toString();
}
