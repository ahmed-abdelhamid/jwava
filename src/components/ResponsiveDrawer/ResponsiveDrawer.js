import {
  Drawer,
  Toolbar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
} from '@material-ui/core';
import { AccountBalance as AccountBalanceIcon } from '@material-ui/icons';
import useStyles from './styles';

const ResponsiveDrawer = ({ drawerNames, children }) => {
  const classes = useStyles();

  return (
    <>
      <Drawer
        variant="permanent"
        className={`${classes.drawer} ${classes.drawerMobile}`}
        classes={{ paper: `${classes.paperDrawer} ${classes.drawerMobile}` }}
      >
        <Toolbar />
        <List>
          {drawerNames.map(({ name, Icon }) => (
            <ListItem selected button key={name} className={classes.listItem}>
              <ListItemIcon>
                <Icon />
              </ListItemIcon>
              <ListItemText primary={name} />
            </ListItem>
          ))}
          <ListItem button key="Other" className={classes.listItem}>
            <ListItemIcon>
              <AccountBalanceIcon />
            </ListItemIcon>
            <ListItemText primary="Another Tab" />
          </ListItem>
        </List>
      </Drawer>
      <Box component="main" px={2} py={4} flexGrow={1}>
        <Toolbar />
        {children}
      </Box>
    </>
  );
};

export default ResponsiveDrawer;
