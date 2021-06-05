import React, { useState, createContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(null);
  const [personaje, setPersonaje] = useState(null);
  const [preGame, setPreGame] = useState(true);
  const [endGame, setEndGame] = useState(true);
  const [playSound, setPlaySound] = useState(true);
  const [onVocabulario, setOnVocabulario] = useState(false);
  const [itemRuleta, setItemRuleta] = useState(null);
  const [objPalabra, setobjPalabra] = useState({});
  const[palabraVocabulario, setPalabraVocabulario] = useState(1);
  const[trofeos, setTrofeos] = useState({ 
    id: '',
    nombre: '', 
    estrellas: '' ,
    tipo: '',
  })
  const[participants, setparticipants] = useState([
    'DRAGON',
    'LIBRO',
    'REGALO',
    'GATO',
    'CANDADO',
    'FOSFORO',
    'PLATO',
    'TAPILLA',
  ])
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
        setOnVocabulario,
        participants,
        setparticipants,
        objPalabra,
        setobjPalabra
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
