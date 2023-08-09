import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Box, Button, TextField, Typography } from '@mui/material';
import { FirstContext } from './Context';

function Loginpage() {
  const [inputData, setinputData] = useState({ username: '', password: '' });
  const [newInputData, setnewInputData] = useState([]);
  const [flag, setflag] = useState(false);
  

  const {dispatch}=useContext(FirstContext)

  useEffect(() => {
    // console.log('Registered');
  }, [flag]);

  function handleData(e) {
    setinputData({ ...inputData, [e.target.name]: e.target.value });
    console.log(inputData);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setnewInputData([...newInputData, inputData]);
    const validateData = JSON.parse(localStorage.getItem('userDetails')) || []
    console.log(validateData);
    const findData = validateData.find(
      (item) =>
        item.username === inputData.username && item.password === inputData.password
    );
    // console.log(findData);
    // const profileName = findData.firstname + '' + findData.lastname;
    // console.log(profileName);
    if (findData ) {
      localStorage.setItem('userDataBase',JSON.stringify(findData))
      // dispatch({type:'setDetails',payload :profileName})
      // navigate("/empdashboard",{state:{profileName}})
      alert('You are successfully logged in');
      navigate(`/dashboard/${findData.role}`)
    } else {
      alert('Invalid data');
    }
  }

  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/register');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Box
          borderRadius="25px"
          border={"0.25px solid #ccc"}
          padding={"60px"}
          display={"flex"}
          maxWidth={"450px"}
          flexDirection={"column"}
          margin={"100px auto"}
          boxShadow={"5px 5px 10px #ccc"}
          sx={{
            ":hover": {
              boxShadow: "10px 10px 20px #ccc",
            },
          }}
        >
          <TextField
            variant="outlined"
            value={inputData.username}
            onChange={handleData}
            margin="normal"
            name="username"
            placeholder="Enter username"
            type="text"
          />
          <TextField
            variant="outlined"
            value={inputData.password}
            onChange={handleData}
            margin="normal"
            name="password"
            placeholder="Enter Password"
            type="password"
          />
          <Button variant="contained" sx={{ mt: 2 }} type="submit">
            Login
          </Button>
          <Button onClick={handleClick} sx={{ mt: 2 }}>
            Already have an account? Register
          </Button>
        </Box>
      </form>
    </>
  );
}

export default Loginpage;