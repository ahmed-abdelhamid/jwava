import { createTheme } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';

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
    MuiTableHead: {
      root: {
        backgroundColor: grey[200],
      },
    },
    MuiTableCell: {
      head: {
        borderBottomWidth: '0px',
      },
    },
  },
});

export default theme;
