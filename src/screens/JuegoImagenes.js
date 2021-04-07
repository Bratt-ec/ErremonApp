import React, { useState, useEffect } from "react";
import { Image, Text, View, TouchableOpacity, StyleSheet } from "react-native";
import HeaderGame from "../components/HeaderGame";
import { Colors } from "../styles/Colors";
import { css_JuegoImagenes } from "../styles/GameStyle";

const JuegoImagenes = () => {
  const [item, setItem] = useState(1);
  const [press, setPress] = useState(false);
  const numeros = "12345678";
//   numeros[Math.floor(Math.random() * numeros.length)];
  const GirarRuleta = () => {
     setItem(numeros[Math.floor(Math.random() * numeros.length)])
     console.log(item);
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
      <Image
        source={require("../img/ruleta.png")}
        style={css_JuegoImagenes.imgRuleta}
      />
      <View style={css_JuegoImagenes.divRuleta}>
        <View style={css_JuegoImagenes.divRuletaTop}>
          <View style={item == 1 ? css_JuegoImagenes.itemGiro : null}>
            <Image
              source={require("../img/juego-imagenes/tapilla.png")}
              style={css_JuegoImagenes.opcionesRuleta}
            />
          </View>
          <View style={item == 2 ? css_JuegoImagenes.itemGiro : null}>
            <Image
              source={require("../img/juego-imagenes/cadado.png")}
              style={css_JuegoImagenes.opcionesRuleta}
            />
          </View>
        </View>
        <View style={css_JuegoImagenes.divRuletaCenter}>
          <View style={item == 3 ? css_JuegoImagenes.itemGiro : null}>
            <Image
              source={require("../img/juego-imagenes/dragon.png")}
              style={css_JuegoImagenes.opcionesRuleta}
            />
          </View>

          <View style={item == 4 ? css_JuegoImagenes.itemGiro : null}>
            <Image
              source={require("../img/juego-imagenes/fosforo.png")}
              style={css_JuegoImagenes.opcionesRuleta}
            />
          </View>
        </View>
        <View style={css_JuegoImagenes.divRuletaCenter2}>
          <View style={item == 5 ? css_JuegoImagenes.itemGiro : null}>
            <Image
              source={require("../img/juego-imagenes/gato.png")}
              style={css_JuegoImagenes.opcionesRuleta}
            />
          </View>
          <View style={item == 6 ? css_JuegoImagenes.itemGiro : null}>
            <Image
              source={require("../img/juego-imagenes/libro.png")}
              style={css_JuegoImagenes.opcionesRuleta}
            />
          </View>
        </View>
        <View style={css_JuegoImagenes.divRuletaDown}>
          <View style={item == 7 ? css_JuegoImagenes.itemGiro : null}>
            <Image
              source={require("../img/juego-imagenes/plato.png")}
              style={css_JuegoImagenes.opcionesRuleta}
            />
          </View>
          <View style={item == 8 ? css_JuegoImagenes.itemGiro : null}>
            <Image
              source={require("../img/juego-imagenes/regalo.png")}
              style={css_JuegoImagenes.opcionesRuleta}
            />
          </View>
        </View>
      </View>
      <TouchableOpacity
        style={css_Boton.btnOpcion}
        onPress={() => {
          setPress(true)
        }}
      >
        <View style={css_Boton.divIcon}>
          <Image
            source={require("../img/mando.png")}
            style={css_Boton.iconOpcion}
          />
        </View>
        <Text style={css_Boton.txtOpcion}>Girar ruleta</Text>
      </TouchableOpacity>
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
