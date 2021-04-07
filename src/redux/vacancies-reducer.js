import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { vacancyAPI } from '../api/api'

export const requestVacancies = createAsyncThunk(
  'vacancies/fetchAllVacancies',
  async () => {
      const response = await vacancyAPI.getVacancies()
      return response.data
  }
)

export const requestVacancy = createAsyncThunk(
  'vacancies/fetchVacancyById',
  async (id) => {
      const response = await vacancyAPI.getVacancy(id)
      return response.data
  }
)

export const createNewVacancy = createAsyncThunk(
  'vacancies/createVacancy',
  async (vacancy) => {
      const response = await vacancyAPI.createVacancy(vacancy)
      return response.data
  }
)

export const updateVacancy = createAsyncThunk(
  'vacancies/updateVacancy',
  async ({ vacancy, id }) => {
      const response = await vacancyAPI.updateVacancy(vacancy, id)
      return response.data
  }
)

export const deleteVacancy = createAsyncThunk(
  'vacancies/deleteVacancy',
  async (id) => {
      const response = await vacancyAPI.deleteVacancy(id)
      return response.data
  }
)

const vacanciesSlice = createSlice({
    name: 'vacancies',
    initialState: {
        vacancies: [],
        newVacancy: null,
        currentVacancy: null,
        isFetching: false,
    },
    extraReducers: {
        [requestVacancies.pending]: state => {
            state.isFetching = true
        },
        [requestVacancies.fulfilled]: (state, action) => {
            state.vacancies = action.payload
            state.isFetching = false
        },
        [requestVacancies.rejected]: state => {
            state.isFetching = false
        },
        [requestVacancy.fulfilled]: (state, action) => {
            state.currentVacancy = action.payload
        },
        [createNewVacancy.pending]: state => {
            state.isFetching = true
        },
        [createNewVacancy.fulfilled]: (state, action) => {
            state.vacancies.push(action.payload)
            state.isFetching = false
        },
        [createNewVacancy.rejected]: state => {
            state.isFetching = false
        },
        [updateVacancy.fulfilled]: (state, action) => {
            state.vacancies = state.vacancies.map(vacancy => vacancy.id === action.vacancy.id ? action.vacancy : vacancy)
        },
        [deleteVacancy.fulfilled]: (state, action) => {
            state.vacancies = state.vacancies.filter(vacancy => vacancy.id !== action.id)
        }
    }
})

export default vacanciesSlice.reducer
