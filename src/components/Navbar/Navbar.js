import Image from 'next/image';
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
      <AppBar position="static" variant="outlined">
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

          <Box textAlign="center" flexGrow={1}>
            <Image
              src="/images/logo@2x.png"
              alt="Logo"
              width={126}
              height={30}
            />
          </Box>

          <Box display="flex" alignItems="center">
            <Box ml={2}>
              <IconButton
                aria-label="Show notification"
                color="inherit"
                edge="start"
              >
                <Badge
                  color="primary"
                  badgeContent={
                    <Box
                      fontSize="body2.fontSize"
                      fontWeight="body2.fontWeight"
                      color="error.main"
                    >
                      8
                    </Box>
                  }
                >
                  <NotificationsIcon fontSize="large" />
                </Badge>
              </IconButton>
            </Box>
            <Hidden xsDown>
              <Box mr={2} fontWeight={500} fontSize="body1.fontSize">
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
