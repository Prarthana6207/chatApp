import { createSlice } from '@reduxjs/toolkit';
import { userIdExtraReducers } from './userIdReducer';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    userId: null,
  },
  reducers: {},
  extraReducers: userIdExtraReducers,
});

export default userSlice.reducer;
