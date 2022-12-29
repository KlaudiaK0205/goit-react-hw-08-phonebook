import { configureStore } from '@reduxjs/toolkit';
import { contacts } from './contacts';
import { setupListeners } from '@reduxjs/toolkit/query'
import { filterReducer } from './filterSlice';
import  authReducer  from './authSlice';

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    auth: authReducer,
    [contacts.reducerPath]: contacts.reducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(contacts.middleware),
  devTools: true
});

setupListeners(store.dispatch)