import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import PostService from "./PostService";

export const getPosts = createAsyncThunk("posts/getPosts", async () => {
  const response = await PostService.getPosts();
  return response.data;
});

export const postSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
  },
  reducers: {
    posts: (state, action) => {
      state.posts = action.payload;
    }
  },
});


export default postSlice.reducer;
