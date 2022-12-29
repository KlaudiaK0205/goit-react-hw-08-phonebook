import { createSlice } from '@reduxjs/toolkit';
import { contacts } from './contacts';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isError: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,

  extraReducers: builder => {
    builder.addMatcher(
      contacts.endpoints.signup.matchFulfilled,
      (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      }
    );
    builder.addMatcher(
      contacts.endpoints.login.matchFulfilled,
      (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      }
    );
    builder.addMatcher(
      contacts.endpoints.login.matchRejected,
      (state, { payload }) => {
        if (payload.status === 400) {
          state.isError = true;
        }
      }
    );
    builder.addMatcher(contacts.endpoints.logout.matchFulfilled, state => {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    });
    builder.addMatcher(
      contacts.endpoints.currentUser.matchFulfilled,
      (state, { payload }) => {
        state.user = payload;
        state.isLoggedIn = true;
      }
    );
  },
});

export default authSlice.reducer;
