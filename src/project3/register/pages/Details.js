import { Box, Button, FormLabel, TextField, TextareaAutosize } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { FirstContext } from './Context';
import { useNavigate } from 'react-router';

function Details() {

    const navigate=useNavigate()
    const {state}=useContext(FirstContext)
    const {index}=state
//    console.log(index);
    

    const [first, setfirst] = useState({
        Fromdate:'',
        ToDate:'',
        LeaveReason:'',
        empName:index,
        leaveStatus :'pending',
        leaveCount :0
    })
    const days = new Date(first.Fromdate)
    const date = new Date(first.ToDate)
    const diff =Math.abs(days-date)
    console.log(diff);
    const num = Number(Math.ceil(diff/(1000 * 60* 60 *24 )))
    let displayLeave ;
    if(num > 0){
        displayLeave = num
    }else{
        displayLeave =0
    }


    console.log(first);
    console.log(first.empName);
    const [toggle, setToggle] = useState(false)

    useEffect(() => {
        let getData
        try {
             getData=JSON.parse(localStorage.getItem('leavedetails')) || []
        } catch (error) {
            getData=null
        }
        setDetails(getData)
    }, [toggle])
    
    const [detail, setDetails] = useState([])
    console.log(detail);
    console.log(first);
    const handleChange=(e)=>{
        setfirst((prev)=>({...prev,[e.target.name]:e.target.value}))
    }
    
    const handleSubmit=(e)=>{
        setDetails([...detail,first])
        e.preventDefault()
        if(first.Fromdate === ""){
            alert('please fill the from date')
        }else if(first.ToDate === ''){
            alert('please fill the To date')
        }else if(first.LeaveReason === ''){
            alert('please fill the reason')
        }else{
            localStorage.setItem('leavedetails',JSON.stringify([...detail,{...first,id:uuidv4()}]))
            setToggle(!toggle)
            setfirst({
                Fromdate:'',
                ToDate:'',
                LeaveReason:'',
               
            })
            navigate('/dashboard/emp')
        }
    }

  return (
    <>
        {/* <form>
            <Box borderRadius="15px" border={"0.25px solid #ccc"} alignItems={"center"} padding={"40px"} display={"flex"} flexDirection={"column"} maxWidth={"450px"} margin={"60px auto"} boxShadow={"5px 5px 10px #ccc"} sx={{ ":hover": { boxShadow: "10px 10px 20px #ccc" } }}>
                <FormLabel><h5>From</h5>
                    <TextField type='date' value={first.Fromdate} onChange={handleChange}  size='small' sx={{ mb: 2 }} name='Fromdate' />
                </FormLabel>
                <FormLabel><h5>To</h5>
                    <TextField type='date' value={first.ToDate} onChange={handleChange} size='small'  sx={{ mb: 2 }} name='ToDate'/>
                </FormLabel>
                <div onChange={handleChange} name='leaveCount' type='number' value={num}>Number of Days : {displayLeave}  </div>
                <FormLabel>Leave Reason
                <TextareaAutosize type="text" name='LeaveReason' style={{ width: "400px" }} onChange={handleChange}  value={first.LeaveReason} minRows={3}></TextareaAutosize>
                </FormLabel>
                <Button onClick={handleSubmit} type='button'>Apply Leave</Button>
            </Box>
        </form> */}

<form>
    <div className="container">
        <div className="row justify-content-center mt-5">
            <div className="col-md-5">
                <div className="border rounded p-4 shadow">
                    {/* <h5 className="mb-4">Leave Application Form</h5> */}
                    <div className="form-group">
                        <label htmlFor="Fromdate"><h6 style={{marginLeft:'50px'}}>From</h6></label>
                        <input type="date" style={{width:'300px',marginLeft:'50px'}} className="form-control" value={first.Fromdate} onChange={handleChange} name="Fromdate" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="ToDate"><h6 style={{marginLeft:'50px'}}>To</h6></label>
                        <input type="date" style={{width:'300px',marginLeft:'50px'}} className="form-control" value={first.ToDate} onChange={handleChange} name="ToDate" />
                    </div>
                    <div className="form-group">
                        <label><h6 style={{marginLeft:'50px',marginTop:'10px'}}>Number of Days: {displayLeave}</h6></label>
                        {/* Input for leaveCount here */}
                    </div>
                    <div className="form-group">
                        <label htmlFor="LeaveReason"><h6 style={{marginLeft:'50px'}}>Leave Reason</h6></label>
                        <textarea className="form-control" style={{ width: "300px",marginLeft:'50px' }} onChange={handleChange} value={first.LeaveReason} name="LeaveReason" rows="3"></textarea>
                    </div>
                    <button className="btn btn-primary" style={{marginLeft:'140px'}} onClick={handleSubmit} type="button">Apply Leave</button>
                </div>
            </div>
        </div>
    </div>
</form>

    </>
  )
}

export default Details

