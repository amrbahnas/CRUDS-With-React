import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchposts = createAsyncThunk(
  "posts/fetchposts",
  async (_, thunkAPI) => {
    const { rejectWithValue} = thunkAPI;
    try {
      const res = await fetch("http://localhost:3005/posts");
      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState ={
    records: [],
    loading: false,
    error: null
}

const postSlice = createSlice({
  name: "posts",
  initialState,
  extraReducers: {
    //get posts
    [fetchposts.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchposts.fulfilled]: (state, action) => {
      state.loading = false;
      state.error = false;
      // state.records.push([...action.payload]);
      state.records =action.payload;
    },
    [fetchposts.rejected]: (state, action) => {
      state.loading = false;
      state.error=action.payload;
    },


  },
});

export default postSlice.reducer;
