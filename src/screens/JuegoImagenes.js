import React from 'react';
import { Image, Text, View } from 'react-native';
import Boton from '../components/Boton';
import HeaderGame from '../components/HeaderGame';
import { css_JuegoImagenes } from '../styles/GameStyle';

const JuegoImagenes = () => {
    return ( 
        <View style={css_JuegoImagenes.Container}>
             <HeaderGame image='book.png' name='JUEGO DE IMÁGENES'/>
             <Image source={require('../img/Rueda.png')}  style={css_JuegoImagenes.imgRuleta}/>
             <Boton texto='Girar rueda' />
        </View>
     );
}
 
export default JuegoImagenes;