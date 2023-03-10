export const getFilterValue = state => state.filter.value;

export const selectUser = state => state.auth.user;

export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectIsRefreshing = state => state.auth.isRefreshing;

export const selectLoading = state => state.contacts.loading;

export const selectCurrentToken = state => state.auth.token