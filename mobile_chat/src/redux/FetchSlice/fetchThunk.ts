import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchPostThunk = createAsyncThunk(
  'fetch/Post',
  async (payload, thunkAPI) => {
    try {
      const res = await fetch('http://localhost:3000/posts');
      const data = await res.json();
      return data;
    } catch {
      return thunkAPI.rejectWithValue('Failed to fetch posts');
    }
  },
);
