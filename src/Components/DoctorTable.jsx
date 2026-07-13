import React, { useState, useEffect, useContext } from 'react';
import { DoctorContext } from '../Context/DoctorContext';


export default function DoctorTable() {
  //  Set up component states
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { favorites, toggleFavorite } = useContext(DoctorContext);


  //  Fetch data from the API endpoint
  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        setLoading(true);
        const response = await fetch('/doctors.json');

        if (!response.ok) {
          throw new Error('Failed to retrieve data from the server.');
        }

        const data = await response.json();
        setDoctors(data);
      } catch (err) {
        setError(err.message || 'Something went wrong.');
      } finally {
        setLoading(false);
      }
    };

    fetchDoctors();
  }, []);

  //  Render Loading state
  if (loading) {
    return (
      <h2>Loading ...</h2>
    );
  }

  // Render Error state
  if (error) {
    return (
      <h2>Error ...</h2>
    );
  }

  // Render Data Grid Layout
  return (
    <div className="w-full p-6 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">

        {/* Table Title Header */}
        <div className="px-6 py-4 border-b border-gray-200 bg-white">
          <h2 className="text-xl font-bold text-gray-900">Medical Staff Directory</h2>
          <p className="text-sm text-gray-500 mt-1">A list of all active doctors, qualifications, and schedules.</p>
        </div>

        {/* Responsive Wrapper for Mobile Scrolling */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left text-sm text-gray-500">

            {/* Table Header */}
            <thead className="bg-gray-50 text-xs font-semibold uppercase tracking-wider text-gray-700 border-b border-gray-200">
              <tr>
                <th scope="col" className="px-6 py-4 font-semibold">Doctor Details</th>
                <th scope="col" className="px-6 py-4 font-semibold">Specialization & Degree</th>
                <th scope="col" className="px-6 py-4 font-semibold">Experience</th>
                <th scope="col" className="px-6 py-4 font-semibold">Availability Schedule</th>
                <th scope="col" className="px-6 py-4 font-semibold">Status</th>
              </tr>
            </thead>

            {/* Table Body - Dynamic Loop */}
            <tbody className="divide-y divide-gray-200 bg-white">
              {doctors.map((doctor) => (
                <tr key={doctor.id} className="transition-colors hover:bg-gray-50/70">

                  {/* ID, Name & Email */}
                  <td className="px-6 py-4">
                    <div className="text-xs font-mono font-medium text-gray-400 mb-0.5">{doctor.id}</div>
                    <div className="font-semibold text-gray-900 text-base">{doctor.name}&nbsp; 
                    <button onClick={() => toggleFavorite(doctor.id)}>
                     {
                        favorites.includes(doctor.id) ? "⭐": "☆"
                     }
                    </button>
                    </div>
                    <div className="text-xs text-gray-400 font-normal">{doctor.email}</div>
                  
                  </td>

                  {/* Specialist & Qualification */}
                  <td className="px-6 py-4">
                    <div className="font-medium text-indigo-600">{doctor.specialist}</div>
                    <div className="text-xs text-gray-500 mt-0.5">{doctor.qualification}</div>
                  </td>

                  {/* Experience */}
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center gap-1 font-medium text-gray-800">
                      {doctor.exp} <span className="text-xs text-gray-400 font-normal">years</span>
                    </span>
                  </td>

                  {/* Schedule Days Map */}
                  <td className="px-6 py-4">
                    <div className="flex flex-wrap gap-1.5 max-w-xs">
                      {doctor.days.map((day, index) => (
                        <span
                          key={index}
                          className="inline-block rounded-md bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-600 border border-gray-200/50"
                        >
                          {day}
                        </span>
                      ))}
                    </div>
                  </td>

                  {/* Active/Inactive Status Badge */}
                  <td className="px-6 py-4 whitespace-nowrap">

                    <span className={`h-1.5 w-1.5 rounded-full ${doctor.status === 'Active' ? 'bg-emerald-500' : 'bg-amber-500'}`} />
                    {doctor.status}
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium border ${doctor.status ? 'bg-green-50 border-green-200 text-green-700' : 'bg-red-50 border-red-200 text-red-700'
                      }`}>
                      <span className={`h-1.5 w-1.5 rounded-full ${doctor.status ? 'bg-green-500' : 'bg-red-500'}`}>

                      </span>
                      {doctor.status ? "Available" : "On Leave"}
                    </span>
                  </td>

                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </div>
    </div>
  );
}
