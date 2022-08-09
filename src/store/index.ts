import { configureStore, combineReducers } from '@reduxjs/toolkit';
import addProductReducer from './AddProductStore';
import productReducer from './ProductStore';
import sellerReducer from './SellerStore';

const rootReducer = combineReducers({
  sellerReducer: sellerReducer,
  addProductReducer: addProductReducer,
  productReducer: productReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
