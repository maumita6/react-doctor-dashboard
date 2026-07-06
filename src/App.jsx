import * as React from 'react';
import { useState } from 'react';
import ReactDOM from "react-dom/client";
import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from 'react-router-dom';

import Sidebar from './Components/Sidebar';
import MainLayout from './Layouts/MainLayout';
import LoginForm from './Pages/LoginForm';
import DashboardPage from './Pages/DashboardPage';
import DoctorListPage from './Pages/DoctorListPage';


import NoPage from './NoPage';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginForm />} 
        />
        <Route element={<MainLayout />}>
            <Route path="/dashboard" 
                  element={<DashboardPage/>}
            />  
            <Route path="/doctors" 
                  element={<DoctorListPage/>}
            />         
        </Route>
      </Routes>

      <div className="h-100 bg-blue-100 flex items-center justify-center">
        <h1 className="text-4xl font-bold text-blue-600">Hospital Dashboard</h1>
      </div>

      <LoginForm />
    </>
  );
}

export default App;
