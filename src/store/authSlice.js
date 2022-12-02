import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: "auth",
  initialState: { id: 5 },
});

export default authSlice.reducer;

