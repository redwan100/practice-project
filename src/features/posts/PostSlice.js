import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialPostsState = {
  posts: [],
  isLoading: false,
  post: {},
  error: null,
};

export const dataFetch = createAsyncThunk("posts/dataFetch", async () => {
  const result = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return result.data;
});

export const postDetail = createAsyncThunk("posts/postDetail", async (id) => {
  const result = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  return result.data;
});

export const postDelete = createAsyncThunk("posts/postDelete", async (id) => {
  const result = await axios.delete(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  return result.data;
});

const PostSlice = createSlice({
  name: "posts",
  initialState: initialPostsState,
  extraReducers: (builder) => {
    builder.addCase(dataFetch.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(dataFetch.fulfilled, (state, action) => {
      state.isLoading = false;
      state.posts = action.payload;
      state.error = null;
    });
    builder.addCase(dataFetch.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });

    // POST DETAILS
    builder.addCase(postDetail.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(postDetail.fulfilled, (state, action) => {
      state.isLoading = false;
      state.post = action.payload;
      state.error = null;
    });
    builder.addCase(postDetail.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });

    // POST DELETE
    builder.addCase(postDelete.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(postDelete.fulfilled, (state, action) => {
      state.isLoading = false;
      state.posts = state.posts.filter((item) => item.id !== action.payload);
      state.error = null;
    });
    builder.addCase(postDelete.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export default PostSlice.reducer;
