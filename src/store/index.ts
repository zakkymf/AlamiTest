import {configureStore, combineReducers} from '@reduxjs/toolkit';
import sellerReducer from './SellerStore';

const rootReducer = combineReducers({
  sellerReducer: sellerReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
