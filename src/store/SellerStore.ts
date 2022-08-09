import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import API from '../config/Api';

interface SellerState {
  nama: string;
  kota: string;
  loading: boolean;
  data: any;
}

const initialState: SellerState = {
  nama: '',
  kota: '',
  data: null,
  loading: false,
};

const sellerSlice = createSlice({
  name: 'sellerSlice',
  initialState: initialState,
  reducers: {
    setName: (state, action) => {
      state.nama = action.payload;
    },
    setCity: (state, action) => {
      state.kota = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addSeller.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addSeller.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });
    builder.addCase(addSeller.rejected, (state) => {
      state.loading = false;
    });
  },
});

export const addSeller = createAsyncThunk('addSeller', async (data: any) => {
  console.log(data);
  const response = await axios.post(API.addSeller, data);
  console.log(response);
  return response?.data;
});

export const { setName, setCity } = sellerSlice.actions;
export default sellerSlice.reducer;
