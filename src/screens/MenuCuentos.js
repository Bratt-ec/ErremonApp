import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import HeaderGame from '../components/HeaderGame'
import { css_JuegoImagenes, css_MenuCuentos } from '../styles/GameStyle'

const MenuCuentos = ({navigation}) => {
    return (
        <View style={css_JuegoImagenes.Container}>
            <HeaderGame image="book.png" name="MENÚ DE CUENTOS" />
            <View style={css_MenuCuentos.containerCuentos} >
                <TouchableOpacity style={css_MenuCuentos.CardCuento} onPress={() => navigation.navigate('CuentoOso')}>
                    <View style={css_MenuCuentos.ContainerImg}>
                        <Image source={require('../img/cuentos/oso.png')} style={css_MenuCuentos.imgCuento} />
                    </View>
                    <View style={css_MenuCuentos.containerTitulo}>
                        <Text style={css_MenuCuentos.tituloCuento}>El Osito que no sabía leer</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={css_MenuCuentos.CardCuento} onPress={() => navigation.navigate('CuentoLeon')}>
                    <View style={css_MenuCuentos.ContainerImg}>
                        <Image source={require('../img/cuentos/leon.png')} style={css_MenuCuentos.imgCuento} />
                    </View>
                    <View style={css_MenuCuentos.containerTitulo}>
                        <Text style={css_MenuCuentos.tituloCuento}>El León y el Conejo</Text>
                    </View>
                </TouchableOpacity>
            </View>      
            
        </View>
    )
}

export default MenuCuentos

