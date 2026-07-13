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
import DoctorDetails from './Pages/DoctorDetails';
import AppointmentForm from './Pages/Appointment';
import NewAppointmentForm from './Pages/NewAppointment';
import ProtectedRoute from './Pages/ProtectedRoute';


import NoPage from './NoPage';


function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);


  return (
    <>
      <Routes>
        <Route path="/" element={<LoginForm setIsLoggedIn={setIsLoggedIn} />} />

        <Route element={<ProtectedRoute isLoggedIn={isLoggedIn}/>}
        >
            <Route element={<MainLayout setIsLoggedIn={setIsLoggedIn} />}>
              {/* Clean up the slashes for the child sub-routes */}
              <Route path="dashboard" element={<DashboardPage />} />
              <Route path="doctors" element={<DoctorListPage />} />
              <Route path="doctors/:id" element={<DoctorDetails />} />
              <Route path="appointment/:name" element={<AppointmentForm />} />
              <Route path="newappointment" element={<NewAppointmentForm />} />

            </Route>
          </Route>

      </Routes>




    </>
  );
}

export default App;
