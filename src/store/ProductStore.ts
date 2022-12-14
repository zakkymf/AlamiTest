import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { Alert } from 'react-native';
import API from '../config/Api';

interface ProductState {
  loading: boolean;
  data: any;
  search: string;
}

const initialState: ProductState = {
  data: null,
  search: '',
  loading: false,
};

const productSlice = createSlice({
  name: 'productSlice',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProduct.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getProduct.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });
    builder.addCase(getProduct.rejected, (state) => {
      state.loading = false;
    });
  },
});

export const getProduct = createAsyncThunk('getProduct', async (sellerId: number) => {
  const response = await axios.get(`${API.getProduct}?seller_id=${sellerId}`);
  if (response?.data?.code === 200) {
    return response?.data?.data;
  } else {
    Alert.alert('Terjadi Kesalahan', response?.data?.message);
  }
});

export default productSlice.reducer;
