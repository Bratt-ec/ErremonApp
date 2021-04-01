import React, { useContext, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, BackHandler, Image, TouchableOpacity, Text } from 'react-native';
import HeaderGame from '../components/HeaderGame';
import PreScreenGame from '../components/PreScreenGame';
import { css_Crucigrama, css_DeLectura } from '../styles/GameStyle';
import { AuthContext } from "../navigation/AuthProvider";

const TestEvaluativo = ({navigation}) => {
    const { preGame, setPreGame} = useContext(AuthContext);
    const Respuesta = (valor) =>{
        if(valor){
            navigation.navigate('WinGame');
        }else{
            navigation.navigate('LoseGame');
        }
    }
    const numeros = '123';
    let numeroAzar = numeros[Math.floor(Math.random() * numeros.length)];
    
    const backHandler = BackHandler.addEventListener("hardwareBackPress", ()=> setPreGame(true))
    useEffect(() => {      
        return () => backHandler.remove();
    }, []);

    const JuegoLectura = ()=>{
        if(numeroAzar == 1){
            return(
                <View>

                    <View style={css_DeLectura.divContenido}>
                        <View style={css_DeLectura.divPregunta}>
                            <Text style={css_DeLectura.txtPregunta}>Es un gran cantante, _____ sus canciones no me gustan</Text>
                        </View>
                        <View style={css_DeLectura.divRespuestas}>
                            <TouchableOpacity style={css_DeLectura.Respuesta} onPress={()=> Respuesta(true)}>
                               <Text style={css_DeLectura.txtRespuesta}>PERO</Text> 
                            </TouchableOpacity>
    
                            <TouchableOpacity style={css_DeLectura.Respuesta} onPress={()=> Respuesta(false)}>
                               <Text style={css_DeLectura.txtRespuesta}>AÚN</Text> 
                            </TouchableOpacity>
    
                            <TouchableOpacity style={css_DeLectura.Respuesta} onPress={()=> Respuesta(false)}>
                               <Text style={css_DeLectura.txtRespuesta}>SIN EMBARGO</Text> 
                            </TouchableOpacity>

                                
                            <TouchableOpacity style={css_DeLectura.Respuesta} onPress={()=> Respuesta(false)}>
                               <Text style={css_DeLectura.txtRespuesta}>EN CAMBIO</Text> 
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            );
        }

        if(numeroAzar == 2){
            return(
                <View>
                    <View style={css_DeLectura.divContenido}>
                        <View style={css_DeLectura.divPregunta}>
                            <Text style={css_DeLectura.txtPregunta}>Mariana se fue de viaje, _____ estando enferma</Text>
                        </View>
                        <View style={css_DeLectura.divRespuestas}>
                            <TouchableOpacity style={css_DeLectura.Respuesta} onPress={()=> Respuesta(false)}>
                               <Text style={css_DeLectura.txtRespuesta}>PERO</Text> 
                            </TouchableOpacity>
    
                            <TouchableOpacity style={css_DeLectura.Respuesta} onPress={()=> Respuesta(true)}>
                               <Text style={css_DeLectura.txtRespuesta}>AÚN</Text> 
                            </TouchableOpacity>
    
                            <TouchableOpacity style={css_DeLectura.Respuesta} onPress={()=> Respuesta(false)}>
                               <Text style={css_DeLectura.txtRespuesta}>SIN EMBARGO</Text> 
                            </TouchableOpacity>

                                
                            <TouchableOpacity style={css_DeLectura.Respuesta} onPress={()=> Respuesta(false)}>
                               <Text style={css_DeLectura.txtRespuesta}>EN CAMBIO</Text> 
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            );
        }

        if(numeroAzar == 3){
            return(
                <View>
                    <View style={css_DeLectura.divContenido}>
                        <View style={css_DeLectura.divPregunta}>
                            <Text style={css_DeLectura.txtPregunta}>El tigre vive en la selva, _______, el perro vive en la ciudad</Text>
                        </View>
                        <View style={css_DeLectura.divRespuestas}>
                            <TouchableOpacity style={css_DeLectura.Respuesta} onPress={()=> Respuesta(false)}>
                               <Text style={css_DeLectura.txtRespuesta}>PERO</Text> 
                            </TouchableOpacity>
    
                            <TouchableOpacity style={css_DeLectura.Respuesta} onPress={()=> Respuesta(false)}>
                               <Text style={css_DeLectura.txtRespuesta}>AÚN</Text> 
                            </TouchableOpacity>
    
                            <TouchableOpacity style={css_DeLectura.Respuesta} onPress={()=> Respuesta(false)}>
                               <Text style={css_DeLectura.txtRespuesta}>SIN EMBARGO</Text> 
                            </TouchableOpacity>

                                
                            <TouchableOpacity style={css_DeLectura.Respuesta} onPress={()=> Respuesta(true)}>
                               <Text style={css_DeLectura.txtRespuesta}>EN CAMBIO</Text> 
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            );
        }

    }
    return ( 
        <View style={css_Crucigrama.Container}>
            <HeaderGame name='Test Evaluativo'/>
            {preGame ? <PreScreenGame txtDialogo='Ahora veremos cuanto has aprendido, escoje la palabra que comlpleta la oración ¡Suerte!'/> : null}
            {preGame ? null : <JuegoLectura />}
        </View>
     ); 
}
 
export default TestEvaluativo;

