import React, { useState } from 'react';
import { Link, useNavigate, Outlet, Navigate  } from 'react-router-dom';

export default function ProtectedRoute({isLoggedIn}) {

    const navigate = useNavigate();

    if (!isLoggedIn) {
        return <Navigate to="/" />;
    }

    return <Outlet />;
}