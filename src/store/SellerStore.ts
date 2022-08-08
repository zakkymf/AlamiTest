import {createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import API from '../config/Api';

interface SellerState {
  name: string;
  city: string;
  loading: boolean;
  data: any;
}

const initialState: SellerState = {
  name: '',
  city: '',
  data: null,
  loading: false,
};

const sellerSlice = createSlice({
  name: 'sellerSlice',
  initialState: initialState,
  reducers: {
    addSellerPending: state => {
      state.loading = true;
    },
    addSellerSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    addSellerFailure: state => {
      state.loading = false;
    },
    setName: (state, action) => {
      state.name = action.payload;
    },
    setCity: (state, action) => {
      state.city = action.payload;
    },
  },
});

export const addSeller = (data: any) => async (dispatch: any) => {
  try {
    const response = await axios.post(API.addSeller, data);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

export const {setName, setCity} = sellerSlice.actions;
export default sellerSlice.reducer;
