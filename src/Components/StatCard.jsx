import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate, Outlet } from 'react-router-dom';
import { DoctorContext } from '../Context/DoctorContext';



export default function StatCard({ users, query, originalUsers }) {

    const { favorites, toggleFavorite, doctors } = useContext(DoctorContext);


    return (
        <>
            <h2>Total Doctors<strong>{originalUsers.length}</strong></h2>
            <hr />
            <h4>You have searched for : {query}</h4>

            <div className="grid grid-cols-4 gap-8 sm:grid-cols-4 lg:grid-cols-4 p-6 bg-gray-50 max-width-full">
                {users.map(user => (


                    <div key={user.id} className="flex flex-col justify-between rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md">

                        <div className="flex flex-col h-full justify-between">
                            <div>
                                <div className="flex items-start justify-between gap-4">
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-900 tracking-tight">{user.name} &nbsp;
                                            <button onClick={() => toggleFavorite(user.id)
                                            }>
                                                {
                                                    favorites.includes(user.id) ? "⭐" : "☆"
                                                }
                                            </button>

                                        </h3>
                                        <p className="text-sm font-medium text-indigo-600">{user.specialist}</p>
                                        <p className="text-sm font-regular border-gray-50 pt-4">
                                            <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium border ${user.status ? 'bg-green-50 border-green-200 text-green-700' : 'bg-red-50 border-red-200 text-red-700'
                                                }`}>
                                                <span className={`h-1.5 w-1.5 rounded-full ${user.status ? 'bg-green-500' : 'bg-red-500'}`}>
                                                </span>
                                                {user.status ? "Available" : "On Leave"}
                                            </span>
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-4 space-y-1 border-t border-gray-50 pt-4">
                                    <p className="text-xs text-gray-500"><span className="font-medium text-gray-700">Degree:</span> {user.qualification}</p>
                                    <p className="text-xs text-gray-500"><span className="font-medium text-gray-700">Experience:</span> {user.exp} Years</p>
                                </div>
                            </div>

                            <div className="mt-5 pt-4 border-t border-gray-100">
                                <Link
                                    to={`/doctors/${user.id}`}
                                    className={`block w-full text-center px-4 py-2 text-sm font-semibold rounded-lg transition-all ${user.status
                                        ? 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm shadow-indigo-100'
                                        : 'bg-gray-100 text-gray-400 cursor-not-allowed pointer-events-none'
                                        }`}
                                >
                                    Book Appointment
                                </Link>

                            </div>
                        </div>

                    </div>
                ))}

            </div>

        </>
    );
}
