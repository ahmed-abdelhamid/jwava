import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ zIndex }) => ({
  appBar: {
    zIndex: zIndex.drawer + 1,
  },
}));

export default useStyles;
