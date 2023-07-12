import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { useNavigate } from 'react-router';





export default function Navbar() {

  const navigate=useNavigate()
  const handleEmpLogin=()=>{
    navigate('/empsignin')
  }
  const handHodLogin=()=>{
    navigate('/hodsignin')
  }
  const handleHomePage=()=>{
    navigate('/')
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} onClick={handleHomePage}>
            Home
          </Typography>
          <Box >
            {/* <Button color='inherit' >Login</Button> */}
            <Button color='inherit' onClick={handHodLogin}>HOD</Button>
            <Button color='inherit' onClick={handleEmpLogin} >STAFF</Button>
          </Box>

        </Toolbar>
      </AppBar>
    </Box>
  );
}