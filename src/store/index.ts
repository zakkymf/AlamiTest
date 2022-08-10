import { configureStore, combineReducers } from '@reduxjs/toolkit';
import addProductReducer from './AddProductStore';
import productReducer from './ProductStore';
import sellerReducer from './SellerStore';
import searchReducer from './SearchStore';

const rootReducer = combineReducers({
  sellerReducer: sellerReducer,
  addProductReducer: addProductReducer,
  productReducer: productReducer,
  searchReducer: searchReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
