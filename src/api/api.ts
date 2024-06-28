import { EventType, ArtType } from '../utils/types'
import { mockEventsData } from 'src/utils/mock/mockEventsData'
import { mockArtsData } from 'src/utils/mock/mockArtsData'

export const getEventsData = async () => {
  //events from server
  const eventsDataFromServer: Array<EventType> = mockEventsData
  const res = await Promise.resolve(eventsDataFromServer)

  return res
}

export const getArtsData = async () => {
  //arts from server
  const artsDataFromServer: Array<ArtType> = mockArtsData
  const res = await Promise.resolve(artsDataFromServer)

  return res
}
