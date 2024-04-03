import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { Plant, SearchPlantParams } from "./types"

export const fetchPlant = createAsyncThunk<Plant[], SearchPlantParams>('pizza/fetchPlantStatus', async (params) => {
  const { currentPage, categoryType, sortBy, sortRevers } = params

  const { data } = await axios.get(`https://660bc28eccda4cbc75dda413.mockapi.io/plants?page=${currentPage}&limit=12&category=${categoryType}&sortBy=${sortBy}&order=${sortRevers}`)

  return data
},
)

// https://65fab7d13909a9a65b1b4c89.mockapi.io/items?page=${currentPage}&limit=4&${categoryId}&sortBy=${sortBy}&order=${revers}&search=${search}