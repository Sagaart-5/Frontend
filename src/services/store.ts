import { configureStore } from '@reduxjs/toolkit'
import { eventsReducer } from 'src/services/slices/eventsSlice'
import { artsReducer } from './slices/artsSlice'

export const store = configureStore({
  reducer: { events: eventsReducer, arts: artsReducer },
  middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false })
})

export type RootStore = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
