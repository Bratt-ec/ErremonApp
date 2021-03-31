import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Colors } from "../styles/Colors";

const HeaderGame = ({ name }) => {
  return (
    <View style={CSS.headerDiv}>
      <Image source={require("../img/book.png")} style={CSS.ImgHeader} />
      <Text style={CSS.txtHeader}>{name}</Text>
    </View>
  );
};

const CSS = StyleSheet.create({
  headerDiv: {
    marginTop: "10%",
    width: "100%",
    height: 50,
    backgroundColor: Colors.turquesa,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  ImgHeader: {
    width: 40,
    height: 40,
    marginHorizontal: "4%",
  },
  txtHeader: {
    color: Colors.white,
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
    textTransform: "uppercase",
  },
});

export default HeaderGame;
