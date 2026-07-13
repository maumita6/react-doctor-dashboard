import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link, useNavigate, Outlet } from 'react-router-dom';


export default function DoctorDetails() {
  const { id } = useParams(); // Grabs "DOC004" from the URL
  const [doctor, setDoctor] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // FIXED: Added a leading slash '/' to ensure it fetches from public/doctors.json
    fetch('/doctors.json')
      .then((response) => response.json())
      .then((jsonData) => {
        // Find the single doctor object that matches the URL ID
        const matchedDoctor = jsonData.find((doc) => doc.id === id);
        setDoctor(matchedDoctor);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error loading JSON:", error);
        setLoading(false);
      });
  }, [id]); // Added [id] dependency so it re-runs if the URL parameter updates

  if (loading) return <div className="p-8 text-center">Loading doctor details...</div>;
  if (!doctor) return <div className="p-8 text-center text-red-500">Doctor not found.</div>;

  return (
    <div className="max-w-full w-full bg-white rounded-2xl shadow-xl p-8 border border-gray-300">
      {/* Back Link */}
      <Link to="/dashboard" className="text-xs font-semibold text-indigo-600 hover:underline mb-6 block">
        &larr; Back to Dashboard
      </Link>
      <h1 className="text-2xl font-bold text-gray-900">{doctor.name}</h1>
      <p className="text-indigo-600 font-medium">{doctor.specialist}</p>
      <p className="text-sm text-gray-500 mt-2">Degree: {doctor.qualification}</p>
      <p className="text-sm text-gray-500 mb4">Experience: {doctor.exp} Years</p>
      <hr />
      <p className="text-sm text-gray-500 mt-4">About me: {doctor.bio} </p>


      {/* Schedule button area */}
      <button className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700">
        <Link
          to={`/Appointment/${doctor.name}`}
          className={`block w-full text-center px-4 py-2 text-sm font-semibold rounded-lg transition-all`}
        >
          Schedule Appointment
        </Link>
      </button>
    </div>
  );
}
