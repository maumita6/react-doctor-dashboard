import React, { useState } from 'react';
import { useContext } from 'react';
import { Link, useNavigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';


// Basic Tailwind login component structure
export default function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //console.log(setIsLoggedIn);

    const { setIsLoggedIn, setUser } = useContext(AuthContext);


    //console.log(AuthContext);

    const navigate = useNavigate();

    console.log('Login setIsLoggedIn', setIsLoggedIn);

    const goToLogin = () => {
        {/* setIsLoggedIn(true); // done with prop drilling*/ }
        setIsLoggedIn(true);
        setUser(
            { id: 1, 
             name: "Jane Doe",  
             role: "Patient"
            });
        navigate('/dashboard');
    };

    return (
        <>

<h1 className="flex h-200 items-center justify-center text-4xl font-bold text-blue-600">
  Hospital Dashboard
</h1>

<div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
  <div className="w-full max-w-md space-y-6 rounded-xl bg-white p-8 shadow-md">
    <h2 className="text-center text-3xl font-bold text-gray-900">Sign In</h2>

    <button
      className="rounded-lg bg-green-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-orange-700"
      onClick={goToLogin}
    >
      Go to dashboard
    </button>
  </div>
</div>

        </>
    );
}
