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
  const { rejectWithValue,getState } = thunkAPI;
  //  const {auth} = getState()
  //  item.userId = auth.id;
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


// update post 
export const updatePost = createAsyncThunk(
  "posts/updatePost",
  async (data, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    const {id,title,description} = data;
    try {
      const res = await fetch(`http://localhost:3005/posts/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          description,
        }),
      });
      return await res.json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

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
  edit:false,
  editpost:{},
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    editToggle: (state) => {
      state.edit = !state.edit;
    },
    editItem: (state, action) => {
      state.editpost = action.payload;
    },
   
  },
  extraReducers: {
    //get posts
    [fetchposts.pending]: (state) => {
      state.loading = true;
      state.error = null;
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
      state.records.push(action.payload);
    },
    [insertPost.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // update posts
    [updatePost.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [updatePost.fulfilled]: (state, action) => {
      state.loading = false;
      state.records = state.records.map((el) =>
        el.id === action.payload.id ? action.payload : el
      );
    },
    [updatePost.rejected]: (state, action) => {
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
      console.log("delete")
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
export const { editToggle, editItem } = postSlice.actions;
