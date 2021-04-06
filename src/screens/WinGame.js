import { StatusBar } from 'expo-status-bar';
import React, { useContext} from 'react';
import { Image, StyleSheet, View } from "react-native";
import BotonContinuar from '../components/BotonContinuar';
import Dialogo from "../components/Dialogo";
import HeaderGame from '../components/HeaderGame';
import { AuthContext } from '../navigation/AuthProvider';
import { Colors } from "../styles/Colors";

const WinGame = () => {
  const { preGame, setPreGame} = useContext(AuthContext);
    return ( 
        <View style={Styles.Container}>
        <View style={Styles.divContenido}></View>
        <StatusBar style='light' />
        <HeaderGame name='muy bien' />
        <Dialogo texto="¡Muy bien, lo lograste! Sin duda Eres un gran jugador" />
        <Image source={require("../img/oso_3.png")} style={Styles.imgOso} />
        <BotonContinuar Texto="Continuar" Ruta='Menu'/>
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
  });
export default WinGame;