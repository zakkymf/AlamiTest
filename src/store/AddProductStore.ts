import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { Alert } from 'react-native';
import Toast from 'react-native-toast-message';
import API from '../config/Api';

interface AddProductState {
  id: string;
  nama: string;
  satuan: string;
  harga: string;
  deskripsi: string;
  loading: boolean;
  data: any;
}

const initialState: AddProductState = {
  id: '',
  nama: '',
  satuan: '',
  harga: '',
  deskripsi: '',
  data: null,
  loading: false,
};

const addProductSlice = createSlice({
  name: 'addProductSlice',
  initialState: initialState,
  reducers: {
    setState: (state: any, action: any) => {
      state[action.payload?.key] = action.payload?.value;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addProduct.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addProduct.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });
    builder.addCase(addProduct.rejected, (state) => {
      state.loading = false;
    });
  },
});

export const addProduct = createAsyncThunk('addProduct', async (params: any) => {
  const data = {
    sellerId: Number(params.id),
    nama: params.nama,
    deskripsi: params.deskripsi,
    hargaSatuan: Number(params.harga),
    satuan: params.satuan,
  };
  const response = await axios.post(API.addProduct, data);
  if (response?.data?.code === 200) {
    params.navigation.navigate('ProductList');
    Toast.show({
      type: 'success',
      text1: 'Berhasil',
      text2: 'Sukses menambahkan Seller',
    });
    return response?.data?.data;
  } else {
    Alert.alert('Terjadi Kesalahan', response?.data?.message);
  }
});

export const { setState } = addProductSlice.actions;
export default addProductSlice.reducer;
