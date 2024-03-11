import { createAsyncThunk } from '@reduxjs/toolkit';
import { getPostsService } from '../../services/posts.js';

export const getPosts = createAsyncThunk('posts/getPosts', async () => {
  const res = await getPostsService();
  return res.data;
});
