import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Roboto Mono',
      'monospace',
      'Courier New',
      'Consolas',
      'monospace',
    ].join(','),
    h3: {
      fontWeight: 600,
      letterSpacing: '0.05em',
    },
    h4: {
      fontWeight: 600,
      letterSpacing: '0.03em',
    },
    h5: {
      fontWeight: 500,
    },
    body1: {
      fontFamily: '"Roboto Mono", monospace',
    },
  },
  palette: {
    mode: 'light',
    primary: {
      main: '#2c3e50', // Dark slate grey
      light: '#34495e',
      dark: '#1a252f',
    },
    secondary: {
      main: '#7f8c8d', // Medium grey
      light: '#95a5a6',
      dark: '#5d6d6e',
    },
    background: {
      default: '#f5f7fa', // Light grey background
      paper: '#ffffff', // White for containers
    },
    text: {
      primary: '#2c3e50', // Dark grey text
      secondary: '#7f8c8d', // Medium grey text
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          padding: '2rem',
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: 'none',
          color: '#2c3e50',
          '&:hover': {
            color: '#3498db', // Subtle blue on hover
          },
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          backgroundColor: '#bdc3c7', // Light grey divider
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          borderRadius: '4px',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
        },
      },
    },
  },
  shape: {
    borderRadius: 4,
  },
});

export default theme;