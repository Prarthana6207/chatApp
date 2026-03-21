import { createSlice } from '@reduxjs/toolkit';

const roomIdSlice = createSlice({
  name: 'roomId',
  initialState: {
    roomId: null,
  },
  reducers: {
    setRoomId: (state, action) => {
      state.roomId = action.payload;
    },
    clearRoomId: state => {
      state.roomId = null;
    },
  },
});

export const { setRoomId, clearRoomId } = roomIdSlice.actions;
export default roomIdSlice.reducer;
