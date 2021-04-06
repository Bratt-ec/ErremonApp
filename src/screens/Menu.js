import { StatusBar } from "expo-status-bar";
import React, { useContext,useState, useEffect } from "react";
import { Image, ScrollView, Text, View, TouchableOpacity } from "react-native";
import FondoInicio from "../components/FondoInicio";
import { AuthContext } from "../navigation/AuthProvider";
import { Colors } from "../styles/Colors";
import { css_Menu } from "../styles/Style";
import { Audio } from 'expo-av';

const Menu = ({ navigation }) => {
  const { usuario, setUsuario } = useContext(AuthContext);

  const [sound, setSound] = useState();

  async function playSound() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(
       require('../sounds/fondo.mp3'),{
         isLooping: true
       }
    );
    setSound(sound);

    console.log('Playing Sound');
    await sound.playAsync(); 
  }

  
  useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync(); }
      : undefined;
  }, [sound]);

  return (
    <ScrollView>
      <View style={css_Menu.ContainerMenu}>
        <StatusBar style="light" backgroundColor={Colors.blue_dark2} />
        <Text style={css_Menu.txtHeader}>HOLA!! {usuario}</Text>
        <View style={css_Menu.DivMenuTop}>
          <TouchableOpacity
            style={css_Menu.DivSopaPalabras}
            onPress={() => navigation.navigate("SopaPalabras")}
          >
            <Text style={css_Menu.textoMenu}>Sopa de Palabras</Text>
            <Image
              source={require("../img/conejo1.png")}
              style={css_Menu.MenuImg}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={css_Menu.DivCrucigramas}
            onPress={() => navigation.navigate("MenuCrucigrama")}
          >
            <Text style={css_Menu.textoMenu}>Crucigramas</Text>
            <Image
              source={require("../img/conejos.png")}
              style={css_Menu.MenuImg}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={css_Menu.DivJuegoImg}
          onPress={() => navigation.navigate("JuegoImagenes")}
        >
          <FondoInicio />
          <Text style={css_Menu.textoMenu2}>Juego de Imágenes</Text>
          <Image
            source={require("../img/oso_game_2.png")}
            style={css_Menu.ImgOso}
          />
        </TouchableOpacity>
        <View style={css_Menu.DivMenuCenter}>
          <TouchableOpacity
            style={css_Menu.DivSopaLetras}
            onPress={() => navigation.navigate("DeLectura")}
          >
            <Text style={css_Menu.textoMenu}>Juegos de Lectura</Text>
            <Image
              source={require("../img/perros.png")}
              style={css_Menu.MenuImg2}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={css_Menu.DivVocabulario}
            onPress={() => navigation.navigate("Vocabulario")}
          >
            <Text style={css_Menu.textoMenu}>Vocabulario</Text>
            <Image
              source={require("../img/oso_game_3.png")}
              style={css_Menu.ImgOso2}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={css_Menu.DivTest}
          onPress={() => navigation.navigate("TestEvaluativo")}
        >
          <Text style={css_Menu.textoMenu2}>Test Evaluativo</Text>
          <Image
            source={require("../img/oso_game_2.png")}
            style={css_Menu.ImgOso}
          />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Menu;
