import {createAsyncThunk} from '@reduxjs/toolkit'
import {newsAPI} from '../../api/api'

export const createNewNews = createAsyncThunk(
  'news/postNews',
  async (news) => {
    const response = await newsAPI.postNews(news)
    return response.data
  }
)

export const requestAllNews = createAsyncThunk(
  'news/fetchAllNews',
  async () => {
    const response = await newsAPI.getNews()
    return response.data
  }
)

export const requestNewsById = createAsyncThunk(
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