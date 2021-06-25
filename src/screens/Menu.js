import { StatusBar } from "expo-status-bar";
import React, { useContext,useState, useEffect } from "react";
import { Image, ScrollView, Text, View, TouchableOpacity } from "react-native";
import FondoInicio from "../components/FondoInicio";
import { AuthContext } from "../navigation/AuthProvider";
import { Colors } from "../styles/Colors";
import { css_Menu } from "../styles/Style";
import { Audio } from 'expo-av';
import { FontAwesome5 } from '@expo/vector-icons';

const Menu = ({ navigation }) => {
  const { trofeos, playSound,setPlaySound } = useContext(AuthContext);
  // const[sonido, setSonido] =  useState(true);
  const [sound, setSound] = useState();

  const numTrofeos = (trofeos.id == '') ? 0 : trofeos.length;
  

  // async function playSoundBg(play) {
  //   if(play){
  //     setPlaySound(false)
  //      console.log('Loading Sound');
  //     const { sound } = await Audio.Sound.createAsync(
  //      require('../sounds/fondo.mp3'),{
  //        isLooping: true
  //      }
  //   );
  //   setSound(sound);

  //   console.log('Playing Sound');
  //   await sound.playAsync(); 
  //   }else{

  //     console.log('Stop sound');
  //    await sound.pauseAsync() 
  //    setPlaySound(true)
  //   }
  // };

  async function conectoresSound() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(
       require('../sounds/conectores.mp3')
    );
    setSound(sound);

    console.log('Playing Sound Conectores');
    await sound.playAsync(); 
  }

  async function crucigramaSound() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(
       require('../sounds/crucigramas.mp3')
    );
    setSound(sound);

    console.log('Playing Sound Crucigrama');
    await sound.playAsync(); 
  }

  async function LecturaSound() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(
       require('../sounds/juego_lectura.mp3')
    );
    setSound(sound);

    console.log('Playing Sound Crucigrama');
    await sound.playAsync(); 
  }

  // (playSound) ? playSoundBg(true) : playSoundBg(false);

  // useEffect(() => {
    
  //   return sound
  //     ?  () => {
  //         console.log('Unloading Sound');
  //         sound.unloadAsync(); }
  //     :  undefined;
  // }, [sound]);

  return (
    <ScrollView>
      <View style={css_Menu.ContainerMenu}>
        <StatusBar style="light" backgroundColor={Colors.blue_dark2} />
        <View style={{display: 'flex' ,flexDirection: 'row', width: '100%', alignContent: 'space-between', justifyContent: 'space-between'}}>
          <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 30, marginLeft:20}}>
            <TouchableOpacity onPress={()=> {
              // setPersonaje(null) 
              // setUsuario(null)
            navigation.openDrawer() 
              }}>
                <FontAwesome5 name="bars" size={34} color={Colors.white} />
            </TouchableOpacity>
          </View>
          <View style={css_Menu.TrofeosDiv}>
            <FontAwesome5 name="trophy" size={20} color={Colors.white} />
            <Text style={css_Menu.txtTrofeos}>Premios: {numTrofeos}</Text>
          </View>

          <TouchableOpacity onPress={()=> (playSound)? setPlaySound(false) : setPlaySound(true)  }  style={{marginRight: 20 ,borderRadius: 100, width: 35, height: 35, backgroundColor: Colors.turquesa, justifyContent: 'center', alignSelf: 'flex-end'}}>
            <Image 
            source={
              (playSound)
              ? require('../img/volume.png')
              : require('../img/volume-off.png')
            } 
            style={{ width: 23, height: 23, alignSelf: 'center'}}
            />
          </TouchableOpacity>
        </View>

        
        <View style={css_Menu.DivMenuTop}>
          <TouchableOpacity
            style={css_Menu.DivSopaPalabras}
            onPress={() => {
              conectoresSound()
              navigation.navigate("SopaPalabras")
            }}
          >
            <Text style={css_Menu.Enumeracion}>1</Text>
            <Text style={css_Menu.textoMenu}>Sopa de Letras</Text>
            <Image
              source={require("../img/conejo1.png")}
              style={css_Menu.MenuImg}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={css_Menu.DivCrucigramas}
            onPress={() => {
              crucigramaSound();
              navigation.navigate("MenuCrucigrama")
            }}
          >
             <Text style={css_Menu.Enumeracion3}>2</Text>
            <Text style={css_Menu.textoMenu3}>Crucigramas</Text>
            <Image
              source={require("../img/conejos.png")}
              style={css_Menu.MenuImg}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={css_Menu.DivJuegoImg}
          onPress={() => {            
            navigation.navigate("JuegoImagenes")
          }}
        >
          
          <FondoInicio />
          <Text style={css_Menu.Enumeracion}>3</Text>
          <Text style={css_Menu.textoMenu2}>Juego de Imágenes</Text>
          <Image
            source={require("../img/oso_game_2.png")}
            style={css_Menu.ImgOso}
          />
        </TouchableOpacity>
        <View style={css_Menu.DivMenuCenter}>
          <TouchableOpacity
            style={css_Menu.DivSopaLetras}            
            onPress={() => {
                LecturaSound()
                navigation.navigate("MenuCuentos")
              }
            }
          >
             <Text style={css_Menu.Enumeracion}>4</Text>
            <Text style={css_Menu.textoMenu3}>Juegos de Lectura</Text>
            <Image
              source={require("../img/perros.png")}
              style={css_Menu.MenuImg2}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={css_Menu.DivVocabulario}
            onPress={() => navigation.navigate("Vocabulario")}
          >
             <Text style={css_Menu.Enumeracion}>5</Text>
            <Text style={css_Menu.textoMenu3}>Vocabulario</Text>
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
           <Text style={css_Menu.Enumeracion4}>6</Text>
          <Text style={css_Menu.textoMenu4}>Test Evaluativo</Text>
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
