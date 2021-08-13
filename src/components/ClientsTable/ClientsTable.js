import { useState } from 'react';
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  IconButton,
  Menu,
  MenuItem,
} from '@material-ui/core';
import { MoreHoriz as MoreIcon } from '@material-ui/icons';
import useStyles from './styles';

const ClientsTable = ({ clients, setClientID, deleteClient }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const openMenu = (e, clientID) => {
    setAnchorEl(e.currentTarget);
    setClientID(clientID);
  };

  const closeMenu = () => {
    setAnchorEl(null);
    setClientID(null);
  };

  const handleClick = () => {
    closeMenu();
    deleteClient();
  };

  const renderMenu = (
    <Menu
      classes={{ paper: classes.menu }}
      elevation={0}
      anchorEl={anchorEl}
      open={!!anchorEl}
      onClose={closeMenu}
      getContentAnchorEl={undefined}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
    >
      <MenuItem>View</MenuItem>
      <MenuItem>Edit</MenuItem>
      <MenuItem onClick={handleClick} className={classes.warning}>
        Delete
      </MenuItem>
    </Menu>
  );

  return (
    <TableContainer>
      <Table aria-label="Clients Table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Store Name</TableCell>
            <TableCell>Business Type</TableCell>
            <TableCell align="center"># of Branches</TableCell>
            <TableCell>Start Date</TableCell>
            <TableCell>Subscription Status</TableCell>
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {clients.map((client, i) => (
            <TableRow key={i}>
              <TableCell>{client.id}</TableCell>
              <TableCell>{client.storeName}</TableCell>
              <TableCell>{client.businessType}</TableCell>
              <TableCell align="center">{client.noOfBranches}</TableCell>
              <TableCell>
                {client.startDate.toLocaleDateString(undefined, {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                })}
              </TableCell>
              <TableCell>
                {client.subscriptionStatus ? 'Active' : 'Inactive'}
              </TableCell>
              <TableCell>
                <IconButton
                  edge="end"
                  onClick={(e) => {
                    openMenu(e, client.id);
                  }}
                >
                  <MoreIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {renderMenu}
    </TableContainer>
  );
};

export default ClientsTable;
