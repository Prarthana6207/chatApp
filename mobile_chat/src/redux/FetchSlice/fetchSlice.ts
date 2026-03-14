import { createSlice } from '@reduxjs/toolkit';
import { fetchExtraReducers } from './fetchReducer';

const initialState = {
  loading: false,
  error: '',
  posts: {},
};

const fetchPostSlice = createSlice({
  name: 'Post',
  initialState,
  reducers: {},
  extraReducers: fetchExtraReducers,
});

export default fetchPostSlice.reducer;
