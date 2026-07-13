import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Link, useNavigate, Outlet } from 'react-router-dom';
import { DoctorContext } from '../Context/DoctorContext';


export default function Favorites() {

    const { doctors, favorites, toggleFavorite } = useContext(DoctorContext);
    console.log(favorites);
    //const isFavorite = favorites.includes(users.id);
    const favoriteDoctors = doctors.filter(doctor => favorites.includes(doctor.id));

    return (
        <>
            <h1 className="text-3xl font-bold text-blue-600 flex h-200 items-center justify-center">Favorite Doctors
            </h1>
            <ul>
                {favoriteDoctors.map(doc => (
                    <li>
                        <p className="text-sm font-medium text-indigo-600">{doc.name}</p>
                    </li>
                )

                )}
            </ul>

        </>
    )

}
