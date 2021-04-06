import React, { useContext, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, BackHandler } from 'react-native';
import HeaderGame from '../components/HeaderGame';
import PreScreenGame from '../components/PreScreenGame';
import { css_Crucigrama } from '../styles/GameStyle';
import { AuthContext } from "../navigation/AuthProvider";
import SopaLetras from '../components/SopaLetras';

const Gm_DeOposicion = () => {
    const { preGame, setPreGame} = useContext(AuthContext);

    const backHandler = BackHandler.addEventListener("hardwareBackPress", ()=> setPreGame(true))

    useEffect(() => {
        
        return () => backHandler.remove();
    }, [])
    return ( 
        <View style={css_Crucigrama.Container}>
            <StatusBar style='light' />
            <HeaderGame name='juego de oposición' />
            {preGame ? <PreScreenGame txtDialogo='Encuentra las palabras en la siguiente sopa de letras'/> : null}
            {preGame ? null : <SopaLetras Juego='DeOposicion' Opcion1='pero' Opcion2='en cambio' Opcion3='aún' Opcion4='sin embargo' Siguiente='DeAdicion'/>}
        </View>
     );
}
 
export default Gm_DeOposicion;