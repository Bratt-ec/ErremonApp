import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import HeaderGame from "../components/HeaderGame";
import { css_SopaPalabras } from "../styles/GameStyle";

const SopaPalabras = ({navigation}) => {
  const goGame = (game) =>{
      navigation.navigate(game);
  }
  return (
    <View style={css_SopaPalabras.Container}>
      <HeaderGame image="book.png" name="SOPA DE LETRAS" />

      <View style={css_SopaPalabras.EligeJuego}>
        <Text style={css_SopaPalabras.txtElige}>Vamos a jugar con conectores de palabras</Text>
      </View>
      <Image
        source={require("../img/oso_game_5.png")}
        style={css_SopaPalabras.imgOso}
      />

      <TouchableOpacity style={css_SopaPalabras.btnOpcion} onPress={()=> goGame('DeOposicion')}>
        <View style={css_SopaPalabras.divIcon}>
          <Image
            source={require("../img/mando.png")}
            style={css_SopaPalabras.iconOpcion}
          />
        </View>
        <Text style={css_SopaPalabras.txtOpcion}>DE OPOSICIÓN</Text>
      </TouchableOpacity>

      <TouchableOpacity style={css_SopaPalabras.btnOpcion}  onPress={()=> goGame('DeAdicion')}>
        <View style={css_SopaPalabras.divIcon}>
          <Image
            source={require("../img/mando.png")}
            style={css_SopaPalabras.iconOpcion}
          />
        </View>
        <Text style={css_SopaPalabras.txtOpcion}>DE ADICIÓN</Text>
      </TouchableOpacity>

      <TouchableOpacity style={css_SopaPalabras.btnOpcion} onPress={()=> navigation.navigate('CausaConsecuencia')}>
        <View style={css_SopaPalabras.divIcon}>
          <Image
            source={require("../img/mando.png")}
            style={css_SopaPalabras.iconOpcion}
          />
        </View>
        <View style={{ flexDirection: "column" }}>
          <Text style={css_SopaPalabras.txtOpcion2}>DE CAUSA-</Text>
          <Text style={css_SopaPalabras.txtOpcion2}>CONSECUENCIA</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={css_SopaPalabras.btnOpcion} onPress={()=> navigation.navigate('DeTiempo')}>
        <View style={css_SopaPalabras.divIcon}>
          <Image
            source={require("../img/mando.png")}
            style={css_SopaPalabras.iconOpcion}
          />
        </View>
        <Text style={css_SopaPalabras.txtOpcion}>DE TIEMPO</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SopaPalabras;
