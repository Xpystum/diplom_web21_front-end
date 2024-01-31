import { configureStore, combineReducers , getDefaultMiddleware  } from '@reduxjs/toolkit'
import dataSliceReducer from './dataState';
import sliceUser from './sliceUser';
import sliceChat from './sliceChat';
//redux persist
import { 
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
 } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web


const rootReducer = combineReducers({
  dataState: dataSliceReducer,
  sliceUser: sliceUser,
  sliceChat: sliceChat,
});

// const customizedMiddleware = getDefaultMiddleware({
//   serializableCheck: false
// })

const persistConfig = {
  key: 'user',
  storage,
  blacklist: ['dataState', 'sliceChat'],
  whitelist: ['sliceUser'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
})

export const persistor = persistStore(store);
export default store