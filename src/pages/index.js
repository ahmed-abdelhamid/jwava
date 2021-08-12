import { Grid, Box, Button } from '@material-ui/core';
import { AddRounded as AddIcon } from '@material-ui/icons';
import Navbar from '../components/Navbar/Navbar';
import Heading from '../components/Heading/Heading';
import ResponsiveDrawer from '../components/ResponsiveDrawer/ResponsiveDrawer';

export default function Clients() {
  return (
    <>
      <Navbar pageName="Clients" />
      {/* <ResponsiveDrawer /> */}
      <Box px={2} py={4}>
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
      </Box>
    </>
  );
}
