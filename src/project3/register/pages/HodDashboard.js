import React, { useEffect, useState } from 'react'

function HodDashboard() {

    const [info1, setinfo1] = useState([])
    const [info2, setinfo2] = useState([])
    const [info3, setinfo3] = useState([])

    const [toggle, settoggle] = useState(false)

    useEffect(() => {
        const data1 =JSON.parse(localStorage.getItem('leavedetails'))
        const data2 =JSON.parse(localStorage.getItem('user'))
        const data3 =JSON.parse(localStorage.getItem('hoduser'))
        setinfo1(data1)
        setinfo2(data2)
        setinfo3(data3)
        
    }, [toggle])

    const handleApprove=(id)=>{
        const dataApprove =info1.filter((item)=>item.id !== id)
        console.log(dataApprove);
        const infoApprove =info1.find((item)=>{
            return (
                item.id === id
            )
        })
        localStorage.setItem('leavedetails',JSON.stringify([...dataApprove,{...infoApprove,leaveStatus:'Approved'}]))
        settoggle(!toggle)
    }
    

  return (
    <>
        <div className='container d-flex justify-content-center flex-wrap col-10'>
        {info1 && info1.map((item)=>{
            return (
                <div style={{border:'1px solid black',width:'350px',margin:'100px 20px 30px 0',padding:'19px 30px 19px 30px',textAlign:'center',borderRadius:'10px', boxShadow: "10px 10px 20px gray"}}>
                    {<h5> empName :  {item.empName}</h5>}
                    {<h5> Fromdate :  {item.Fromdate}</h5>}
                    {<h5> ToDate:  {item.ToDate}</h5>}
                    {<h5> LeaveReason:  {item.LeaveReason}</h5>}
                  
                    <div style={{width:'300px',margin:'20px 0 auto',textAlign:'center',justifyContent:'center',gap:'15px'}} className='d-flex'>
                        <button onClick={()=>handleApprove(item.id)} style={{border:'1px solid red',width:'90px',backgroundColor:'green',color:'white',padding:'7px 5px 10px 5px',border:'none',borderRadius:'7px'}}>Approve</button>
                        <button style={{border:'1px solid red',width:'90px',backgroundColor:'red',color:'white',padding:'7px 5px 10px 5px',border:'none',borderRadius:'7px'}}>Reject</button>
                    </div>
                </div>
            )
        })}
        </div>
    </>
  )
}

export default HodDashboard