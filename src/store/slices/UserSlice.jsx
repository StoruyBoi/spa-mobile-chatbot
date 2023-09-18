// userDataSlice.js
import { createSlice } from '@reduxjs/toolkit';

const userDataSlice = createSlice({
  name: 'userData',
  initialState: {
    name: '',
    age: 0,
  },
  reducers: {
    setUserData: (state, action) => {
      state.name = action.payload.name;
      state.age = action.payload.age;
    },
  },
});

export const { setUserData } = userDataSlice.actions;
export default userDataSlice.reducer;
