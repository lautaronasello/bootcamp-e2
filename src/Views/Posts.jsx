import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../redux/postSlice.js';
import { Box, CircularProgress, Container, Grid } from '@mui/material';
import PostCard from '../Components/PostCard.jsx';
import PostsList from '../Components/PostList.jsx';

export default function Posts() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.postsData.posts);
  const loading = useSelector((state) => state.postsData.loading);

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  console.log(posts);

  return (
    <>
      <Container maxWidth={'lg'}>
        <Box sx={{ py: '2rem' }}>
          {loading ? <CircularProgress /> : <PostsList posts={posts} />}
        </Box>
      </Container>
    </>
  );
}
