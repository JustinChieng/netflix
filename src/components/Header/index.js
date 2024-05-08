import { Link } from "react-router-dom";

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function Header() {
  return (
      <AppBar position="static" sx={{backgroundColor: "black" }}>
        <Toolbar>
          <Typography variant="h5" sx={{ color:"red", flexGrow: 1 }}>
            Netflix
          </Typography>
          <Button color="inherit" component={Link} to="/">Movies</Button>
          <Button color="inherit" component={Link} to="/tvshows">TV Shows</Button>
        </Toolbar>
      </AppBar>
  );
}