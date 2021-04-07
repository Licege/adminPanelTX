import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { newsAPI } from '../api/api'

export const createNewNews = createAsyncThunk(
  'news/postNews',
  async (news) => {
      const response = await newsAPI.postNews(news)
      return response.data
  }
)

export const getNews = createAsyncThunk(
  'news/fetchAllNews',
  async () => {
      const response = await newsAPI.getNews()
      return response.data
  }
)

export const getCurrentNews = createAsyncThunk(
  'news/getNewsById',
  async (id) => {
      const response = await newsAPI.getCurrentNews(id)
      return response.data
  }
)

export const updateNews = createAsyncThunk(
  'news/updateNews',
  async (news, id) => {
      const response = await newsAPI.updateNews(news, id)
      return response.data
  }
)

export const deleteNews = createAsyncThunk(
  'news/deleteNews',
  async (id) => {
      const response = await newsAPI.deleteNews(id)
      return response.data
  }
)

const newsSlice = createSlice({
    name: 'news',
    initialState: {
        news: [],
        totalCount: 0,
        currentNews: null,
        isFetching: false,
    },
    extraReducers: {
        [createNewNews.fulfilled]: (state, action) => {
            state.news.push(action.payload)
        },
        [getNews.fulfilled]: (state, action) => {
            state.news = action.payload.news
            state.totalCount = action.payload.totalCount
        },
        [getCurrentNews.pending]: state => {
            state.isFetching = true
        },
        [getCurrentNews.fulfilled]: (state, action) => {
            state.currentNews = action.payload
            state.isFetching = false
        },
        [getCurrentNews.rejected]: state => {
            state.isFetching = false
        },
        [updateNews.fulfilled]: (state, action) => {
            state.news = state.news.map(n => (n.id === action.currentNews.id ? action.currentNews : n))
        },
        [deleteNews.fulfilled]: (state, action) => {
            state.news = state.news.filter(n => n.id !== action.payload)
        }
    }
})

export default newsSlice.reducer
