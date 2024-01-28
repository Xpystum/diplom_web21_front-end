import { configureStore, combineReducer } from '@reduxjs/toolkit'
import dataSliceReducer from './dataState';

//redux persist
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

import todoReducer from './reducers'

const rootReducer = combineReducer({
  todos: todoReducer,
});

const persistConfig = {
  key: 'user',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: {
    dataState: dataSliceReducer
  }
})

export default store