import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './redux/usersSlice.js';
import postsReducer from './redux/postSlice.js';

export const store = configureStore({
  reducer: {
    usersData: usersReducer,
    postsData: postsReducer,
  },
});
