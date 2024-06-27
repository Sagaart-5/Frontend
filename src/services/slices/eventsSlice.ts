import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { RootStore } from 'src/services/store'
import { EventType } from 'src/utils/types'
import { getEventsData } from 'src/api/api'

interface StateType {
  events: EventType[]
  isLoading: boolean
  error: string | null | unknown
}

const initialState: StateType = {
  events: [],
  isLoading: false,
  error: null
}

export const fetchEventsData = createAsyncThunk('fetch/events', getEventsData)

const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchEventsData.pending, state => {
        state.isLoading = true
      })
      .addCase(fetchEventsData.fulfilled, (state, action) => {
        state.events = action.payload
        state.isLoading = false
        state.error = null
      })
      .addCase(fetchEventsData.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.error.message
      })
  }
})

export const eventsReducer = eventsSlice.reducer;
export const selectEvents = (state: RootStore) => state.events
