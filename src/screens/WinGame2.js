import { StatusBar } from 'expo-status-bar';
import React, { useContext} from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import BotonContinuar from '../components/BotonContinuar';
import Dialogo from "../components/Dialogo";
import HeaderGame from '../components/HeaderGame';
import { AuthContext } from '../navigation/AuthProvider';
import { Colors } from "../styles/Colors";

export const Trofeo = ({Nombre})=>(
    <View style={Styles.divTrofeo}>
       <Text style={Styles.alerta}>¡Felicidades! Recibiste una medalla:</Text>
      <Image source={require('../img/medal.png')} style={Styles.Icono}/>
      <Text style={Styles.nombreTrofeo}>{Nombre}</Text>
    </View>
  )
const WinGame2 = ({Siguiente, Win , NombreTrofeo, TextoDialogo}) => {
  const { setPreGame,setWin, setRuleta } = useContext(AuthContext)
  
    return ( 
        <View style={Styles.Container}>
        <View style={Styles.divContenido}></View>
        {/* <StatusBar style='light' /> */}
        {/* <HeaderGame name='muy bien' /> */}
        {(TextoDialogo)? <Dialogo texto={TextoDialogo}/> :<Dialogo texto="¡Muy bien, lo lograste! Sin duda Eres un gran jugador" />}
        <Image source={require("../img/oso_3.png")} style={Styles.imgOso} />
        { (Win) ? <Trofeo Nombre={NombreTrofeo} /> : null }
        <TouchableOpacity
        style={css_Boton.btnOpcion}
        onPress={() =>{
            setRuleta(true);
            setPreGame(true);
            setWin(false);
        }}
        >
            <View style={css_Boton.divIcon}>
                <Image
                source={require("../img/mando.png")}
                style={css_Boton.iconOpcion}
                />
            </View>
        <Text style={css_Boton.txtOpcion}>Jugar Otra vez</Text>
        </TouchableOpacity>       
        <BotonContinuar Texto="Ir al Menú" Ruta={Siguiente} />
      </View>
     );
}
const css_Boton = StyleSheet.create({
    btnOpcion: {
      flexDirection: "row",
      backgroundColor: Colors.turquesa,
      padding: 4,
      width: "66%",
      borderRadius: 30,
      alignSelf: "center",
      alignItems: "center",
      marginTop: "8%",
      margin: "2%",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 6,
      },
      shadowOpacity: 0.37,
      shadowRadius: 7.49,
  
      elevation: 12,
    },
    divIcon: {
      backgroundColor: Colors.yellow,
      width: "24%",
      height: 50,
      borderRadius: 30,
    },
    iconOpcion: {
      resizeMode: "contain",
      width: "75%",
      height: 50,
      alignSelf: "center",
    },
    txtOpcion: {
      fontSize: 20,
      color: Colors.yellow,
      fontWeight: "bold",
      textShadowRadius: 3,
      textShadowColor: "black",
      marginHorizontal: "2%",
      textShadowOffset: { width: 1, height: 1 },
      textTransform: "uppercase",
    },
  });

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
      width: 100,
      height: 150,
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
export default WinGame2;