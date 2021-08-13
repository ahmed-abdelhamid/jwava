import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(({ palette }) => ({
  dialogContent: {
    borderTop: `1px solid ${palette.grey[200]}`,
    borderBottom: `1px solid ${palette.grey[200]}`,
  },
  input: {
    borderWidth: 0,
    fontSize: '0.875rem',
    width: '100%',
    '&:focus': {
      outlineWidth: 0,
    },
  },
  select: {
    backgroundColor: 'transparent',
  },
  actionsContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

export default useStyles;
