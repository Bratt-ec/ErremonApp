import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, TouchableOpacity, View } from "react-native";
import FondoInicio from "../components/FondoInicio";
import { Colors } from "../styles/Colors";
import FadeIn from "../styles/FadeIn";
import { css_Inicio } from "../styles/Style";

const Inicio = ({ navigation }) => {
  return (
    <View style={css_Inicio.containerInicio}>
      <StatusBar backgroundColor={Colors.redLight} style="light" />
      <FondoInicio />
      <View style={css_Inicio.ContenidoInicio}>
        <View style={{ alignItems: "center" }}>
          <Image
            source={require("../img/Bitmap.png")}
            style={css_Inicio.imgFondoHome}
          />
        </View>

        <View style={css_Inicio.divLogo}>
          <Image
            source={require("../img/logo.png")}
            style={css_Inicio.imgLogoHome}
          />
        </View>
      </View>
      <TouchableOpacity
        style={css_Inicio.ViewPlayButton}
        onPress={() => navigation.navigate("Registro")}
      >
        <Image
          source={require("../img/play-button.png")}
          style={css_Inicio.imgBotonIniciar}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Inicio;
