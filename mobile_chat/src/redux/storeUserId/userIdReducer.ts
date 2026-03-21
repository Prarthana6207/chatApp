import { ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { generateUserId } from './userIdThunk';

export const userIdExtraReducers = (builder: ActionReducerMapBuilder<any>) => {
  builder.addCase(generateUserId.fulfilled, (state, action) => {
    state.userId = action.payload;
  });
};
