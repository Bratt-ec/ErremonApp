import React, { useState } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  TextInput,
  Image,
} from "react-native";
import { Colors } from "../styles/Colors";
import { css_ItemCrucigrama } from "../styles/GameStyle";
const ItemCrucigramaColores = ({ Color }) => {
  const llave = Math.random();
  const [item, setItem] = useState("");
  if (Color == "amarillo") {
    return (
      <View
        style={{
          backgroundColor: "#F1C40F",
          borderRadius: 10,
          width: 45,
          height: 40,
        }}
      ></View>
    );
  }

  if (Color == "azul") {
    return (
      <View
        style={{
          backgroundColor: "#2980B9",
          borderRadius: 10,
          width: 45,
          height: 40,
        }}
      ></View>
    );
  }

  if (Color == "rojo") {
    return (
      <View
        style={{
          backgroundColor: "#CB4335",
          borderRadius: 10,
          width: 45,
          height: 40,
        }}
      ></View>
    );
  }

  if (Color == "rosa") {
    return (
      <View
        style={{
          backgroundColor: "#FF6FCD",
          borderRadius: 10,
          width: 45,
          height: 40,
        }}
      ></View>
    );
  }

  if (Color == "verde") {
    return (
      <View
        style={{
          backgroundColor: "#16DB43",
          borderRadius: 10,
          width: 45,
          height: 40,
        }}
      ></View>
    );
  }

  if (Color == "cafe") {
    return (
      <View
        style={{
          backgroundColor: "#873600",
          borderRadius: 10,
          width: 45,
          height: 40,
        }}
      ></View>
    );
  }

  if (Color == "") {
    return (
      <View style={css_ItemCrucigrama.cellEmpty}>
        <Text style={css_ItemCrucigrama.cellTextEmpty}> </Text>
      </View>
    );
  } else {
    return (
      <View style={css_ItemCrucigrama.cell}>
        <TextInput
          style={css_ItemCrucigrama.InputNombre}
          onChangeText={setItem}
          value={item}
          textContentType="name"
          placeholderTextColor={Colors.white}
          maxLength={1}
          key={llave}
        />
      </View>
    );
  }
};

export default ItemCrucigramaColores;
