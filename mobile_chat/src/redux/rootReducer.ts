import { combineReducers } from '@reduxjs/toolkit';
import fetchPostSlice from './FetchSlice/fetchSlice';
import userSlice from './storeUserId/userIdSlice';
const rootReducer = combineReducers({
  fetchPostSlice,
  user: userSlice,
});

export default rootReducer;
