import { StatusBar } from 'expo-status-bar';
import React, { useContext} from 'react';
import { Image, StyleSheet, Text, View } from "react-native";
import BotonContinuar from '../components/BotonContinuar';
import Dialogo from "../components/Dialogo";
import HeaderGame from '../components/HeaderGame';
import { AuthContext } from '../navigation/AuthProvider';
import { Colors } from "../styles/Colors";

export const Trofeo = ({Nombre})=>(
    <View style={Styles.divTrofeo}>
       <Text style={Styles.alerta}>¡Felicidades! Recibiste un trofeo:</Text>
      <Image source={require('../img/trofeo.png')} style={Styles.Icono}/>
      <Text style={Styles.nombreTrofeo}>{Nombre}</Text>
    </View>
  )
const WinGame = ({Siguiente, Win , NombreTrofeo}) => {

  
    return ( 
        <View style={Styles.Container}>
        <View style={Styles.divContenido}></View>
        {/* <StatusBar style='light' /> */}
        {/* <HeaderGame name='muy bien' /> */}
        <Dialogo texto="¡Muy bien, lo lograste! Sin duda Eres un gran jugador" />
        <Image source={require("../img/oso_3.png")} style={Styles.imgOso} />
        { (Win) ? <Trofeo Nombre={NombreTrofeo} /> : null }
        <BotonContinuar Texto="Continuar" Ruta={Siguiente}/>
      </View>
     );
}
const Styles = StyleSheet.create({
    Container: {
      flex: 1,
      backgroundColor: Colors.blue_dark,
    },
    divContenido: {
      backgroundColor: Colors.white,
      opacity: 0.4,
      height: "100%",
      width: "100%",
      padding: "4%",
      position: "absolute",
    },
    imgOso: {
      width: 160,
      height: 200,
      alignSelf: "flex-end",
    },
    divTrofeo:{
      backgroundColor: Colors.turquesa,
      padding: 8,
      width: '80%',
      alignSelf: 'center',
      borderRadius: 10
    },
    nombreTrofeo:{
      color: Colors.blue_dark,
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center'
    },
    alerta:{
      fontSize: 15,
      fontWeight: 'bold',
      textAlign: 'center'
    },
    Icono: {
      width: 40,
      height: 40,
      alignSelf: 'center'
  }
  });
export default WinGame;