import { StatusBar } from "expo-status-bar";
import React, {useState, useEffect} from "react";
import { Image, TouchableOpacity, View, Button } from "react-native";
import FondoInicio from "../components/FondoInicio";
import { Colors } from "../styles/Colors";
import { css_Inicio } from "../styles/Style";
import { Audio } from 'expo-av';
 
const Inicio = ({ navigation }) => {
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
    <View style={css_Inicio.containerInicio}>

      <StatusBar backgroundColor={Colors.redLight} style="light" />
      <FondoInicio />
      <View style={css_Inicio.ContenidoInicio}>
      
        <View style={{ alignItems: "center" }}>
          <Image
            source={require("../img/Bitmap.png")}
            style={css_Inicio.imgFondoHome}
          />
        </View>

        <View style={css_Inicio.divLogo}>
          <Image
            source={require("../img/logo.png")}
            style={css_Inicio.imgLogoHome}
          />
        </View>
      </View>
      <TouchableOpacity
        style={css_Inicio.ViewPlayButton}
        onPress={() => navigation.navigate("Registro")}
      >
        <Image
          source={require("../img/play-button.png")}
          style={css_Inicio.imgBotonIniciar}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Inicio;
