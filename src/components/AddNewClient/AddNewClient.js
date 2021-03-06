import { useRef, useState } from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  Box,
  IconButton,
  Typography,
  Grid,
} from '@material-ui/core';
import {
  Close as CloseIcon,
  AttachFile as AttachIcon,
} from '@material-ui/icons';
import useStyles from './styles';

const AddNewClient = ({ open, close, addClient }) => {
  const [error, setError] = useState('');
  const classes = useStyles();
  const storeNameInput = useRef();
  const businessTypeInput = useRef();

  const addNewClient = () => {
    if (!storeNameInput.current.value || !businessTypeInput.current.value) {
      setError('Please enter store name and select business type');
      return;
    }
    setError('');
    const clientData = {
      storeName: storeNameInput.current.value,
      businessType: businessTypeInput.current.value,
    };
    addClient(clientData);
  };

  return (
    <Dialog fullWidth maxWidth="sm" open={open} onClose={close}>
      <DialogTitle disableTypography>
        <Box
          textAlign="center"
          fontWeight="h6.fontWeight"
          fontSize="h6.fontSize"
        >
          Add New Client
        </Box>
        <Box position="absolute" right={1} top={1}>
          <IconButton onClick={close}>
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent className={classes.dialogContent}>
        <Grid container direction="column" spacing={2}>
          {/* Client Detials */}
          <Grid item>
            <Typography gutterBottom variant="subtitle2">
              Client Details
            </Typography>
            <Grid container>
              <Grid
                component={Box}
                border={1}
                borderColor="grey.200"
                px={2}
                py={1}
                bgcolor="grey.100"
                item
                sm={5}
                xs={12}
              >
                Owner Full Name
              </Grid>
              <Grid
                component={Box}
                border={1}
                borderColor="grey.200"
                px={2}
                py={1}
                item
                sm={7}
                xs={12}
              >
                <input
                  className={classes.input}
                  placeholder="Owner Full Name"
                />
              </Grid>
              <Grid
                component={Box}
                border={1}
                borderColor="grey.200"
                px={2}
                py={1}
                bgcolor="grey.100"
                item
                sm={5}
                xs={12}
              >
                Owner Email
              </Grid>
              <Grid
                component={Box}
                border={1}
                borderColor="grey.200"
                px={2}
                py={1}
                item
                sm={7}
                xs={12}
              >
                <input
                  className={classes.input}
                  placeholder="Enter Owner Email"
                />
              </Grid>
              <Grid
                component={Box}
                border={1}
                borderColor="grey.200"
                px={2}
                py={1}
                bgcolor="grey.100"
                item
                sm={5}
                xs={12}
              >
                Owner Phone Number
              </Grid>
              <Grid
                component={Box}
                border={1}
                borderColor="grey.200"
                px={2}
                py={1}
                item
                sm={7}
                xs={12}
              >
                <input
                  className={classes.input}
                  placeholder="Enter Owner Phone Number"
                />
              </Grid>
            </Grid>
          </Grid>

          {/* Business Legal Detail */}
          <Grid item>
            <Typography gutterBottom variant="subtitle2">
              Business Legal Details
            </Typography>
            <Grid container>
              <Grid
                component={Box}
                border={1}
                borderColor="grey.200"
                px={2}
                py={1}
                bgcolor="grey.100"
                item
                sm={5}
                xs={12}
              >
                Business Type
              </Grid>
              <Grid
                component={Box}
                border={1}
                borderColor="grey.200"
                px={2}
                py={1}
                item
                sm={7}
                xs={12}
              >
                <select
                  className={`${classes.input} ${classes.select}`}
                  defaultValue=""
                  ref={businessTypeInput}
                >
                  <option value="" disabled hidden>
                    Select Business Type
                  </option>
                  <option value="Online Store">Online Store</option>
                  <option value="Shop">Shop</option>
                  <option value="Street Cart">Street Cart</option>
                  <option value="Homemade">Homemade</option>
                </select>
              </Grid>
              <Grid
                component={Box}
                border={1}
                borderColor="grey.200"
                px={2}
                py={1}
                bgcolor="grey.100"
                item
                sm={5}
                xs={12}
              >
                Store Legal Name
              </Grid>
              <Grid
                component={Box}
                border={1}
                borderColor="grey.200"
                px={2}
                py={1}
                item
                sm={7}
                xs={12}
              >
                <input
                  className={classes.input}
                  placeholder="Enter Store Legal Name"
                />
              </Grid>
              <Grid
                component={Box}
                border={1}
                borderColor="grey.200"
                px={2}
                py={1}
                bgcolor="grey.100"
                item
                sm={5}
                xs={12}
              >
                Business License Number
              </Grid>
              <Grid
                component={Box}
                border={1}
                borderColor="grey.200"
                px={2}
                py={1}
                item
                sm={7}
                xs={12}
              >
                <input
                  className={classes.input}
                  placeholder="Enter Business License Number"
                />
              </Grid>
              <Grid
                component={Box}
                border={1}
                borderColor="grey.200"
                px={2}
                py={1}
                bgcolor="grey.100"
                item
                sm={5}
                xs={12}
              >
                Business Tax Number
              </Grid>
              <Grid
                component={Box}
                border={1}
                borderColor="grey.200"
                px={2}
                py={1}
                item
                sm={7}
                xs={12}
              >
                <input
                  className={classes.input}
                  placeholder="Enter Business Tax Number"
                />
              </Grid>
              <Grid
                component={Box}
                border={1}
                borderColor="grey.200"
                px={2}
                py={1}
                bgcolor="grey.100"
                item
                sm={5}
                xs={12}
              >
                Business License Doc
              </Grid>
              <Grid
                component={Box}
                border={1}
                borderColor="grey.200"
                px={2}
                py={1}
                item
                xs={12}
                sm={7}
              >
                <Button
                  variant="outlined"
                  size="small"
                  startIcon={<AttachIcon />}
                >
                  Attachment
                </Button>
              </Grid>
            </Grid>
          </Grid>

          {/* Main Branch Details */}
          <Grid item>
            <Typography gutterBottom variant="subtitle2">
              Main Branch Details
            </Typography>
            <Grid container>
              <Grid
                component={Box}
                border={1}
                borderColor="grey.200"
                px={2}
                py={1}
                bgcolor="grey.100"
                item
                sm={5}
                xs={12}
              >
                Store Name
              </Grid>
              <Grid
                component={Box}
                border={1}
                borderColor="grey.200"
                px={2}
                py={1}
                item
                sm={7}
                xs={12}
              >
                <input
                  ref={storeNameInput}
                  className={classes.input}
                  placeholder="Enter Store Name"
                />
              </Grid>
              <Grid
                component={Box}
                border={1}
                borderColor="grey.200"
                px={2}
                py={1}
                bgcolor="grey.100"
                item
                sm={5}
                xs={12}
              >
                Address
              </Grid>
              <Grid
                component={Box}
                border={1}
                borderColor="grey.200"
                px={2}
                py={1}
                item
                sm={7}
                xs={12}
              >
                <input className={classes.input} placeholder="Enter Address" />
              </Grid>
              <Grid
                component={Box}
                border={1}
                borderColor="grey.200"
                px={2}
                py={1}
                bgcolor="grey.100"
                item
                sm={5}
                xs={12}
              >
                Email
              </Grid>
              <Grid
                component={Box}
                border={1}
                borderColor="grey.200"
                px={2}
                py={1}
                item
                sm={7}
                xs={12}
              >
                <input className={classes.input} placeholder="Owner Email" />
              </Grid>
              <Grid
                component={Box}
                border={1}
                borderColor="grey.200"
                px={2}
                py={1}
                bgcolor="grey.100"
                item
                sm={5}
                xs={12}
              >
                Phone Number
              </Grid>
              <Grid
                component={Box}
                border={1}
                borderColor="grey.200"
                px={2}
                py={1}
                item
                sm={7}
                xs={12}
              >
                <input
                  className={classes.input}
                  placeholder="Enter Phone Number"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions className={classes.actionsContainer}>
        {error && <Typography color="error">{error}</Typography>}
        <Button
          onClick={addNewClient}
          disableElevation
          variant="contained"
          color="secondary"
        >
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddNewClient;
