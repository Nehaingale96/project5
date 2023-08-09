import React from 'react';
import Register from '../Register';
import Page from '../Page';
import HomePage from '../pages/HomePage';
import { Route, Routes, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import RootLayout from './RootLayout';
import HodRegister from '../HodRegister';
import Hodsignin from '../HodSignIn';
import Details from '../pages/Details';
import EmpDashboard from '../pages/EmpDashboard';
import HodDashboard from '../pages/HodDashboard';
import Loginpage from '../pages/Loginpage';
import ProtectedRoute from './ProtectedRoute';

export const router = createBrowserRouter(
    createRoutesFromElements(

        <Route path='/' element={<RootLayout />}>
            <Route index element={<HomePage />} />
            <Route path='register' element={<Register />} />
            <Route path='login' element={<Loginpage />} />
            <Route path='leavedetails' element={<Details />}/>
            <Route path='dashboard/emp' element={ 
                 <ProtectedRoute allowedRoles={'emp'}>
                     <EmpDashboard/>
                 </ProtectedRoute>
            }/>
             <Route path='dashboard/hod' element={ 
                <ProtectedRoute allowedRoles={'hod'}>
                   <HodDashboard/>
                </ProtectedRoute>
            }/>

    


        </Route>
    )
)