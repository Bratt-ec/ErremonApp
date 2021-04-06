import React, { useContext, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, BackHandler } from 'react-native';
import HeaderGame from '../components/HeaderGame';
import PreScreenGame from '../components/PreScreenGame';
import { css_Crucigrama } from '../styles/GameStyle';
import { AuthContext } from "../navigation/AuthProvider";
import BaseCrucigrama from '../components/BaseCrucigrama';

const Gm_Colores = () => {
    const { preGame, setPreGame} = useContext(AuthContext);

    const backHandler = BackHandler.addEventListener("hardwareBackPress", ()=> setPreGame(true))

    useEffect(() => {
        
        return () => backHandler.remove();
    }, [])
    return ( 
        <View style={css_Crucigrama.Container}>
        <StatusBar style='light' />
        <HeaderGame name='Crucigrama de frutas' />
        {preGame ? <PreScreenGame txtDialogo='Completa correctamente las palabras del siguiente crucigrama'/> : null}
        {preGame ? null : <BaseCrucigrama Tipo='Colores'/>}
    </View>
     );
}
 
export default Gm_Colores;