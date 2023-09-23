// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from '../Redux/CategorySlice';
import productReducer from '../Redux/ProductSlice';

export const store = configureStore({
  reducer: {
    categories : categoryReducer,
    products : productReducer
  }
});
export default store;