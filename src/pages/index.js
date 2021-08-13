import { useState } from 'react';
import { Grid, Button } from '@material-ui/core';
import {
  AddRounded as AddIcon,
  People as PeopleIcon,
} from '@material-ui/icons';
import Navbar from '../components/Navbar/Navbar';
import Heading from '../components/Heading/Heading';
import ResponsiveDrawer from '../components/ResponsiveDrawer/ResponsiveDrawer';
import ClientsTable from '../components/ClientsTable/ClientsTable';
import AddNewClient from '../components/AddNewClient/AddNewClient';
import { clients } from '../utils/date/clients';

const drawerNames = [{ name: 'Clients', Icon: PeopleIcon }];

export default function Clients() {
  const [allClients, setAllClients] = useState(clients);
  const [filteredClients, setFilteredClients] = useState(clients);
  const [searchValue, setSearchValue] = useState('');
  const [clientID, setClientID] = useState();
  const [openDialog, setOpenDialog] = useState(false);

  const toggleDialog = () => {
    setOpenDialog(!openDialog);
  };

  const deleteClient = () => {
    const clients = filteredClients.filter(({ id }) => id !== clientID);
    setFilteredClients(clients);
  };

  const addNewClient = (clientData) => {
    const client = {
      id: Math.floor(Math.random() * 10000) + 1,
      noOfBranches: 1,
      startDate: new Date(),
      subscriptionStatus: true,
      ...clientData,
    };
    const clients = [client, ...allClients];
    setAllClients(clients);
    const filteredClients = clients.filter(({ storeName }) =>
      storeName.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredClients(filteredClients);
    toggleDialog();
  };

  const handleSearch = (e) => {
    const { value } = e.target;
    setSearchValue(value);
    const filteredClients = allClients.filter(({ storeName }) =>
      storeName.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredClients(filteredClients);
  };
  return (
    <>
      <Navbar pageName="Clients" />
      <ResponsiveDrawer drawerNames={drawerNames}>
        {/* Page Content */}
        <Grid container direction="column" spacing={2}>
          {/* Heading Content */}
          <Grid item>
            <Heading searchValue={searchValue} handleSearch={handleSearch}>
              <Button
                onClick={toggleDialog}
                disableElevation
                color="secondary"
                variant="contained"
                size="large"
                endIcon={<AddIcon />}
              >
                add client
              </Button>
            </Heading>
          </Grid>

          {/* Table Content */}
          <Grid item>
            <ClientsTable
              clients={filteredClients}
              setClientID={setClientID}
              deleteClient={deleteClient}
            />
          </Grid>
        </Grid>
      </ResponsiveDrawer>
      <AddNewClient
        open={openDialog}
        close={toggleDialog}
        addClient={addNewClient}
      />
    </>
  );
}
