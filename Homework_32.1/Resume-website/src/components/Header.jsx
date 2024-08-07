import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';

function Header() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    My Portfolio
                </Typography>
                <Button color="inherit" component={NavLink} to="/">Home</Button>
                <Button color="inherit" component={NavLink} to="/todo">Todo</Button>
                <Button color="inherit" component={NavLink} to="/swapi">SWAPI</Button>
            </Toolbar>
        </AppBar>
    );
};

export default Header;