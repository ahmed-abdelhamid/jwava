import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ spacing }) => ({
  listContainer: {
    width: 240,
  },
  avatar: {
    padding: spacing(3),
  },
  green: {
    backgroundColor: '#357a38',
  },
  violet: {
    backgroundColor: '#3f51b5',
  },
  blue: {
    backgroundColor: '#1769aa',
  },
  orange: {
    backgroundColor: '#ff5722',
  },
  cyan: {
    backgroundColor: '#03a9f4',
  },
}));

export default useStyles;
