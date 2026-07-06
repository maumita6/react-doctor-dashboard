import React, { useState, useEffect } from 'react';
import { Link, useNavigate, Outlet } from 'react-router-dom';



// Basic Tailwind login component structure
export default function StatCard() {

    // 1. Initialize state to hold the JSON data
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Path is relative to the public folder root
        fetch('/doctors.json')
            .then((response) => response.json())
            .then((jsonData) => setUsers(jsonData))
            .catch((error) => console.error("Error loading JSON:", error));
    }, []);


    return (
        <>
            <h2>Total Doctors{users.length}</h2>
            <hr />

            <div class="grid grid-cols-4 gap-8 sm:grid-cols-4 lg:grid-cols-4 p-6 bg-gray-50 max-width-full">
                {users.map(user => (


                    <div key={user.id} class="flex flex-col justify-between rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md">

                        <div>
                            <div class="flex items-start justify-between gap-4">
                                <div>
                                    <h3 class="text-lg font-bold text-gray-900 tracking-tight">{user.name}</h3>
                                    <p class="text-sm font-medium text-indigo-600">{user.specialist}</p>
                                    <p class="text-sm font-regular border-gray-50 pt-4"> {user.status}</p>
                                </div>

                            </div>
                            <div class="mt-4 space-y-1 border-t border-gray-50 pt-4">
                                <p class="text-xs text-gray-500"><span class="font-medium text-gray-700">Degree:</span> {user.qualification}</p>
                                <p class="text-xs text-gray-500"><span class="font-medium text-gray-700">Experience:</span> {user.exp} Years</p>
                            </div>
                            
                        </div>

                        

                    </div>
                ))}

            </div>

        </>
    );
}
