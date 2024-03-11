// PostCard.js

import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const PostCard = ({ title, body }) => {
  return (
    <Card sx={{ width: '100%', display: 'flex', background: 'paper' }}>
      <img src='https://picsum.photos/200' alt='random' />
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          {title}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {body}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PostCard;
