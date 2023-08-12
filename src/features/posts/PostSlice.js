import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialPostsState = {
  posts: [],
  isLoading: false,
  post: {},
  error: null,
  message: null,
};

// TODO: replace http://localhost:5000/products

export const dataFetch = createAsyncThunk("posts/dataFetch", async () => {
  const result = await axios.get("http://localhost:5000/products");
  return result.data;
});

// TODO: replace with id http://localhost:5000/products
export const postDetail = createAsyncThunk("posts/postDetail", async (id) => {
  const result = await axios.get(`http://localhost:5000/product/${id}`);
  return result.data;
});

// TODO: replace http://localhost:5000/products
export const postDelete = createAsyncThunk("posts/postDelete", async (id) => {
  const result = await axios.delete(
    `http://localhost:5000/product_delete/${id}`
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
      const id = action.meta.arg;
      console.log(action.payload.deletedCount);
      console.log(action.meta.arg);

      state.isLoading = false;

      state.posts = state.posts.filter((item) => item._id !== id);
    });
    builder.addCase(postDelete.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export default PostSlice.reducer;
