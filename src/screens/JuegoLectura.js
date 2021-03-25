import React from 'react';
import { View } from 'react-native';
import HeaderGame from '../components/HeaderGame';
import PreScreenGame from '../components/PreScreenGame';
import { css_Crucigrama } from '../styles/GameStyle';

const JuegoLectura = () => {
    return ( 
        <View style={css_Crucigrama.Container}>
            <HeaderGame image='book.png' name='Juego de lectura'/>
          <PreScreenGame txtDialogo='mira el vieo y respode a la pregunta ¡Suerte!' />
        </View>
     );
}
 
export default JuegoLectura;