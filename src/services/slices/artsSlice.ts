import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { RootStore } from 'src/services/store'
import { getArtsData, getArtById, getAuthorById, getPopularArts } from 'src/services/api'
import { ArtType, AuthorType } from 'src/utils/types'
import { initialArt, initialAuthor } from 'src/services/constants'

interface StateType {
  arts: ArtType[]
  popularArts:  ArtType[]
  art: ArtType | undefined
  author: AuthorType | undefined
  isLoading: boolean
  error: string | null | unknown
}

const initialState: StateType = {
  arts: [],
  popularArts: [],
  art: initialArt,
  author: initialAuthor,
  isLoading: false,
  error: null
}

export const fetchArtsData = createAsyncThunk('fetch/arts', getArtsData)
export const fetchArtById = createAsyncThunk('fetch/art', getArtById)
export const fetchAuthorById = createAsyncThunk('fetch/author', getAuthorById)
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
        state.arts = action.payload
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
      .addCase(fetchAuthorById.pending, state => {
        state.isLoading = true
      })
      .addCase(fetchAuthorById.fulfilled, (state, action) => {
        state.author = action.payload
        state.isLoading = false
        state.error = null
      })
      .addCase(fetchAuthorById.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.error.message
      })
  }
})

export const artsReducer = artsSlice.reducer;
export const selectArts = (state: RootStore) => state.arts
