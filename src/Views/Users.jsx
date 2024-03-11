import { Box, CircularProgress, Container, Grid } from '@mui/material';
import React, { useEffect } from 'react';
import UserCard from '../Components/UserCard.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../redux/usersSlice.js';

export default function Users() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.usersData.users);
  const loading = useSelector((state) => state.usersData.loading);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <>
      <Container maxWidth={'lg'}>
        <Box sx={{ py: '2rem' }}>
          {loading ? (
            <CircularProgress />
          ) : (
            <Grid container spacing={2}>
              {users.length > 0 &&
                users.map((user) => {
                  return (
                    <Grid item key={user.id} xs={12} md={4} lg={3}>
                      <UserCard user={user} />{' '}
                    </Grid>
                  );
                })}
            </Grid>
          )}
        </Box>
      </Container>
    </>
  );
}
