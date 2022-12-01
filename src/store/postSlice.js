import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";



// get posts
export const fetchposts = createAsyncThunk(
  "posts/fetchposts",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch("http://localhost:3005/posts");
      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);


// insert post
export const insertPost = createAsyncThunk("posts/insertPost",async(item,thunkAPI)=>{
  const { rejectWithValue } = thunkAPI;
  try {
    const res = await fetch("http://localhost:3005/posts",{
      method: "POST",
    body: JSON.stringify(item),
    headers:{
      "content-type": "application/json; charset=UTF-8"
    }
    })
    return await res.json();
  } catch (error) {
    return rejectWithValue(error.message);
  }
})

// delete post
export const deletePost = createAsyncThunk(
  "posts/deletePost",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      await fetch(`http://localhost:3005/posts/${id}`, {
        method: "DELETE",
      });
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  records: [],
  loading: false,
  error: null,
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  extraReducers: {
    //get posts
    [fetchposts.pending]: (state) => {
      state.loading = true;
      state.error =null;
    },
    [fetchposts.fulfilled]: (state, action) => {
      state.loading = false;
      state.error = false;
      // state.records.push([...action.payload]);
      state.records = action.payload;
    },
    [fetchposts.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // insert a new record
    [insertPost.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [insertPost.fulfilled]: (state, action) => {
      state.loading = true;
      state.records.push(action.payload)
    },
    [insertPost.rejected]: (state, action) =>{
      state.loading = false;
      state.error = action.payload;
    },

    // delete posts
    [deletePost.pending]: (state) => {
      state.loading = true;
      state.error = null;

    },
    [deletePost.fulfilled]: (state, action) => {
      state.loading = false;
      state.records = state.records.filter(
        (record) => record.id !== action.payload
      );
    },
    [deletePost.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default postSlice.reducer;
