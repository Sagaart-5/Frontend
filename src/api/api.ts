import { EventType } from '../utils/types'
import { mockEventsData } from 'src/utils/mock/mockEventsData'

export const getEventsData = async () => {
  //events from server
  const eventsDataFromServer: Array<EventType> = mockEventsData
  const res = await Promise.resolve(eventsDataFromServer)

  return res
}
