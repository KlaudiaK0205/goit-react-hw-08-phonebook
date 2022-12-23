// import { configureStore } from "@reduxjs/toolkit";
// import { contactReducer, filterReducer } from "./reducer";

// export const store = configureStore({
//     reducer: {
//         contacts: contactReducer,
//         filter: filterReducer,
//   }
// })

import { configureStore } from '@reduxjs/toolkit';
import { contacts } from './contacts';
import { setupListeners } from '@reduxjs/toolkit/query'
import { filterReducer } from './filterSlice';

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    [contacts.reducerPath]: contacts.reducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(contacts.middleware),
});

setupListeners(store.dispatch)