import { createAsyncThunk } from '@reduxjs/toolkit';
import uuid from 'react-native-uuid';
import { getItem, setItem } from 'storage/mmkv';

export const generateUserId = createAsyncThunk(
  'user/generateUserId',
  async () => {
    let userId = getItem('userId');

    if (!userId) {
      userId = uuid.v4();
      setItem('userId', userId);
    }

    return userId;
  },
);
