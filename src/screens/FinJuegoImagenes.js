import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Boton from "../components/Boton";
import Dialogo from "../components/Dialogo";
import HeaderGame from "../components/HeaderGame";
import { Colors } from "../styles/Colors";
import { css_JuegoImagenes, css_Vocabulario } from "../styles/GameStyle";

const FinJuegoImagenes = ({navigation}) => {
  return (
    <View style={css_JuegoImagenes.Container}>
      <HeaderGame image="book.png" name="JUEGO DE IMÁGENES" />
      <View style={Styles.Container}>
      <View style={Styles.divContenido}></View>
      <Dialogo texto='Has termnado toda la ruleta, ERES TODO UN CRACK' />
      <Image source={require("../img/oso_game_6.png")} style={Styles.imgOso} />
      <TouchableOpacity
      style={css_Boton.btnOpcion}
      onPress={() => navigation.navigate('Menu')}
    >
      <View style={css_Boton.divIcon}>
        <Image
          source={require("../img/mando.png")}
          style={css_Boton.iconOpcion}
        />
      </View>
      <Text style={css_Boton.txtOpcion}>Continuar</Text>
    </TouchableOpacity>
    </View>
    </View>
  );
};

export default FinJuegoImagenes;
const css_Boton = StyleSheet.create({
    btnOpcion: {
      flexDirection: "row",
      backgroundColor: Colors.turquesa,
      padding: 4,
      width: "66%",
      borderRadius: 30,
      alignSelf: "center",
      alignItems: "center",
      marginTop: "20%",
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
      fontSize: 24,
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
      width: 160,
      height: 200,
      alignSelf: "flex-end",
    },
  });
