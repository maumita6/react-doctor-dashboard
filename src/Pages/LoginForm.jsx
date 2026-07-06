import React, { useState } from 'react';
import { Link, useNavigate, Outlet } from 'react-router-dom';

// Basic Tailwind login component structure
export default function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
        
    const goToLogin = () => {
         navigate('./dashboard');
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
            <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-md space-y-6">
                <h2 className="text-center text-3xl font-bold text-gray-900">Sign In</h2>
                
                <button class="px-5 py-2.5 bg-green-600 text-white font-medium text-sm rounded-lg hover:bg-orange-700" 
                    onClick={goToLogin}
                    >
                        Go to dashboard                    
                    </button>
            </div>
        </div>
    );
}
