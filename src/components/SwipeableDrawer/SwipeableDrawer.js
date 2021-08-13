import {
  SwipeableDrawer,
  Toolbar,
  Box,
  Avatar,
  Grid,
  Typography,
  ButtonBase,
} from '@material-ui/core';
import {
  People as PeopleIcon,
  Assignment as AssignmentIcon,
  Settings as SettingsIcon,
  RssFeed as RssFeedIcon,
} from '@material-ui/icons';
import Router from 'next/router';
import useStyles from './styles';

const CustomSwipeableDrawer = ({ open, toggleDrawer }) => {
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const classes = useStyles();

  const handleClick = () => {
    Router.push('/');
    toggleDrawer();
  };

  return (
    <SwipeableDrawer
      anchor="left"
      open={open}
      onClose={toggleDrawer}
      onOpen={toggleDrawer}
      disableBackdropTransition={!iOS}
      disableDiscovery={iOS}
    >
      <Box width={240}>
        <Toolbar />
        <Box p={2}>
          <Grid container spacing={2}>
            <Grid
              item
              container
              direction="column"
              alignItems="center"
              justifyContent="center"
              xs={4}
            >
              <Grid item>
                <ButtonBase onClick={handleClick}>
                  <Avatar
                    variant="rounded"
                    className={`${classes.avatar} ${classes.green}`}
                  >
                    <PeopleIcon fontSize="large" />
                  </Avatar>
                </ButtonBase>
              </Grid>
              <Grid item>
                <Typography variant="body2">Clients</Typography>
              </Grid>
            </Grid>

            <Grid
              item
              container
              direction="column"
              alignItems="center"
              justifyContent="center"
              xs={4}
            >
              <Grid item>
                <Avatar
                  variant="rounded"
                  className={`${classes.avatar} ${classes.violet}`}
                >
                  <AssignmentIcon fontSize="large" />
                </Avatar>
              </Grid>
              <Grid item>
                <Typography variant="body2">Inquiries</Typography>
              </Grid>
            </Grid>
            <Grid
              item
              container
              direction="column"
              alignItems="center"
              justifyContent="center"
              xs={4}
            >
              <Grid item>
                <Avatar
                  variant="rounded"
                  className={`${classes.avatar} ${classes.blue}`}
                >
                  <PeopleIcon fontSize="large" />
                </Avatar>
              </Grid>
              <Grid item>
                <Typography variant="body2">Teams</Typography>
              </Grid>
            </Grid>
            <Grid
              item
              container
              direction="column"
              alignItems="center"
              justifyContent="center"
              xs={4}
            >
              <Grid item>
                <Avatar
                  variant="rounded"
                  className={`${classes.avatar} ${classes.orange}`}
                >
                  <SettingsIcon fontSize="large" />
                </Avatar>
              </Grid>
              <Grid item>
                <Typography variant="body2">Settings</Typography>
              </Grid>
            </Grid>
            <Grid
              item
              container
              direction="column"
              alignItems="center"
              justifyContent="center"
              xs={4}
            >
              <Grid item>
                <Avatar
                  variant="rounded"
                  className={`${classes.avatar} ${classes.cyan}`}
                >
                  <RssFeedIcon fontSize="large" />
                </Avatar>
              </Grid>
              <Grid item>
                <Typography variant="body2">Blogs</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </SwipeableDrawer>
  );
};

export default CustomSwipeableDrawer;
