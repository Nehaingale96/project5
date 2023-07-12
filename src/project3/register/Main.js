import React from 'react'
// import Page from './Page'
// import Register from './Register'

import {RouterProvider } from 'react-router'
import { router } from './router/Router'

function Main() {
  return (
    <div>
         {/* <Page/> */}
        {/* <Register/> */}
        {/* <Route/> */}
        <RouterProvider router={router}/>
    </div>
  )
}

export default Main