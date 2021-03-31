import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../styles/Colors";

const Opciones = ({ Value }) => {
  return (
    <View style={styles.containerOP}>
      <Text style={styles.txtOpcion}>{Value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  containerOP: {
    backgroundColor: Colors.turquesa,
    padding: "2%",
    margin: "1%",
    borderRadius: 6,
    flexWrap: 'wrap'
  },
  txtOpcion: {
    color: Colors.white,
    fontSize: 14,
    textTransform: 'uppercase',
    fontWeight: "bold",
  },
});
export default Opciones;
