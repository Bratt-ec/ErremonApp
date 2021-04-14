import React, { useContext, useEffect, useState} from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { AppStack, AuthStack } from "./Rutas";
import { AuthContext } from "./AuthProvider";
import { Audio } from 'expo-av';

const Navigation = () => {
    const { usuario, setUsuario, playSound,setPlaySound } = useContext(AuthContext);
    const [sound, setSound] = useState();

    async function playSoundBg(play) {
      if(play){
        // setPlaySound(false)
         console.log('Loading Sound');
      const { sound } = await Audio.Sound.createAsync(
         require('../sounds/fondo.mp3'),{
           isLooping: true
         }
      );
      setSound(sound);
  
      console.log('Playing Sound');
      await sound.playAsync(); 
      }else{
  
        console.log('Stop sound');
       await sound.pauseAsync() 
      //  setPlaySound(true)
      }
    };

    useEffect(() => {
      (playSound) ? playSoundBg(true) : playSoundBg(false);
    }, [playSound])
    return ( 
        <NavigationContainer>
          { (!usuario) ? <AppStack /> : <AuthStack /> }
        </NavigationContainer>
     );
}
 
export default Navigation;