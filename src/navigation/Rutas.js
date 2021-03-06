import React, {useContext} from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { Image, ScrollView, Text, View, TouchableOpacity, Touchable } from "react-native";
import Inicio from "../screens/Inicio";
import Registro from "../screens/Registro";
import Menu from '../screens/Menu';
import SopaPalabras from '../screens/SopaPalabras';
import JuegoImagenes from '../screens/JuegoImagenes';
import TestEvaluativo from '../screens/TestEvaluativo';
import Vocabulario from '../screens/Vocabulario';
// Screen Games
import Gm_DeOposicion from '../games/Gm_DeOposicion';
import LoseGame from '../screens/LoseGame';
import WinGame from '../screens/WinGame';
import Gm_CausaConsecuencia from '../games/Gm_CausaConsecuencia';
import Gm_DeAdicion from '../games/Gm_DeAdicion';
import Gm_DeTiempo from '../games/Gm_DeTiempo';
import Gm_Crucigrama from '../games/Gm_Crucigrama';
import Gm_DeLectura from '../games/Gm_CuentoOso';
import MenuCrucigrama from '../screens/MenuCrucigrama';
import Gm_Frutas from '../games/Gm_Frutas';
import Gm_Colores from '../games/Gm_Colores';
import Gm_Animales from '../games/Gm_Animales';
import { Logros } from '../screens/Logros';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
  } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/core';
import { AuthContext } from './AuthProvider';
import { css_Menu } from '../styles/Style';
// Icons
import { FontAwesome5 } from '@expo/vector-icons';
import { Colors } from '../styles/Colors';
import PalabraVocabulario from '../screens/PalabraVocabulario';
import FinJuegoImagenes from '../screens/FinJuegoImagenes';
import MenuCuentos from '../screens/MenuCuentos';
import Gm_CuentoLeon from '../games/Gm_CuentoLeon';
import Gm_CuentoPatita from '../games/Gm_CuentoPatita';
import Gm_CuentoAna from '../games/Gm_CuentoAna';
import Gm_CuentoTito from '../games/Gm_CuentoTito';
import Gm_CuentoAnimales from '../games/Gm_CuentoAnimales';
import AcercaDe from '../screens/AcercaDe';


const Stack = createStackNavigator();

function CustomDrawerContent(props) {
  const { navigation } = props;
  const { usuario, setUsuario, personaje, setPersonaje, setTrofeos, setparticipants } = useContext(
    AuthContext
  );
  return (
    <>
      <View
        style={{
          alignContent: "center",
          justifyContent: "center",
          marginVertical: 40,
        }}
      >
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          {personaje == "Santi" ? (
            <Image
              source={require("../img/../img/kid.png")}
              style={css_Menu.imgAvatar}
            />
          ) : (
            <Image
              source={require("../img/../img/girl.png")}
              style={css_Menu.imgAvatar}
            />
          )}

          <Text style={css_Menu.txtHeader}>??Hola! {usuario}</Text>
        </View>
      </View>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Cerrar Sesi??n"
        inactiveTintColor='#fff'
        icon={()=>(
            <FontAwesome5 name="window-close" size={24} color="#fff" />
        )}
        onPress={() => {
            setPersonaje(null) 
            setUsuario(null)
            setTrofeos({
              id: '',
              nombre: '', 
              estrellas: '' 
            });
            setparticipants([
              'DRAG??N',
              'LIBRO',
              'REGALO',
              'GATO',
              'CANDADO',
              'F??SFORO',
              'PLATO',
              'TAPILLA',
            ]);
        }}
      />
    </>
  );
}
  
