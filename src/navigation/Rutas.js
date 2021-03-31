import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
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
import Gm_DeLectura from '../games/Gm_DeLectura';

const Stack = createStackNavigator();

export const AuthStack = () => {
    return(
        <Stack.Navigator initialRouteName='Menu'>  
            <Stack.Screen name='Menu' component={Menu} options={{headerShown: false}} />
            <Stack.Screen name='SopaPalabras' component={SopaPalabras} options={{headerShown: false}} />
            <Stack.Screen name='JuegoImagenes' component={JuegoImagenes} options={{headerShown: false}} />
            <Stack.Screen name='TestEvaluativo' component={TestEvaluativo} options={{headerShown: false}} />
            <Stack.Screen name='Vocabulario' component={Vocabulario} options={{headerShown: false}} />
            <Stack.Screen name='LoseGame' component={LoseGame} options={{headerShown: false}} />
            <Stack.Screen name='WinGame' component={WinGame} options={{headerShown: false}} />
            {/* JUEGOS */}
            <Stack.Screen name='DeOposicion' component={Gm_DeOposicion} options={{headerShown: false}} />
            <Stack.Screen name='CausaConsecuencia' component={Gm_CausaConsecuencia} options={{headerShown: false}} />
            <Stack.Screen name='DeAdicion' component={Gm_DeAdicion} options={{headerShown: false}} />
            <Stack.Screen name='DeTiempo' component={Gm_DeTiempo} options={{headerShown: false}} />
            <Stack.Screen name='Crucigrama' component={Gm_Crucigrama} options={{headerShown: false}} />
            <Stack.Screen name='DeLectura' component={Gm_DeLectura} options={{headerShown: false}} />
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
 