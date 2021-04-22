import React, { useState, createContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(null);
  const [personaje, setPersonaje] = useState(null);
  const [preGame, setPreGame] = useState(true);
  const [endGame, setEndGame] = useState(true);
  const [playSound, setPlaySound] = useState(false);
  const [onVocabulario, setOnVocabulario] = useState(false);
  const [itemRuleta, setItemRuleta] = useState(null);
  const[palabraVocabulario, setPalabraVocabulario] = useState(1);
  const[trofeos, setTrofeos] = useState({ 
    id: '',
    nombre: '', 
    estrellas: '' 
  })
  const[juegosCompletados, setJuegosCompletados] = useState(0);
  return (
    <AuthContext.Provider
      value={{
        usuario, 
        setUsuario,
        personaje,
        setPersonaje,
        preGame,
        setPreGame,        
        endGame,
        setEndGame,
        trofeos,
        setTrofeos,
        juegosCompletados,
        setJuegosCompletados,
        playSound,
        setPlaySound,
        itemRuleta,
        setItemRuleta,
        palabraVocabulario,
        setPalabraVocabulario,
        onVocabulario, 
        setOnVocabulario
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
