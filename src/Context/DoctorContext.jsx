import React, { useState, useEffect, useContext, createContext } from 'react';

export const DoctorContext = createContext();


export default function DoctorProvider({ children }) {

    const [favorites, setFavorites] = useState([]);
    
    const [doctors, setDoctors] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const toggleFavorite = (doctorId) => {

        setFavorites(prev => {

            const alreadyFavorite = prev.includes(doctorId);

            if (alreadyFavorite) {
                return prev.filter(id => id !== doctorId);
            }
            return [...prev, doctorId];
        });

    };

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

    return (
        <DoctorContext.Provider value={{ favorites, toggleFavorite, doctors }} > {children} </DoctorContext.Provider>
    );
}