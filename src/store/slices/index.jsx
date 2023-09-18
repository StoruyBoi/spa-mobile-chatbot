// store.js
import { configureStore } from '@reduxjs/toolkit';
import userDataReducer from '../slices/UserSlice';

const index = configureStore({
  reducer: {
    userData: userDataReducer,
  },
});

export default index;
