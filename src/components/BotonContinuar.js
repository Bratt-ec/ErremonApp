import React, { useContext } from "react";
import { Image, TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { Colors } from "../styles/Colors";
import { AuthContext } from "../navigation/AuthProvider";
import { useNavigation } from "@react-navigation/core";

const BotonContinuar = ({ Texto, Ruta }) => {
  const { setPreGame } = useContext(AuthContext);
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={css_Boton.btnOpcion}
      onPress={() => navigation.navigate(Ruta)}
    >
      <View style={css_Boton.divIcon}>
        <Image
          source={require("../img/mando.png")}
          style={css_Boton.iconOpcion}
        />
      </View>
      <Text style={css_Boton.txtOpcion}>{Texto}</Text>
    </TouchableOpacity>
  );
};
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
export default BotonContinuar;