import React from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';
import { Link, Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <header>
        <Box
          sx={{
            borderBottom: '1px #212121',
            boxShadow: '0px 3px 8px -3px rgba(82,68,82,0.43)',
            px: '10px',
            py: '5px',
          }}
        >
          <Grid container>
            <Grid item xs={10}>
              <Box>
                <Box>
                  <Link
                    to=''
                    style={{
                      textDecoration: 'none',
                      color: '#212121',
                      cursor: 'pointer',
                    }}
                  >
                    <Typography variant='h5'>Inicio</Typography>
                  </Link>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={1}>
              {false && (
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                  <Link to={`users`}>
                    <Button variant='contained'> USERS</Button>
                  </Link>
                </Box>
              )}
            </Grid>
            <Grid item xs={1}>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Link to='posts'>
                  <Button variant='contained' color='secondary'>
                    POSTS
                  </Button>
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </header>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            minHeight: '90vh',
          }}
        >
          <Outlet />
        </Box>
      </Box>
      <footer>
        <Box
          sx={{
            borderBottom: '1px #212121',
            boxShadow: '0px -5px 8px -3px rgba(82,68,82,0.43)',
            px: '10px',
            py: '5px',
          }}
        >
          <Grid container>
            <Grid item xs={12}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Typography variant='caption'>Este es mi footer</Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </footer>
    </>
  );
}
