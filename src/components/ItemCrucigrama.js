import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, Text, View, TextInput } from "react-native";
import { Colors } from "../styles/Colors";

const ItemCrucigrama = ({ Letra }) => {
    const [letter, setLetter] = useState('');
    const abecedario = "abcdefghigklmnopqrstuvwxyz";
    let LetraRelleno = abecedario[Math.floor(Math.random() * abecedario.length)];

    if (Letra == "") {
      return (
    <TouchableOpacity style={styles.cellEmpty}>
        <Text style={styles.cellTextEmpty}>{LetraRelleno}</Text>
      </TouchableOpacity>
      );
    } else {
      return (
        <View
          style={styles.cell}
        >
        <TextInput
        style={styles.InputNombre}
        onChangeText={setLetter}
        value={letter}
        textContentType="name"
        placeholderTextColor={Colors.white}
        maxLength={1}
      />
        </View>
      );
    }
  };

  const styles = StyleSheet.create({
    cell: {
      padding: 2,
      backgroundColor: Colors.turquesa,
      width: 45,
      borderColor: Colors.blue_dark,
      borderWidth: 1,
      height: 40,
      alignItems: "center",
      justifyContent: "center",
    },
    cellPress: {
      padding: 2,
      backgroundColor: Colors.yellow,
      width: 45,
      height: 40,
      borderColor: Colors.blue_dark,
      borderWidth: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    cellText: {
      color: Colors.white,
      fontSize: 22,
      textTransform: "uppercase",
      fontWeight: "bold",
      textAlign: "center",
    },
    InputNombre:{
        fontSize: 24,
        textAlign: 'center',
        color: Colors.white,
        width: 45
    },
    cellEmpty:{
        padding: 2,
        width: 45,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
    },
    cellTextEmpty:{
  opacity: 1,
  color: Colors.white,
  fontSize: 0,
  textTransform: "uppercase",
  fontWeight: "bold",
  textAlign: "center",
    },
  });

  export default ItemCrucigrama;
