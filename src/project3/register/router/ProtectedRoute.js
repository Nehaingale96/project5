import React from 'react'
import { Navigate } from 'react-router'

function ProtectedRoute({children,allowedRoles}) {
console.log(allowedRoles)
    const user1=JSON.parse(localStorage.getItem("userDataBase"))
    console.log(user1)
    let data={role: user1.role}
   
  return (
    <div>

{data.role ===allowedRoles ? children: <Navigate to="/login" replace/>}

    </div>
  )
}

export default ProtectedRoute