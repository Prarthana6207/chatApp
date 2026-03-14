import { combineReducers } from '@reduxjs/toolkit';
import fetchPostSlice from './FetchSlice/fetchSlice';
const rootReducer = combineReducers({
  fetchPostSlice,
});

export default rootReducer;
