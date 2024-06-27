import { configureStore } from '@reduxjs/toolkit'
import { eventsReducer } from 'src/services/slices/eventsSlice'

export const store = configureStore({
  reducer: { events: eventsReducer },
  middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false })
})

export type RootStore = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
