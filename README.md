import React, { useState } from 'react'

import { Link, useNavigate } from 'react-router-dom'

function HodRegister() {

   const [formData, setformData] = useState({
        HOD :'',
        staff :'',
        firstname :'',
        lastname :'',
        email :'',
        contact :'',
        department :'',
        username :'',
        password :[],
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
            localStorage.setItem('hoduser',JSON.stringify([...first,formData]))
            setformData({
                HOD :'',
                staff :'',
                firstname :'',
                lastname :'',
                email :'',
                contact :'',
                department :'',
                username :'',
                password :'',})
        }
    }
    

  return (
    <>
    <div className='app'>
        <form>
            <div className='radio'>
                <div>
                    <label className='form-label'>select</label>
                </div>
                <div className='box1'>
                    <input type='radio' onChange={onChangeHandler} className='input'  />
                    <label htmlFor='hod' className='check'>HOD</label>
                </div>
                <div className='box2'>
                    <input type='radio'onChange={onChangeHandler} className='input'/>
                    <label htmlFor='staff' className='check'>STAFF</label>
                </div>
            </div>
            <div className='form-group'>
                <label className='form-label'>Firstname</label>
                <input name='firstname' className='form-control' onChange={onChangeHandler} value={formData.firstname}/>
            </div>
            <div className='form-group'>
                <label className='form-label'>Lastname</label>
                <input name='lastname' className='form-control' onChange={onChangeHandler} value={formData.lastname}/>
            </div>
            <div className='form-group'>
                <label className='form-label'>Email</label>
                <input name='email' className='form-control'onChange={onChangeHandler} value={formData.email}/>
            </div>
            <div className='form-group'>
                <label className='form-label'>Contact</label>
                <input type='number' name='contact' className='form-control' onChange={onChangeHandler} value={formData.contact}/>
            </div>
            <div className='form-group'>
                <label className='form-label'>Department</label>
                <select className='form-choose' name='department' value={formData.department} onChange={onChangeHandler}>
                    <option value='student'>student</option>
                    <option value='employee'>Employee</option>
                    <option value='other'>other</option>
                </select>
            </div>
            <div className='form-group'>
                <label className='form-label'>Username</label>
                <input type='text' name='username' className='form-control' onChange={onChangeHandler} value={formData.username}/>
            </div>
            <div className='form-group'>
                <label className='form-label'>Password</label>
                <input type='password' name='password' className='form-control' onChange={onChangeHandler} value={formData.password}/>
            </div>
            <div>
                <button type='button' className='btn' onClick={handleSubmit}>Register</button>
                {/* <p style={{textAlign:"center"}}>
                    Don't have an account? <Link>Sign up</Link>
                </p> */}
            </div>
            
            
        </form>
        
    </div>

    </>
  )
}

export default HodRegister;



import React, { useEffect, useState } from 'react'

import { Link, useNavigate } from 'react-router-dom';

function Hodsignin() {

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
        alert('you are succesfully login')
    }else{
        alert('invalid data')
    }
   }
   const navigate=useNavigate()
    const handleClick=()=>{
        navigate('/hodregister')
    }


  return (
    <div className='main'>
        {/* <pre>{(flag)?<h2 className='define'>you have registered succesfully</h2> : ""}</pre> */}
        <form onSubmit={handleSubmit}>
            <div className='sub-main'>
                <div>
                    <h1>Login page</h1>
                    <div>
                        <input type='text' placeholder='Username' className='name' name='username' value={inputData.username} onChange={handleData}/>
                    </div>
                    <div className='second-input'>
                        <input type='password' placeholder='Password' className='name' name='password' value={inputData.password} onChange={handleData}/>
                    </div>
                    <div className='login-button'>
                    <button type='submit'>Login</button>
                    <p onClick={handleClick} style={{textAlign:"center"}}>
                        Don't have an account? <a>Sign up</a>
                    </p>
                    </div>
                    
                </div>
            </div>
        </form>

    </div>
  )
}

export default Hodsignin