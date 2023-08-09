import React, { useEffect, useState } from 'react'

import { Link, useNavigate } from 'react-router-dom'
import { Box, Button, FormControl, FormLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import { v4 as uuidv4 } from 'uuid';

function Register() {

   const [formData, setformData] = useState({
        firstname :'',
        lastname :'',
        email :'',
        contact :'',
        department :'',
        username :'',
        password :"",
        role:''
   })

   const [first, setfirst] = useState([])

   console.log(first);
 
   

   const onChangeHandler=(event)=>{
    console.log(event.target.value);
    setformData((prev)=>({...prev, [event.target.name] : event.target.value}))
//     setformData((e)=>({
//         ...formData, [event.target.name]:event.target.value
//     }))
   }

    useEffect(() => {
        const storedData = localStorage.getItem('userDetails');
        if (storedData) {
            setfirst(JSON.parse(storedData));
        }
    }, []);


    const handleSubmit=(e)=>{
        e.preventDefault()
        setfirst([...first,formData])
        if(formData.firstname === "" ){
            alert('please fill the first name')
        }else if(formData.lastname === ""){
            alert('please fill the last name')
        }else if(formData.email === ""){
            alert('please fill the email correctly')
        }else if(formData.contact === ""){
            alert('please fill the contact number')
        }else if(formData.username === ""){
            alert('please fill the username')
        }else if(formData.password === ""){
            alert('please fill the password')
        }else{
            const setStorage ={...formData,id:uuidv4()}
            setfirst([...first,setStorage])
            localStorage.setItem('userDetails',JSON.stringify([...first,setStorage]))
            setformData({
                firstname :'',
                lastname :'',
                email :'',
                contact :'',
                department :'',
                username :'',
                password :'',
            })
            navigate('/login')
        }

    }

    const navigate=useNavigate()
    // const handleClick=()=>{
    //     navigate('/empregister')
    // }

  return (

    <>

            <form onSubmit={handleSubmit}>

                <Box borderRadius="15px" border={"0.25px solid #ccc"} padding={"40px"} display={"flex"} flexDirection={"column"} maxWidth={"550px"} margin={"100px auto"} boxShadow={"5px 5px 10px #ccc"} sx={{ ":hover": { boxShadow: "10px 10px 20px #ccc" } }}>

            

                <Box sx={{margin:'0 auto'}}>
                <Box display={"flex"} gap={"25px"} maxWidth={"450px"}>
                        <input type='radio'  onChange={onChangeHandler} size='small'  margin='normal' name='role' value={'hod'} sx={{ mb: 2 }} />
                        <label>HOD
                        </label>
                        <input type='radio' onChange={onChangeHandler} size='small'  margin='normal' name='role' value={'emp'} sx={{ mb: 2 }} />
                        <label>STAFF
                        </label>
                </Box>     
                    <> <Box display={"flex"} gap={"25px"} maxWidth={"450px"}>
                        <FormLabel>First Name
                            <TextField onChange={onChangeHandler} size='small'  margin='normal' name='firstname' value={formData.firstname} sx={{ mb: 2 }} />
                        </FormLabel>
                        <FormLabel>Last Name
                            <TextField onChange={onChangeHandler} size='small'  margin='normal' name='lastname' value={formData.lastname} sx={{ mb: 2 }} />
                        </FormLabel>
                    </Box>
                        <Box display={"flex"} gap={"25px"} maxWidth={"450px"}>
                            <FormLabel>Email
                                <TextField onChange={onChangeHandler} size='small'  margin='normal' name='email' value={formData.email} sx={{ mb: 2 }} />
                            </FormLabel>
                            <FormLabel>Contact
                                <TextField onChange={onChangeHandler} size='small'  margin='normal' name='contact' value={formData.contact} sx={{ mb: 2 }} />
                            </FormLabel>
                        </Box>
                        <Box display={"flex"} gap={"25px"} maxWidth={"450px"}>
                            <FormControl fullWidth>

                                <FormLabel id="demo-simple-select-label">Department</FormLabel>
                                <Select size='small'
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    sx={{ mt: 2, mb: 2 }}>
                                    <MenuItem value={"0"}>Sales</MenuItem>
                                    <MenuItem value={"1"}>Finace</MenuItem>
                                    <MenuItem value={"2"}>Admin</MenuItem>
                                    <MenuItem value={"3"}>Marketing</MenuItem>
                                    <MenuItem value={"4"}>IT</MenuItem>
                                    <MenuItem value={"5"}>Operation</MenuItem>
                                </Select>

                            </FormControl>
                        </Box>
                        <Box display={"flex"} gap={"25px"} maxWidth={"450px"}>
                            <FormLabel>Username
                                <TextField onChange={onChangeHandler} size='small'  margin='normal' name='username' value={formData.username} sx={{ mb: 2 }} />
                            </FormLabel>
                            <FormLabel>Password
                                <TextField onChange={onChangeHandler} type='password' size='small'  margin='normal' name='password' value={formData.password} sx={{ mb: 2 }} />
                            </FormLabel>
                        </Box>
                    </>

            </Box>
                    <Button type='submit' onClick={handleSubmit} sx={{ mt: 2 }} style={{width:'450px',margin:'0 auto'}}  variant="contained">Sign Up</Button>
                    {/* <Button sx={{ mt: 2 }} onClick={handleClick} style={{width:'450px',margin:'0 auto'}}>SIGN UP</Button> */}
    </Box>

            </form>



       </>
  )
}

export default Register






