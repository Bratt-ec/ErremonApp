import { useNavigation } from "@react-navigation/core";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, StyleSheet, View } from "react-native";
import BotonContinuar from "../components/BotonContinuar";
import Dialogo from "../components/Dialogo";
import HeaderGame from "../components/HeaderGame";
import { Colors } from "../styles/Colors";

const LoseGame = ({ Siguiente }) => {
  const navigation = useNavigation();
  return (
    <View style={Styles.Container}>
      {/* <StatusBar style="light" /> */}
      {/* <HeaderGame name="Por un poquito" /> */}
      <View style={Styles.divContenido}></View>
      <Dialogo texto="Fallaste amigo, pero no te rindas. ¡Vuelve a intentarlo!" />
      <Image source={require("../img/OSO-TRISTE.png")} style={Styles.imgOso} />
      <BotonContinuar Texto="Continuar" Ruta={Siguiente} />
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
export default LoseGame;
