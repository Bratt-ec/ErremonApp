import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View, ScrollView  } from 'react-native'
import HeaderGame from '../components/HeaderGame'
import { Colors } from '../styles/Colors'
import { css_JuegoImagenes, css_MenuCuentos } from '../styles/GameStyle'

const MenuCuentos = ({navigation}) => {
    return (        
        <ScrollView>
            <View style={css_JuegoImagenes.Container}>
            <HeaderGame image="book.png" name="MENÚ DE CUENTOS" />
            <View style={css_MenuCuentos.containerCuentos} >
                
                <View style={{padding: 10, border: 'solid', borderWidth:1,borderColor: Colors.white, borderRadius: 10}}>
                    <Text style={css_MenuCuentos.tituloCuento, {fontSize: 20,color: Colors.white, fontWeight: 'bold'}}>VIDEO CUENTOS</Text>
                </View>

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
                        <Text style={css_MenuCuentos.tituloCuento}>El León y la Oruga</Text>
                    </View>
                </TouchableOpacity>

                <View style={{padding: 10, border: 'solid', borderWidth:1,borderColor: Colors.white, borderRadius: 10}}>
                    <Text style={css_MenuCuentos.tituloCuento, {fontSize: 20,color: Colors.white, fontWeight: 'bold'}}>LECTURAS</Text>
                </View>
                <TouchableOpacity style={css_MenuCuentos.CardCuento} onPress={() => navigation.navigate('CuentoPata')}>
                    <View style={css_MenuCuentos.ContainerImg}>
                        <Image source={require('../img/cuentos/pata.png')} style={css_MenuCuentos.imgCuento} />
                    </View>
                    <View style={css_MenuCuentos.containerTitulo}>
                        <Text style={css_MenuCuentos.tituloCuento}>La Patita Blanca</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={css_MenuCuentos.CardCuento} onPress={() => navigation.navigate('CuentoAna')}>
                    <View style={css_MenuCuentos.ContainerImg}>
                        <Image source={require('../img/animales/020-dog.png')} style={css_MenuCuentos.imgCuento} />
                    </View>
                    <View style={css_MenuCuentos.containerTitulo}>
                        <Text style={css_MenuCuentos.tituloCuento}>Ana y sus Perritos</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={css_MenuCuentos.CardCuento} onPress={() => navigation.navigate('CuentoTito')}>
                    <View style={css_MenuCuentos.ContainerImg}>
                        <Image source={require('../img/cuentos/cisne.png')} style={css_MenuCuentos.imgCuento} />
                    </View>
                    <View style={css_MenuCuentos.containerTitulo}>
                        <Text style={css_MenuCuentos.tituloCuento}>Tito y sus Amigos</Text>
                     </View>
                </TouchableOpacity>

                <TouchableOpacity style={css_MenuCuentos.CardCuento} onPress={() => navigation.navigate('CuentoAnimalitos')}>
                    <View style={css_MenuCuentos.ContainerImg}>
                        <Image source={require('../img/cuentos/pajaro.png')} style={css_MenuCuentos.imgCuento} />
                    </View>
                    <View style={css_MenuCuentos.containerTitulo}>
                        <Text style={css_MenuCuentos.tituloCuento}>El Cantar de los animalitos</Text>
                     </View>
                </TouchableOpacity>
            </View>      
            
        </View>
        </ScrollView>
    )
}

export default MenuCuentos

