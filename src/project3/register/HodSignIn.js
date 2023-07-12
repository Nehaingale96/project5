import React, { useEffect, useState } from 'react'

import { Link, useNavigate } from 'react-router-dom';
import { Box, Button, TextField, Typography } from '@mui/material';

function HodSignIn() {

   const [inputData, setinputData] = useState({username:'',password:''})
   const [newInputData, setnewInputData] = useState([])
   const [flag, setflag] = useState(false)
    console.log(newInputData);
    useEffect(() => {
    //   console.log('Registered');
    }, [flag])
    

   function handleData(e) {
    setinputData({...inputData,[e.target.name]:e.target.value})
    console.log(inputData);
   }
   function handleSubmit(e) {
    e.preventDefault();
    setnewInputData([...newInputData,inputData])
    const validateData=JSON.parse(localStorage.getItem('hoduser'))
    console.log(validateData);
    const findData =validateData.find((item)=>item.username === inputData.username && item.password === inputData.password )
    console.log(findData);
    if(findData !== undefined){
        navigate('/hoddashboard')
    }else{
        alert('invalid data')
        
    }
   }
   const navigate=useNavigate()
    const handleClick=()=>{
        navigate('/hodregister')
    }


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
                boxShadow: "10px 10px 20px #ccc"
            }
        }}
    >



        <TextField variant='outlined' value={inputData.username} onChange={handleData} margin='normal' name='username' placeholder='Enter username' type='text' />
        <TextField variant='outlined' value={inputData.password} onChange={handleData} margin='normal' name='password' placeholder='Enter Password' type='password' />
        <Button variant='contained' sx={{ mt: 2 }} type='submit' onClick={handleSubmit} >Login</Button>
        <Button  onClick={handleClick} sx={{ mt: 2 }} >
            
                Already have account ?Register
           
        </Button>
    </Box>
</form>
</>
  )
}

export default HodSignIn;