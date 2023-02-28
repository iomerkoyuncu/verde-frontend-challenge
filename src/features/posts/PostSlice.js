import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

axios
  .get("https://jsonplaceholder.typicode.com/posts?userId=1")
  .then((response) => {
    localStorage.setItem("posts", JSON.stringify(response.data));
  });

const response = JSON.parse(localStorage.getItem("posts"));

const initialState = {
  posts: response,
  loading: false,
};

export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.posts.push(action.payload);
    },
    deletePost: (state, action) => {
      state.posts = state.posts.filter((post) => post.id !== action.payload);
    },
    updatePost: (state, action) => {
      state.posts = state.posts.map((post) =>
        post.id === action.payload.id ? action.payload : post
      );
    },
  },
});

export const { addPost, deletePost, updatePost } = postSlice.actions;
export default postSlice.reducer;
