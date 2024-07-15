// type RequestOptionsType = RequestInit & {
//   headers: Record<string, string>
// }

export const BASE_URL = 'https://sagaart5.hopto.org/api/v1'

// export const checkResponse = (response: Response) => {
//   if (response.ok) {
//     return response.json()
//   }
//   return response
//     .json()
//     .then(response => Promise.reject(`Ошибка ${response.status}`))
// }

// const request = (endpoint: string, options?: RequestOptionsType) =>
//   fetch(`${BASE_URL}${endpoint}`, options).then(checkResponse)

// export const getEventsData = async () => await request('/events')
// export const getArtsData = async (limit?: number) =>
//   await request(`/arts${limit ? `/?limit=${limit}` : ''}`)
// export const getPopularArts = async () => await request('/arts/most_popular')
// export const getArtById = async (id: number) => await request(`/arts/${id}`)
// export const getSearchFields = async () =>
//   await request('/arts/art_search_fields')

import { mockEventsData } from 'src/utils/mock/mockEventsData'
import { mockArtsData } from 'src/utils/mock/mockArtsData'
import { mockAuthorsData } from 'src/utils/mock/mockAuthorsData'
import { mockSearchFields } from 'src/utils/mock/mockSearchFields'
import { EventType, ArtType, AuthorType, FilterType } from 'src/utils/types'
import { shuffle } from 'src/utils/utils'

export const getEventsData = async () => {
  const eventsDataFromServer: Array<EventType> = mockEventsData
  const res = await Promise.resolve(eventsDataFromServer)

  return res
}

export const getArtsData = async (limit?: number) => {
  const artsDataFromServer: Array<ArtType> = shuffle(mockArtsData)
  const res = await Promise.resolve(
    !!limit ? artsDataFromServer.slice(0, limit) : artsDataFromServer
  )

  return res
}

export const getPopularArts = async (limit?: number) => {
  const artsDataFromServer: Array<ArtType> = mockArtsData
  const sortedArtsData = artsDataFromServer.sort(
    (a, b) => b.popular - a.popular
  )
  const res = await Promise.resolve(
    !!limit ? sortedArtsData.slice(0, limit) : sortedArtsData
  )

  return res
}

export const getArtById = async (id: number) => {
  const artsDataFromServer: Array<ArtType> = mockArtsData
  const res = await Promise.resolve(
    artsDataFromServer.find(element => element.id === id)
  )

  return res
}

export const getAuthorById = async (id: number) => {
  const authorsDataFromServer: Array<AuthorType> = mockAuthorsData
  const res = await Promise.resolve(
    authorsDataFromServer.find(element => element.id === id)
  )

  return res
}

export const getSearchFields = async () => {
  const searchFields: FilterType = mockSearchFields
  const res = await Promise.resolve(searchFields)

  return res
}
