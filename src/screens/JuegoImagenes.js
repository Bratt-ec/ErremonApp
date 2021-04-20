import React, { useState, useEffect, useRef, createRef} from "react";
import { Image, Text, View, TouchableOpacity, StyleSheet , Button} from "react-native";
import HeaderGame from "../components/HeaderGame";
import Ruleta from "../components/Ruleta";
import { Colors } from "../styles/Colors";
import { css_JuegoImagenes } from "../styles/GameStyle";


const JuegoImagenes = () => {
  const [item, setItem] = useState(1);
  const [press, setPress] = useState(false);

  const numeros = "12345678";
//   numeros[Math.floor(Math.random() * numeros.length)];
  const GirarRuleta = () => {
    //  setItem(numeros[Math.floor(Math.random() * numeros.length)])
    //  console.log(item);
 
    console.log('girar ruleta');
  }; 


  useEffect(() => {
     if(press){
     for (let i = 0; i < 8; i++) {
         GirarRuleta(); 
     } 
     setPress(false) ;
     }
    

  }, [press])


  return (
    <View style={css_JuegoImagenes.Container}>
      <HeaderGame image="book.png" name="JUEGO DE IMÁGENES" />
      <Ruleta />
    </View>
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
    marginTop: "24%",
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
export default JuegoImagenes;
