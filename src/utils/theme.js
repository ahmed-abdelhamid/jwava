import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#fff',
    },
    secondary: {
      main: '#2CC56E',
      contrastText: '#fff',
    },
    background: {
      default: '#fff',
    },
  },
  overrides: {
    MuiButton: {
      root: {
        textTransform: 'capitalize',
        borderRadius: 10,
      },
      containedSizeLarge: {
        fontSize: '1.1rem',
      },
      iconSizeLarge: {
        '& > *:first-child': {
          fontSize: '2rem',
        },
      },
    },
    MuiListItemIcon: {
      root: {
        color: 'inherit',
      },
    },
  },
});

export default theme;
