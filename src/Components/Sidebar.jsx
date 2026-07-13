import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate, Outlet } from 'react-router-dom';
import { DoctorContext } from '../Context/DoctorContext';


export default function Sidebar({setIsLoggedIn}) {
  const [isOpen, setIsOpen] = useState(false);
  const { favorites, toggleFavorite, doctors } = useContext(DoctorContext);


  const navigate = useNavigate();

  const goToDashboard = (event) => {
    event.preventDefault()
    event.stopPropagation();
    navigate('./dashboard');
  };

  const goToDoctorListPage = (event) => {
    event.preventDefault()
    event.stopPropagation();
    navigate('./doctors');
  };

  const logoutPage = (event) => {
    event.preventDefault()
    event.stopPropagation();
    setIsLoggedIn(false);
    navigate('./');
  };


  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">

      {/* Sidebar Container */}
      <aside className={`
        fixed inset-y-0 left-0 z-40 w-64 bg-gray-900 text-white transform transition-transform duration-300 ease-in-out
        md:relative md:translate-x-0
        ${isOpen ? 'translate-x-0' : '-translate-x-0.5'}
      `}>
        {/* Brand / Logo */}
        <div className="h-16 flex items-center justify-center border-b border-gray-800 px-6">
          <span className="text-xl font-bold tracking-wider text-indigo-400">Dashboard</span>
        </div>

        {/* Navigation Links */}
        <nav className="mt-6 px-4 space-y-1">
          <a href="#" onClick={goToDashboard} className="flex items-center px-4 py-2.5 text-sm font-medium rounded-lg bg-gray-800 text-white">
            <svg className="mr-3 h-5 w-5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1px 1px 0 001 1h3m10-11l2 2m-2-2v10a1px 1px 0 01-1 1h-3m-6 0a1px 1px 0 001-1v-4a1px 1px 0 011-1h2a1px 1px 0 011 1v4a1px 1px 0 001 1m-6 0h6" />
            </svg>
            Home
          </a>

          <a href="#" onClick={goToDoctorListPage} className="flex items-center px-4 py-2.5 text-sm font-medium rounded-lg text-gray-300 hover:bg-gray-800 hover:text-white transition-colors">
            <svg className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            Doctors
          </a>


          <a href="#" onClick={logoutPage} className="flex items-center px-4 py-2.5 text-sm font-medium rounded-lg text-gray-300 hover:bg-gray-800 hover:text-white transition-colors">
            <svg className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Logout
          </a>
          <hr className="mt-8 mb-8"/>
          <Link
          to={`/favorites/`}
          className={`block w-full text-center px-4 py-2 text-red-400 text-sm font-semibold rounded-lg transition-all`}
        > Favorites &nbsp;&nbsp;{favorites.length}
        </Link>
        </nav>
        <button
          className={`
        group flex items-center justify-center gap-2 w-full px-6 py-3 mt-16 rounded-xl font-semibold text-sm
        bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-500/10
        transition-all duration-200 select-none
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-3
      `}
        ><span>
          <Link
          to={`/NewAppointment/`}
          className={`block w-full text-center px-4 py-2 text-sm font-semibold rounded-lg transition-all`}
        >
Schedule Appointment
        </Link>
          
          </span></button>
      </aside>
    </div>
  );
}
