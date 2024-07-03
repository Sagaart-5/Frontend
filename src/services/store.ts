import { configureStore } from '@reduxjs/toolkit'
import { eventsReducer } from 'src/services/slices/eventsSlice'
import { artsReducer } from './slices/artsSlice'
import { filtersReducer } from './slices/filtersSlice'

export const store = configureStore({
  reducer: { events: eventsReducer, arts: artsReducer, filters: filtersReducer },
  middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false })
})

export type RootStore = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
