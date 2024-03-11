import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../redux/usersSlice.js';
import {
  Box,
  CircularProgress,
  Container,
  Grid,
  Typography,
} from '@mui/material';
import UserCard from '../Components/UserCard.jsx';
import { getPosts } from '../redux/postSlice.js';

export default function Home() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const URL_API = process.env.REACT_APP_IMG_URL;

  useEffect(() => {
    dispatch(fetchUsers());
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <>
      <Container maxWidth={'lg'}>
        <Box sx={{ py: '2rem' }}>
          {loading ? (
            <CircularProgress />
          ) : (
            <Grid container spacing={2}>
              <Grid
                item
                xs={12}
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  minHeight: '35vh',
                }}
              >
                <Typography variant='h1' sx={{ fontSize: '80px' }}>
                  Bienvenidos a mi pagina
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant='body1'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                  deserunt ratione cupiditate similique unde quisquam quaerat?
                  Expedita neque quis iste! Cum ab reprehenderit libero est
                  veniam pariatur voluptate explicabo eligendi?
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <img
                  src='https://picsum.photos/500/300'
                  alt='random'
                  loading='lazy'
                />
              </Grid>
            </Grid>
          )}
        </Box>
      </Container>
    </>
  );
}
