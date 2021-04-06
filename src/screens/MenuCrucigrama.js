import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import HeaderGame from "../components/HeaderGame";
import { css_SopaPalabras } from "../styles/GameStyle";

const MenuCrucigrama = ({navigation}) => {
    const goGame = (game) =>{
        navigation.navigate(game);
    }
    return (
      <View style={css_SopaPalabras.Container}>
        <HeaderGame image="book.png" name="SOPA DE PALABRAS" />
  
        <View style={css_SopaPalabras.EligeJuego}>
          <Text style={css_SopaPalabras.txtElige}>Vamos a jugar con algunos crucigramas</Text>
        </View>
        <Image
          source={require("../img/oso_game_5.png")}
          style={css_SopaPalabras.imgOso}
        />
  
        <TouchableOpacity style={css_SopaPalabras.btnOpcion} onPress={()=> goGame('Gm_Frutas')}>
          <View style={css_SopaPalabras.divIcon}>
            <Image
              source={require("../img/mando.png")}
              style={css_SopaPalabras.iconOpcion}
            />
          </View>
          <Text style={css_SopaPalabras.txtOpcion}>FRUTAS</Text>
        </TouchableOpacity>
  
        <TouchableOpacity style={css_SopaPalabras.btnOpcion}  onPress={()=> goGame('Gm_Animales')}>
          <View style={css_SopaPalabras.divIcon}>
            <Image
              source={require("../img/mando.png")}
              style={css_SopaPalabras.iconOpcion}
            />
          </View>
          <Text style={css_SopaPalabras.txtOpcion}>animales</Text>
        </TouchableOpacity>
  
        <TouchableOpacity style={css_SopaPalabras.btnOpcion} onPress={()=> navigation.navigate('Gm_Colores')}>
          <View style={css_SopaPalabras.divIcon}>
            <Image
              source={require("../img/mando.png")}
              style={css_SopaPalabras.iconOpcion}
            />
          </View>
          <Text style={css_SopaPalabras.txtOpcion}>colores</Text>
        </TouchableOpacity>
      </View>
    );
}
 
export default MenuCrucigrama;