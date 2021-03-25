import React from 'react';
import { View } from 'react-native';
import HeaderGame from '../components/HeaderGame';
import PreScreenGame from '../components/PreScreenGame';
import { css_Crucigrama } from '../styles/GameStyle';

const Crucigrama = () => {
    return ( 
        <View style={css_Crucigrama.Container}>
            <HeaderGame image='book.png' name='CRUCIGRAMA'/>
             <PreScreenGame txtDialogo='Demuestra tus habilidades completando el siguiente crucigrama' />
        </View>
     );
}
 
export default Crucigrama;