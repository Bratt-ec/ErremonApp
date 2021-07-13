import React from "react";
import { Image, StyleSheet, View } from "react-native";
import Boton from "../components/Boton";
// import Dialogo from "../components/Dialogo";
import { Colors } from "../styles/Colors";
import { Dialogo } from "./Dialogo";

const PreScreenGame = ({ txtDialogo }) => {
  return (
    <View style={Styles.Container}>
      <View style={Styles.divContenido}></View>
      <Dialogo texto={txtDialogo} />
      <Image source={require("../img/oso_game_6.png")} style={Styles.imgOso} />
      <Boton texto="Continuar" />
    </View>
  );
};

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
export default PreScreenGame;
