import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Avatar, CardHeader } from '@mui/material';

export default function UserCard({ user }) {
  function stringToColor(string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
  }

  function stringAvatar(name) {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
  }
  return (
    <Card
      sx={{
        maxWidth: 345,
        minHeight: 250,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        py: '15px',
      }}
    >
      <CardHeader
        avatar={<Avatar {...stringAvatar(user.name)} />}
        title={user.email}
        subheader={user.phone}
      />
      <CardContent>
        <Typography variant='body2' color='text.info'>
          {user.username}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size='small' variant='outlined'>
          {user.company.name}
        </Button>
      </CardActions>
    </Card>
  );
}
