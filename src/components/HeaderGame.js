import React, {useContext} from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Colors } from "../styles/Colors";
import { AuthContext } from "../navigation/AuthProvider";

const HeaderGame = ({ name }) => {
  const {personaje } = useContext(AuthContext);
  return (
    <View style={CSS.headerDiv}>
      <Image source={require("../img/book.png")} style={CSS.ImgHeader} />
      <Text style={CSS.txtHeader}>{name}</Text>
      {
         (personaje == 'Santi') 
         ? <Image source={require('../img/../img/kid.png')} style={{width:40, height: 40, margin: 10 }} />
         : <Image source={require('../img/../img/girl.png')} style={{width:40, height: 40, margin: 10}}/>
      }
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
