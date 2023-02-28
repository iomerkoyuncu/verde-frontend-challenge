import { configureStore } from "@reduxjs/toolkit"
import postSlice from "../features/posts/PostSlice"

export const store = configureStore({
  reducer: {
    posts: postSlice,
  },
})
