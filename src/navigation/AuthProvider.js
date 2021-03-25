import React, { useState, createContext } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({children}) =>{
    const[usuario, setUsuario] = useState(null);
    const[personaje, setPersonaje] = useState(null);
    const[preGame, setPreGame] = useState(true);
    return(
        <AuthContext.Provider
            value={{
                usuario,
                setUsuario,
                personaje,
                setPersonaje,
                preGame,
                setPreGame
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}



