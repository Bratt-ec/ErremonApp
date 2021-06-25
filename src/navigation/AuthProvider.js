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
  const [ruleta, setRuleta] = useState(true);
  const [win, setWin] = useState(false);
  const [objPalabra, setobjPalabra] = useState({});
  const[palabraVocabulario, setPalabraVocabulario] = useState(1);
  const[trofeos, setTrofeos] = useState({ 
    id: '',
    nombre: '', 
    estrellas: '' ,
    tipo: '',
  })
  // CONTEO DE PREMIOS Y JUEGOS COMPLETADOS
  const[gmSopaLetras, setGmSopaLetras] = useState(0);
  const[gmCrucigrama, setGmCrucigrama] = useState(0);
  const[gmImagenes, setGmImagenes] = useState(0);
  const[gmLectura, setGmLectura] = useState(0);  
  // 
  const[participants, setparticipants] = useState([
    'DRAGÓN',
    'LIBRO',
    'REGALO',
    'GATO',
    'CANDADO',
    'FÓSFORO',
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
        setobjPalabra,
        ruleta,
        setRuleta,
        win,
        setWin,
        gmSopaLetras,
        setGmSopaLetras,
        gmCrucigrama,
        setGmCrucigrama,
        gmImagenes,
        setGmImagenes,
        gmLectura,
        setGmLectura,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
