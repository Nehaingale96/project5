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
  const handleLogin=()=>{
    navigate('/login')
  }
  
  
  const handleHomePage=()=>{
    navigate('/')
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} onClick={handleHomePage}>
            Home
          </Typography>
          <Box >
            <Button color='inherit' onClick={handleLogin} >Login</Button>
            {/* <Button color='inherit' onClick={handHodLogin}>HOD</Button>
            <Button color='inherit' onClick={handleEmpLogin} >STAFF</Button> */}
          </Box>

        </Toolbar>
      </AppBar>
    </Box>
  );
}