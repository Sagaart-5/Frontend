import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { RootStore } from 'src/services/store'
import { getArtsData, getArtById, getPopularArts } from 'src/services/api'
import { ArtType } from 'src/utils/types'
import { initialArt } from 'src/services/constants'

interface StateType {
  arts: ArtType[]
  popularArts:  ArtType[]
  art: ArtType
  isLoading: boolean
  error: string | null | unknown
}

const initialState: StateType = {
  arts: [],
  popularArts: [],
  art: initialArt,
  isLoading: false,
  error: null
}

export const fetchArtsData = createAsyncThunk('fetch/arts', getArtsData)
export const fetchArtById = createAsyncThunk('fetch/art', getArtById)
export const fetchPopularArts = createAsyncThunk('fetch/popular', getPopularArts)

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
        state.arts = action.payload.results
        state.isLoading = false
        state.error = null
      })
      .addCase(fetchArtsData.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.error.message
      })
      .addCase(fetchPopularArts.pending, state => {
        state.isLoading = true
      })
      .addCase(fetchPopularArts.fulfilled, (state, action) => {
        state.popularArts = action.payload
        state.isLoading = false
        state.error = null
      })
      .addCase(fetchPopularArts.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.error.message
      })
      .addCase(fetchArtById.pending, state => {
        state.isLoading = true
      })
      .addCase(fetchArtById.fulfilled, (state, action) => {
        state.art = action.payload
        state.isLoading = false
        state.error = null
      })
      .addCase(fetchArtById.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.error.message
      })
  }
})

export const artsReducer = artsSlice.reducer;
export const selectArts = (state: RootStore) => state.arts
