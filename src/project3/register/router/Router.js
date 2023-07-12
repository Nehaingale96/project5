import React from 'react';
import Register from '../Register';
import Page from '../Page';
import HomePage from '../pages/HomePage';
import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import RootLayout from './RootLayout';
import HodRegister from '../HodRegister';
import Hodsignin from '../HodSignIn';
import Details from '../pages/Details';
import EmpDashboard from '../pages/EmpDashboard';
import HodDashboard from '../pages/HodDashboard';

export const router=createBrowserRouter(
    createRoutesFromElements(
       
            <Route path='/' element={<RootLayout/>}>
            <Route path='/' element={<HomePage/>}/>
            <Route path='empsignin' element={<Page/>}/>
            <Route path='empregister' element={<Register/>}/>
            <Route path='hodregister' element={<HodRegister/>}/>
            <Route path='hodsignin' element={<Hodsignin/>}/>
            <Route path='leavedetails' element={<Details/>}/>
            <Route path='empdashboard' element={<EmpDashboard/>}/>
            <Route path='hoddashboard' element={<HodDashboard/>}/>






        </Route>
    )
)