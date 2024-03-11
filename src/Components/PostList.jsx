import React, { useState, useEffect } from 'react';
import { Grid, Button, Box, MenuItem, Select, Typography } from '@mui/material';
import PostCard from './PostCard';

const PostsList = ({ posts }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(5);

  // Calcular el índice inicial y final de los posts a mostrar en la página actual
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Función para cambiar de página
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Calcular el número total de páginas
  const totalPages = Math.ceil(posts.length / postsPerPage);

  //Cambiar el numero de post por pagina
  const handleChangePostPerPage = (e) => {
    setPostsPerPage(e.target.value);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '85vh',
      }}
    >
      <Grid container spacing={2} sx={{ maxHeight: '70vh', overflow: 'auto' }}>
        {currentPosts.map((post) => (
          <Grid item key={post.id} xs={12}>
            <PostCard title={post.title} body={post.body} />
          </Grid>
        ))}
      </Grid>
      {/* Paginación */}
      <Box
        sx={{
          marginTop: '10px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Typography variant='caption'>Filas por pagina: </Typography>
          <Select
            labelId='post-perg-page-select'
            id='post-perg-page-select'
            value={postsPerPage}
            onChange={handleChangePostPerPage}
            label='Filas por pagina'
            variant='standard'
            size='small'
          >
            {[5, 10, 15, 20].map((rows) => {
              return (
                <MenuItem value={rows} key={rows}>
                  {rows}
                </MenuItem>
              );
            })}
          </Select>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex',
            alignItems: 'center',
          }}
        >
          <Button
            disabled={currentPage === 1}
            onClick={() => paginate(currentPage - 1)}
          >
            {'<'}
          </Button>
          <Box sx={{ mx: '1rem' }}>{currentPage}</Box>
          <Button
            disabled={currentPage === totalPages}
            onClick={() => paginate(currentPage + 1)}
          >
            {'>'}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default PostsList;
