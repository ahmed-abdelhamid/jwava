import {
  AppBar,
  Avatar,
  Badge,
  IconButton,
  Toolbar,
  Typography,
  Box,
  Hidden,
} from '@material-ui/core';
import {
  MenuRounded as MenuIcon,
  NotificationsOutlined as NotificationsIcon,
} from '@material-ui/icons';

const NavBar = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Box mr={2}>
            <IconButton edge="start" color="inherit">
              <MenuIcon fontSize="large" />
            </IconButton>
          </Box>
          <Hidden xsDown>
            <Typography variant="h6" noWrap>
              Clients
            </Typography>
          </Hidden>

          <Box
            fontSize="h6.fontSize"
            fontWeight="bold"
            textAlign="center"
            flexGrow={1}
          >
            Jwava
          </Box>

          <Box display="flex" alignItems="center">
            <Box ml={2}>
              <IconButton
                aria-label="Show notification"
                color="inherit"
                edge="start"
              >
                <Badge color="secondary" badgeContent={8}>
                  <NotificationsIcon fontSize="large" />
                </Badge>
              </IconButton>
            </Box>
            <Hidden xsDown>
              <Box mr={2} fontWeight={500} fontSize="p.fontSize">
                Atheek
              </Box>
              <Avatar alt="Profile Picture" src="/images/profile.jpeg" />
            </Hidden>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
