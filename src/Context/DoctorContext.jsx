import { createContext, useState } from "react";

export const DoctorContext = createContext();


export default function DoctorProvider({ children }) {

    const [favorites, setFavorites] = useState([]);

    const toggleFavorite = (doctorId) => {

        setFavorites(prev => {
            
            const alreadyFavorite = prev.includes(doctorId);

            if (alreadyFavorite) {
                return prev.filter(id => id !== doctorId);
            }
            return [...prev, doctorId];
        });

    };

    return (
        <DoctorContext.Provider value={{ favorites, toggleFavorite }} > {children} </DoctorContext.Provider>
    );
}