const Drawer = createDrawerNavigator();
function MyDrawer() {
  return (
    <Drawer.Navigator drawerContentOptions={{ activeBackgroundColor: Colors.turquesa, activeTintColor: '#ffffff', inactiveTintColor: Colors.white }}   drawerContent={props => <CustomDrawerContent {...props} />} initialRouteName='Menu' drawerStyle={{backgroundColor: '#22343C'}}>
      <Drawer.Screen name='Menu' component={Menu} 
      options={{
        title: 'Menu de Juegos',
        drawerIcon: ({ focused, size }) => (
            <FontAwesome5 name="gamepad" size={24} color="#fff" />
            ),
        
      }} />
      <Drawer.Screen name="Logros" component={Logros} options={{
        title: 'Ver Logros',
        drawerIcon: ({ focused, size }) => (
            <FontAwesome5 name="trophy" size={24} color="#fff" />
            )
      }} />
      <Drawer.Screen name='Acerca' component={AcercaDe} 
      options={{
        title: 'Acerca de Erremon',
        drawerIcon: ({ focused, size }) => (
            <FontAwesome5 name="info-circle" size={24} color="#fff" />
            ),
        
      }} />
      
    </Drawer.Navigator>
  );
}

export const AuthStack = () => {
    return(
        <Stack.Navigator initialRouteName='OpMenu'>  
            {/* <Stack.Screen name='Menu' component={Menu} options={{headerShown: false}} /> */}
            <Stack.Screen name='OpMenu' component={MyDrawer} options={{headerShown: false}} />
            <Stack.Screen name='SopaPalabras' component={SopaPalabras} options={{headerShown: false}} />
            <Stack.Screen name='JuegoImagenes' component={JuegoImagenes} options={{headerShown: false}} />
            <Stack.Screen name='TestEvaluativo' component={TestEvaluativo} options={{headerShown: false}} />
            <Stack.Screen name='Vocabulario' component={Vocabulario} options={{headerShown: false}} />
            <Stack.Screen name='LoseGame' component={LoseGame} options={{headerShown: false}} />
            <Stack.Screen name='WinGame' component={WinGame} options={{headerShown: false}} />
            <Stack.Screen name='FinJuegoImagenes' component={FinJuegoImagenes} options={{headerShown: false}} />            
            <Stack.Screen name='CuentoOso' component={Gm_DeLectura} options={{headerShown: false}} />            
            <Stack.Screen name='CuentoLeon' component={Gm_CuentoLeon} options={{headerShown: false}} />            
            <Stack.Screen name='CuentoPata' component={Gm_CuentoPatita} options={{headerShown: false}} />            
            <Stack.Screen name='CuentoAna' component={Gm_CuentoAna} options={{headerShown: false}} />            
            <Stack.Screen name='CuentoTito' component={Gm_CuentoTito} options={{headerShown: false}} />        
            <Stack.Screen name='CuentoAnimalitos' component={Gm_CuentoAnimales} options={{headerShown: false}} />        
            <Stack.Screen name='PalabraVocabulario' component={PalabraVocabulario} options={{headerShown: false}} />
            {/* JUEGOS */}
            <Stack.Screen name='DeOposicion' component={Gm_DeOposicion} options={{headerShown: false}} />
            <Stack.Screen name='CausaConsecuencia' component={Gm_CausaConsecuencia} options={{headerShown: false}} />
            <Stack.Screen name='DeAdicion' component={Gm_DeAdicion} options={{headerShown: false}} />
            <Stack.Screen name='DeTiempo' component={Gm_DeTiempo} options={{headerShown: false}} />
            <Stack.Screen name='Crucigrama' component={Gm_Crucigrama} options={{headerShown: false}} />
            <Stack.Screen name='MenuCuentos' component={MenuCuentos} options={{headerShown: false}} />
            <Stack.Screen name='MenuCrucigrama' component={MenuCrucigrama} options={{headerShown: false}} />
            <Stack.Screen name='Gm_Frutas' component={Gm_Frutas} options={{headerShown: false}} />
            <Stack.Screen name='Gm_Colores' component={Gm_Colores} options={{headerShown: false}} />
            <Stack.Screen name='Gm_Animales' component={Gm_Animales} options={{headerShown: false}} />
            {/* <Stack.Screen name='Logros' component={Logros} options={{headerShown: false}} /> */}
        </Stack.Navigator>
    );
}

export const AppStack = () =>{
    return(
        <Stack.Navigator initialRouteName='Inicio'>
             <Stack.Screen name='Inicio' component={Inicio} options={{headerShown: false}} />
            <Stack.Screen name='Registro' component={Registro} options={{headerShown: false}} />
        </Stack.Navigator>
    )
} 
 