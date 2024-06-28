import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { RootStore } from 'src/services/store'
import { ArtType } from 'src/utils/types'
import { getArtsData } from 'src/api/api'

interface StateType {
  arts: ArtType[]
  isLoading: boolean
  error: string | null | unknown
}

const initialState: StateType = {
  arts: [],
  isLoading: false,
  error: null
}

export const fetchArtsData = createAsyncThunk('fetch/arts', getArtsData)

const artsSlice = createSlice({
  name: 'arts',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchArtsData.pending, state => {
        state.isLoading = true
      })
      .addCase(fetchArtsData.fulfilled, (state, action) => {
        state.arts = action.payload
        state.isLoading = false
        state.error = null
      })
      .addCase(fetchArtsData.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.error.message
      })
  }
})

export const artsReducer = artsSlice.reducer;
export const selectArts = (state: RootStore) => state.arts
