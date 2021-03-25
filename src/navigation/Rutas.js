import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import Inicio from "../screens/Inicio";
import Registro from "../screens/Registro";
import Menu from '../screens/Menu';
import SopaPalabras from '../screens/SopaPalabras';
import Crucigrama from '../screens/Crucigrama';
import JuegoImagenes from '../screens/JuegoImagenes';
import JuegoLectura from '../screens/JuegoLectura';
import TestEvaluativo from '../screens/TestEvaluativo';
import Vocabulario from '../screens/Vocabulario';
// Screen Games
import Gm_DeOposicion from '../games/Gm_DeOposicion';

const Stack = createStackNavigator();

export const AuthStack = () => {
    return(
        <Stack.Navigator initialRouteName='Menu'>  
            <Stack.Screen name='Menu' component={Menu} options={{headerShown: false}} />
            <Stack.Screen name='SopaPalabras' component={SopaPalabras} options={{headerShown: false}} />
            <Stack.Screen name='Crucigrama' component={Crucigrama} options={{headerShown: false}} />
            <Stack.Screen name='JuegoImagenes' component={JuegoImagenes} options={{headerShown: false}} />
            <Stack.Screen name='JuegoLectura' component={JuegoLectura} options={{headerShown: false}} />
            <Stack.Screen name='TestEvaluativo' component={TestEvaluativo} options={{headerShown: false}} />
            <Stack.Screen name='Vocabulario' component={Vocabulario} options={{headerShown: false}} />
            {/* JUEGOS */}
            <Stack.Screen name='DeOposicion' component={Gm_DeOposicion} options={{headerShown: false}} />
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
 