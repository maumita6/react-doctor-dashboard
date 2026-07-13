import React, { useState, useEffect } from 'react';
import { Link, useNavigate, Outlet } from 'react-router-dom';


// Basic Tailwind login component structure
export default function Search({ query, setQuery }) {   


    return (
        <>
            <input value={query} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:text-black"
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search ..." />

        </>
    );
}
