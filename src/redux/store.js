import { configureStore } from '@reduxjs/toolkit'
import dataSliceReducer from './dataState';

export default configureStore({
  reducer: {
    dataState: dataSliceReducer
  }
})