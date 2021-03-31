import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { Colors } from "../styles/Colors";

const LetraBtn = ({ Letra }) => {
  const [press, setPress] = useState(false);
  const abecedario = "abcdefghigklmnopqrstuvwxyz";
  let LetraRelleno = abecedario[Math.floor(Math.random() * abecedario.length)];

  if (Letra == "") {
    return (
      <TouchableOpacity style={styles.cell}>
        <Text style={styles.cellText}>{LetraRelleno}</Text>
      </TouchableOpacity>
    );
  } else {
    return (
      <TouchableOpacity
        style={press ? styles.cellPress : styles.cell}
        onPress={() => (press ? setPress(false) : setPress(true))}
      >
        <Text style={styles.cellText}>{Letra}</Text>
      </TouchableOpacity>
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
});

export default LetraBtn;
