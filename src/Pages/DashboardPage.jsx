import { Link, useNavigate, Outlet } from 'react-router-dom';
import StatCard from "../Components/StatCard";
import Search from "../Components/Search";
import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';


function DashboardPage() {

  const [users, setUsers] = useState([]);  
  const [query, setQuery] = useState("");
  const { user } = useContext(AuthContext);


  useEffect(() => {
    // Path is relative to the public folder root
    fetch('/doctors.json')
        .then((response) => response.json())
        .then((jsonData) => setUsers(jsonData))
        .catch((error) => console.error("Error loading JSON:", error));
}, []);

const filteredDoctors = users.filter(doctor =>
  doctor.name.toLowerCase().includes(query.toLowerCase())).slice(0,4);


  return (
    <div className="flex flex-col gap-4">
      <h2>Hello {user?.name}</h2>
      <div className="bg-slate-100 p-4 text-white">
        <Search query={query} setQuery={setQuery}/>
      </div>
      
      <div className="bg-transparent p-4">
        <StatCard users={filteredDoctors} originalUsers={users}  query={query}/></div>
      
    </div>
  );
}

export default DashboardPage;
