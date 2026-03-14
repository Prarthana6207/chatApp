import { ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { fetchPostThunk } from './fetchThunk';

export const fetchExtraReducers = (builders: ActionReducerMapBuilder<any>) => {
  builders.addCase(fetchPostThunk.pending, (state, action) => {
    state.loading = true;
  });
  builders.addCase(fetchPostThunk.fulfilled, (state, action) => {
    state.loading = false;
    state.posts = action.payload;
  });
  builders.addCase(fetchPostThunk.rejected, (state, action) => {
    state.loading = false;
    state.error = action.payload?.toString() || 'Unknown error';
  });
};
