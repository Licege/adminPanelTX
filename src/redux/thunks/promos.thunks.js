import { createAsyncThunk } from '@reduxjs/toolkit'
import { promoAPI } from '../../api/api'

export const requestAllPromos = createAsyncThunk(
  'promos/fetchAllPromos',
  async () => {
    const response = await promoAPI.getPromos()
    return response.data
  }
)

export const requestPromoById = createAsyncThunk(
  'promos/fetchPromoById',
  async (id) => {
    const response = await promoAPI.getPromo(id)
    return response.data
  }
)

export const postPromo = createAsyncThunk(
  'promos/createPromo',
  async (promo) => {
    const response = await promoAPI.postPromo(promo)
    return response.data
  }
)

export const updatePromo = createAsyncThunk(
  'promos/updatePromo',
  async ({ id, promo }) => {
    const response = await promoAPI.updatePromo(promo, id)
    return response.data
  }
)