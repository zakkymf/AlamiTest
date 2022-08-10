import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { Alert } from 'react-native';
import API from '../config/Api';

interface SearchState {
  loading: boolean;
  data: any;
  search: string;
}

const initialState: SearchState = {
  data: null,
  search: '',
  loading: false,
};

const searchSlice = createSlice({
  name: 'productSlice',
  initialState: initialState,
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setData: (state, action) => {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(search.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(search.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });
    builder.addCase(search.rejected, (state) => {
      state.loading = false;
    });
  },
});

export const search = createAsyncThunk('searchProduct', async (query: string) => {
  const response = await axios.get(`${API.search}?keyword=${query}`);
  if (response?.data?.code === 200) {
    return response?.data?.data;
  } else {
    Alert.alert('Terjadi Kesalahan', response?.data?.message);
  }
});

export const { setSearch, setData } = searchSlice.actions;
export default searchSlice.reducer;
