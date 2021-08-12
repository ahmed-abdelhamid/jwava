import { Grid, Box, Button } from '@material-ui/core';
import {
  AddRounded as AddIcon,
  People as PeopleIcon,
} from '@material-ui/icons';
import Navbar from '../components/Navbar/Navbar';
import Heading from '../components/Heading/Heading';
import ResponsiveDrawer from '../components/ResponsiveDrawer/ResponsiveDrawer';

const drawerNames = [{ name: 'Clients', Icon: PeopleIcon }];

export default function Clients() {
  return (
    <>
      <Navbar pageName="Clients" />
      <ResponsiveDrawer drawerNames={drawerNames}>
        {/* Page Content */}
        <Grid container direction="column" spacing={2}>
          {/* Heading Content */}
          <Grid item>
            <Heading>
              <Button
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
          <Grid item>Table</Grid>
        </Grid>
      </ResponsiveDrawer>
    </>
  );
}
