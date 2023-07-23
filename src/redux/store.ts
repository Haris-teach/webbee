import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {configureStore} from '@reduxjs/toolkit';
import rootReducer from './features';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['machineSlice'],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  devTools: true,
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors

const persistor = persistStore(store);

export {store, persistor};
