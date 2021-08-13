import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(({ palette }) => ({
  menu: {
    minWidth: 100,
    border: `1px solid ${palette.grey[200]}`,
  },
  warning: {
    color: palette.error.main,
  },
}));

export default useStyles;
