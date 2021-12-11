import { Box, Toolbar, Typography } from "@mui/material";
import MuiAppBar from "@mui/material/AppBar";

const AppBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <MuiAppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Task Management App
          </Typography>
        </Toolbar>
      </MuiAppBar>
    </Box>
  );
};

export default AppBar;
