import React, { useContext} from 'react';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import HeaderGame from '../components/HeaderGame';
import PreScreenGame from '../components/PreScreenGame';
import { css_Crucigrama } from '../styles/GameStyle';
import { AuthContext } from "../navigation/AuthProvider";

const Gm_DeOposicion = () => {
    const { preGame, setPreGame} = useContext(AuthContext);
    return ( 
        <View style={css_Crucigrama.Container}>
            <StatusBar style='light' />
            <HeaderGame name='juego de oposición' />
            {preGame ? <PreScreenGame txtDialogo='Encuentra las palabras en la siguiente sopa de letras'/> : null}
            <View>
                
            </View>
        </View>
     );
}
 
export default Gm_DeOposicion;