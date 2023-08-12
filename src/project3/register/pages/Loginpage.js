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
      {/* <form onSubmit={handleSubmit}>
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
      </form> */}


<form onSubmit={handleSubmit}>
  <div className="container mt-5">
    <div className="row justify-content-center">
      <div className="col-md-6">
        <div className="border rounded p-4 shadow-sm border-radius-10">
          <div className="form-group">
            <input
              className="form-control"
              value={inputData.username}
              onChange={handleData}
              name="username"
              placeholder="Enter username"
              style={{marginTop:'10px'}}
              type="text"
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              value={inputData.password}
              onChange={handleData}
              name="password"
              placeholder="Enter Password"
              style={{marginTop:'10px'}}
              type="password"
            />
          </div>
          <button className="btn btn-primary btn-block" type="submit">
            Login
          </button>
          <button className="btn btn-link mt-2 text-decoration-none" style={{marginLeft:'90px'}} onClick={handleClick}>
            Don't have an account? Register
          </button>
        </div>
      </div>
    </div>
  </div>
</form>

    </>
  );
}

export default Loginpage;