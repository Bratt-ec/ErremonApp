import React, { useContext, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, BackHandler } from 'react-native';
import HeaderGame from '../components/HeaderGame';
import PreScreenGame from '../components/PreScreenGame';
import { css_Crucigrama } from '../styles/GameStyle';
import { AuthContext } from "../navigation/AuthProvider";
import BaseCrucigrama from '../components/BaseCrucigrama';

const TestEvaluativo = () => {
    const { preGame, setPreGame} = useContext(AuthContext);

    const backHandler = BackHandler.addEventListener("hardwareBackPress", ()=> setPreGame(true))

    useEffect(() => {
        
        return () => backHandler.remove();
    }, [])
    return ( 
        <View style={css_Crucigrama.Container}>
            <HeaderGame name='Test Evaluativo'/>
            {preGame ? <PreScreenGame txtDialogo='Ahora veremos cuanto has aprendido ¡Suerte!'/> : null}
            {preGame ? null : <JuegoLectura />}
        </View>
     ); 
}
 
export default TestEvaluativo;

f