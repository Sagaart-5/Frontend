import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { RootStore } from 'src/services/store'
import { getSearchFields } from 'src/services/api'
import { FilterType } from 'src/utils/types'
import { initialFilter } from '../constants'

interface StateType {
  filters: FilterType
  isLoading: boolean
  error: string | null | unknown
}

const initialState: StateType = {
  filters: initialFilter,
  isLoading: false,
  error: null
}

export const fetchSearchFields = createAsyncThunk('fetch/filters', getSearchFields)

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchSearchFields.pending, state => {
        state.isLoading = true
      })
      .addCase(fetchSearchFields.fulfilled, (state, action) => {
        state.filters = action.payload
        state.isLoading = false
        state.error = null
      })
      .addCase(fetchSearchFields.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.error.message
      })
  }
})

export const filtersReducer = filtersSlice.reducer;
export const selectFilters = (state: RootStore) => state.filters
