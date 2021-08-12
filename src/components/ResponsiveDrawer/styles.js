import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

const useStyles = makeStyles(({ spacing, breakpoints, palette }) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  paperDrawer: {
    width: drawerWidth,
  },
  drawerMobile: {
    [breakpoints.down('sm')]: {
      overflowX: 'hidden',
      width: spacing(7) + 1,
    },
  },
  listItem: {
    '&.Mui-selected': {
      backgroundColor: '#e9f9f0',
      color: palette.secondary.main,
    },
  },
}));

export default useStyles;
