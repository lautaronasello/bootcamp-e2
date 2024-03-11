import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getPostsService } from '../services/posts.js';

const initialState = {
  posts: [],
  post: null,
  loading: false,
  error: false,
  message: null,
};

export const getPosts = createAsyncThunk(
  'postsData/getPosts',
  async (id, thunkAPI) => {
    const res = await getPostsService();
    for (let i = 0; i < res.data.length; i++) {
      const post = res.data[i];
      if (post.id === 3) {
        thunkAPI.dispatch(addSinglePostData(post));
      }
    }
    return res.data;
  }
);

export const postsSlice = createSlice({
  name: 'postsData',
  initialState,
  reducers: {
    //aca van los reducers clasicos
    addSinglePostData(state, action) {
      state.post = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getPosts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getPosts.fulfilled, (state, action) => {
      state.loading = false;
      state.posts = action.payload;
      state.error = false;
    });
    builder.addCase(getPosts.rejected, (state, action) => {
      state.loading = false;
      state.posts = [];
      state.error = true;
      state.message = action.error.message;
    });
  },
});

export const { addSinglePostData } = postsSlice.actions;

export default postsSlice.reducer;
