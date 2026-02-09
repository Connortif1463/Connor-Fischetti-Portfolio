import * as React from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

export default function Copyright() {
  return (
    <Typography
      variant="body2"
      align="center"
      sx={{
        color: 'text.secondary',
        mt: '6'
      }}
    >
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/Connortif1463">
        Connor Fischetti Works
      </Link>{' '}
      {new Date().getFullYear()}
    </Typography>
  );
}
