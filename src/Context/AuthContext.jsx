import { React, createContext, useState } from "react";

export const AuthContext = createContext(); // treat it like wrapper


export default function AuthProvider({ children }) {
    
    console.log(children);

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <AuthContext.Provider
            value={{
                isLoggedIn,
                setIsLoggedIn
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}