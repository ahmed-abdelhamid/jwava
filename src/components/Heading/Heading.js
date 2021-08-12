import {
  Grid,
  FormControl,
  OutlinedInput,
  InputAdornment,
  Box,
  useMediaQuery,
} from '@material-ui/core';
import { Search as SearchIcon } from '@material-ui/icons';

const Heading = ({ children }) => {
  const mobile = useMediaQuery(({ breakpoints }) => breakpoints.down('xs'));
  return (
    <Grid
      container
      alignItems="center"
      justifyContent="space-between"
      spacing={1}
    >
      <Grid component={Box} order={mobile ? 1 : 0} item xs={12} sm={8}>
        <FormControl variant="outlined" fullWidth color="secondary">
          <OutlinedInput
            placeholder="Search"
            id="search"
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            }
          />
        </FormControl>
      </Grid>
      <Grid item>{children}</Grid>
    </Grid>
  );
};

export default Heading;
