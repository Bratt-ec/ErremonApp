import React from "react";
import { View } from "react-native";
import { css_Inicio } from "../styles/Style";

const FondoInicio = () => {
  return (
    <>
      <View style={css_Inicio.circulo} />
      <View style={css_Inicio.cuadrado1} />
      <View style={css_Inicio.cuadrado2} />
      <View style={css_Inicio.cuadrado3} />
      <View style={css_Inicio.cuadrado4} />
    </>
  );
};

export default FondoInicio;
