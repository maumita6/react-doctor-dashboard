import React, { useState } from 'react';
import  { useContext } from 'react';
import { Link, useNavigate, Outlet, Navigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';

export default function ProtectedRoute() {

    const { isLoggedIn } = useContext(AuthContext);
    
    const navigate = useNavigate();

    if (!isLoggedIn) {
        return <Navigate to="/" />;
    }


    return <Outlet />;
}