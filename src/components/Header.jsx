
import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

const Header = () => (
  <AppBar position="static">
    <Toolbar>
      <Typography color="inherit" variant="h6" component={Link} to="/" sx={{ flexGrow: 1 }}>
        Employee Management
      </Typography>
      <Button component={Link} to="/add" color="inherit">
        Add Employee
      </Button>
    </Toolbar>
  </AppBar>
);

export default Header;
