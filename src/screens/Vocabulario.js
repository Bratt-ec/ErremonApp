import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import HeaderGame from '../components/HeaderGame';
import { css_JuegoImagenes, css_Vocabulario } from '../styles/GameStyle';

const Vocabulario = () => {
    return ( 
        <View style={css_JuegoImagenes.Container}>
             <HeaderGame image='book.png' name='VOCABULARIO'/>
           <View style={css_Vocabulario.Mensaje}>
               <Text style={css_Vocabulario.txtMensaje}>Captura las cajitas y forma la palabra</Text>
               <Image source={require('../img/oso_game_7.png')} style={css_Vocabulario.imgOso}/>
           </View>

           <View style={css_Vocabulario.totalCajas}>
               <Image source={require('../img/sorpresa.png')} style={css_Vocabulario.imgTotal}/>
                <Text style={css_Vocabulario.txtCajas}>CAJAS: 0/6</Text>
            </View>

            <View style={css_Vocabulario.containerCajas}>
            <TouchableOpacity style={css_Vocabulario.divCajas}>
                <View style={css_Vocabulario.caja}>
                    <Image source={require('../img/pregunta.png')}  style={css_Vocabulario.imgCaja}/>
                </View>
            </TouchableOpacity>
            
            <TouchableOpacity style={css_Vocabulario.divCajas}>
                <View style={css_Vocabulario.caja}>
                    <Image source={require('../img/pregunta.png')}  style={css_Vocabulario.imgCaja}/>
                </View>
            </TouchableOpacity>
            
            <TouchableOpacity style={css_Vocabulario.divCajas}>
                <View style={css_Vocabulario.caja}>
                    <Image source={require('../img/pregunta.png')}  style={css_Vocabulario.imgCaja}/>
                </View>
            </TouchableOpacity>
            
            <TouchableOpacity style={css_Vocabulario.divCajas}>
                <View style={css_Vocabulario.caja}>
                    <Image source={require('../img/pregunta.png')}  style={css_Vocabulario.imgCaja}/>
                </View>
            </TouchableOpacity>
            
            <TouchableOpacity style={css_Vocabulario.divCajas}>
                <View style={css_Vocabulario.caja}>
                    <Image source={require('../img/pregunta.png')}  style={css_Vocabulario.imgCaja}/>
                </View>
            </TouchableOpacity>
            </View>
           
        </View>
     );
}
 
export default Vocabulario;