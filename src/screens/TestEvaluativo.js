import React, { useContext, useEffect, useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, BackHandler, Image, TouchableOpacity, Text } from 'react-native';
import HeaderGame from '../components/HeaderGame';
import PreScreenGame from '../components/PreScreenGame';
import { css_Crucigrama, css_DeLectura } from '../styles/GameStyle';
import { AuthContext } from "../navigation/AuthProvider";
import Dialogo from '../components/Dialogo';
import BotonContinuar from '../components/BotonContinuar';

const TestEvaluativo = ({navigation}) => {
    const { preGame, setPreGame} = useContext(AuthContext);
    const[pregunta, setPregunta] = useState(1);
    const[respuestas, setRespuestas] = useState(0);
    const base = '123';
    let numeroAzar = base[Math.floor(Math.random() * base.length)];

    const Respuesta = (valor) =>{
        if(valor){
            // navigation.navigate('WinGame');
           setRespuestas(respuestas + 1)
            setPregunta(pregunta + 1 )
        }else{
            // setRespuestas(respuestas - 1)
            setPregunta(pregunta + 1 )
            // navigation.navigate('LoseGame');
        }
        console.log(respuestas);
    }

    const backHandler = BackHandler.addEventListener("hardwareBackPress", ()=> setPreGame(true))
    useEffect(() => {      
        return () => backHandler.remove();
    }, []);

    const NotaFinal = ()=>{
        return(
            <View>
                <View style={css_DeLectura.divContenido}>
                    <View style={css_DeLectura.divPregunta}>
                        <Text style={css_DeLectura.txtPregunta}>Tu nota final es: </Text>
                    </View>
                    <View style={css_DeLectura.Respuesta}>
                               <Text style={css_DeLectura.txtPregunta}>{respuestas}/10</Text> 
                        </View>                
                        {
                    (respuestas >= 8)
                    ? <Dialogo texto='Felicidades has aprobado el test con una nota Excelente ' />
                    : (respuestas >= 6)
                     ? <Dialogo texto='Casi aciertas, pero te equivocaste en algunas preguntas ¡Sigue Intetandolo!' />
                     : <Dialogo texto='No aprobaste, ¡No te rindas Sigue Intetandolo!' />
                }
                <Image source={require('../img/oso_game_2.png')}  style={{ width: 100, height: 150, alignSelf: 'flex-end', marginTop: -40}}/>
                <BotonContinuar  Texto='Continuar' Ruta='Menu'/>
                </View>

            </View>
        );
    }

    const PrimeraPregunta = ()=>{
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

        const SegundaPregunta = ()=>{
            return(
                <View>
                    <View style={css_DeLectura.divContenido}>
                        <View style={css_DeLectura.divPregunta}>
                            <Text style={css_DeLectura.txtPregunta}>Mariana se fue de viaje, _____ estando enferma</Text>
                        </View>
                        <View style={css_DeLectura.divRespuestas}>
                            
                            <TouchableOpacity style={css_DeLectura.Respuesta} onPress={()=> Respuesta(true)}>
                               <Text style={css_DeLectura.txtRespuesta}>AÚN</Text> 
                            </TouchableOpacity>                            
    
                            <TouchableOpacity style={css_DeLectura.Respuesta} onPress={()=> Respuesta(false)}>
                               <Text style={css_DeLectura.txtRespuesta}>SIN EMBARGO</Text> 
                            </TouchableOpacity>
                            
                            <TouchableOpacity style={css_DeLectura.Respuesta} onPress={()=> Respuesta(false)}>
                               <Text style={css_DeLectura.txtRespuesta}>EN CAMBIO</Text> 
                            </TouchableOpacity>

                            <TouchableOpacity style={css_DeLectura.Respuesta} onPress={()=> Respuesta(false)}>
                               <Text style={css_DeLectura.txtRespuesta}>PERO</Text> 
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            );
        }

        const TerceraPregunta = ()=>{
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

                            <TouchableOpacity style={css_DeLectura.Respuesta} onPress={()=> Respuesta(true)}>
                               <Text style={css_DeLectura.txtRespuesta}>EN CAMBIO</Text> 
                            </TouchableOpacity>

                            <TouchableOpacity style={css_DeLectura.Respuesta} onPress={()=> Respuesta(false)}>
                               <Text style={css_DeLectura.txtRespuesta}>AÚN</Text> 
                            </TouchableOpacity>
    
                            <TouchableOpacity style={css_DeLectura.Respuesta} onPress={()=> Respuesta(false)}>
                               <Text style={css_DeLectura.txtRespuesta}>SIN EMBARGO</Text> 
                            </TouchableOpacity>                                
                            
                        </View>
                    </View>
                </View>
            );
        }

        const CuartaPregunta = ()=>{
            return(
                <View>
                    <View style={css_DeLectura.divContenido}>
                        <View style={css_DeLectura.divPregunta}>
                            <Text style={css_DeLectura.txtPregunta}>Andrea estudió para el examen, _______, no aprobó</Text>
                        </View>
                        <View style={css_DeLectura.divRespuestas}>
                            <TouchableOpacity style={css_DeLectura.Respuesta} onPress={()=> Respuesta(false)}>
                               <Text style={css_DeLectura.txtRespuesta}>EN CAMBIO</Text> 
                            </TouchableOpacity>
    
                            <TouchableOpacity style={css_DeLectura.Respuesta} onPress={()=> Respuesta(false)}>
                               <Text style={css_DeLectura.txtRespuesta}>AÚN</Text> 
                            </TouchableOpacity>

                            <TouchableOpacity style={css_DeLectura.Respuesta} onPress={()=> Respuesta(false)}>
                               <Text style={css_DeLectura.txtRespuesta}>PERO</Text> 
                            </TouchableOpacity>
    
                            <TouchableOpacity style={css_DeLectura.Respuesta} onPress={()=> Respuesta(true)}>
                               <Text style={css_DeLectura.txtRespuesta}>SIN EMBARGO</Text> 
                            </TouchableOpacity>
                                                            
                        </View>
                    </View>
                </View>
            );
        }

        const QuintaPregunta = ()=>{
            return(
                <View>
                    <View style={css_DeLectura.divContenido}>
                        <View style={css_DeLectura.divPregunta}>
                            <Text style={css_DeLectura.txtPregunta}>No disfrutamos mucho del viaje, _______, la lluvia</Text>
                        </View>
                        <View style={css_DeLectura.divRespuestas}>
                            <TouchableOpacity style={css_DeLectura.Respuesta} onPress={()=> Respuesta(false)}>
                               <Text style={css_DeLectura.txtRespuesta}>PERO</Text> 
                            </TouchableOpacity>
    
                            <TouchableOpacity style={css_DeLectura.Respuesta} onPress={()=> Respuesta(true)}>
                               <Text style={css_DeLectura.txtRespuesta}>A CAUSA DE</Text> 
                            </TouchableOpacity>
    
                            <TouchableOpacity style={css_DeLectura.Respuesta} onPress={()=> Respuesta(false)}>
                               <Text style={css_DeLectura.txtRespuesta}>SIN EMBARGO</Text> 
                            </TouchableOpacity>

                                
                            <TouchableOpacity style={css_DeLectura.Respuesta} onPress={()=> Respuesta(false)}>
                               <Text style={css_DeLectura.txtRespuesta}>AUNQUE</Text> 
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            );
        }

        const SextaPregunta = () =>{
            return(
                <View>
                    <View style={css_DeLectura.divContenido}>
                        <View style={css_DeLectura.divPregunta}>
                            <Text style={css_DeLectura.txtPregunta}>Karen nacio el Cuenca, _______, vive en Loja</Text>
                        </View>
                        <View style={css_DeLectura.divRespuestas}>
                            <TouchableOpacity style={css_DeLectura.Respuesta} onPress={()=> Respuesta(true)}>
                               <Text style={css_DeLectura.txtRespuesta}>PERO</Text> 
                            </TouchableOpacity>
    
                            <TouchableOpacity style={css_DeLectura.Respuesta} onPress={()=> Respuesta(false)}>
                               <Text style={css_DeLectura.txtRespuesta}>A PESAR</Text> 
                            </TouchableOpacity>
    
                            <TouchableOpacity style={css_DeLectura.Respuesta} onPress={()=> Respuesta(false)}>
                               <Text style={css_DeLectura.txtRespuesta}>PORQUE</Text> 
                            </TouchableOpacity>

                                
                            <TouchableOpacity style={css_DeLectura.Respuesta} onPress={()=> Respuesta(false)}>
                               <Text style={css_DeLectura.txtRespuesta}>EN CAMBIO</Text> 
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            );
        }

        const SeptimaPregunta = () =>{
            return(
                <View>
                    <View style={css_DeLectura.divContenido}>
                        <View style={css_DeLectura.divPregunta}>
                            <Text style={css_DeLectura.txtPregunta}>Me gustan las manzanas y, _______, el mango</Text>
                        </View>
                        <View style={css_DeLectura.divRespuestas}>
                            <TouchableOpacity style={css_DeLectura.Respuesta} onPress={()=> Respuesta(false)}>
                               <Text style={css_DeLectura.txtRespuesta}>claro</Text> 
                            </TouchableOpacity>
    
                            <TouchableOpacity style={css_DeLectura.Respuesta} onPress={()=> Respuesta(true)}>
                               <Text style={css_DeLectura.txtRespuesta}>también</Text> 
                            </TouchableOpacity>
    
                            <TouchableOpacity style={css_DeLectura.Respuesta} onPress={()=> Respuesta(false)}>
                               <Text style={css_DeLectura.txtRespuesta}>aun</Text> 
                            </TouchableOpacity>

                                
                            <TouchableOpacity style={css_DeLectura.Respuesta} onPress={()=> Respuesta(false)}>
                               <Text style={css_DeLectura.txtRespuesta}>sin embargo</Text> 
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            );
        }

        const OctavaPregunta = ()=>{
            return(
                <View>
                    <View style={css_DeLectura.divContenido}>
                        <View style={css_DeLectura.divPregunta}>
                            <Text style={css_DeLectura.txtPregunta}>Maria vive lejos, _______,su casa es pequeña</Text>
                        </View>
                        <View style={css_DeLectura.divRespuestas}>
                            <TouchableOpacity style={css_DeLectura.Respuesta} onPress={()=> Respuesta(true)}>
                               <Text style={css_DeLectura.txtRespuesta}>ademas</Text> 
                            </TouchableOpacity>
    
                            <TouchableOpacity style={css_DeLectura.Respuesta} onPress={()=> Respuesta(false)}>
                               <Text style={css_DeLectura.txtRespuesta}>A PESAR</Text> 
                            </TouchableOpacity>
    
                            <TouchableOpacity style={css_DeLectura.Respuesta} onPress={()=> Respuesta(false)}>
                               <Text style={css_DeLectura.txtRespuesta}>aun</Text> 
                            </TouchableOpacity>

                                
                            <TouchableOpacity style={css_DeLectura.Respuesta} onPress={()=> Respuesta(false)}>
                               <Text style={css_DeLectura.txtRespuesta}>EN vez</Text> 
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            );
        }

        const NovenaPregunta = () =>{
            return(
                <View>
                    <View style={css_DeLectura.divContenido}>
                        <View style={css_DeLectura.divPregunta}>
                            <Text style={css_DeLectura.txtPregunta}>Fuimos al parque, _______, caminamos por el puente</Text>
                        </View>
                        <View style={css_DeLectura.divRespuestas}>
                            <TouchableOpacity style={css_DeLectura.Respuesta} onPress={()=> Respuesta(false)}>
                               <Text style={css_DeLectura.txtRespuesta}>porque</Text> 
                            </TouchableOpacity>
    
                            <TouchableOpacity style={css_DeLectura.Respuesta} onPress={()=> Respuesta(true)}>
                               <Text style={css_DeLectura.txtRespuesta}>ademas</Text> 
                            </TouchableOpacity>
    
                            <TouchableOpacity style={css_DeLectura.Respuesta} onPress={()=> Respuesta(false)}>
                               <Text style={css_DeLectura.txtRespuesta}>a pesar</Text> 
                            </TouchableOpacity>

                                
                            <TouchableOpacity style={css_DeLectura.Respuesta} onPress={()=> Respuesta(false)}>
                               <Text style={css_DeLectura.txtRespuesta}>EN CAMBIO</Text> 
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            );
        }

        const DecimaPregunta = ()=>{
            return(
                <View>
                    <View style={css_DeLectura.divContenido}>
                        <View style={css_DeLectura.divPregunta}>
                            <Text style={css_DeLectura.txtPregunta}>Karen visitó a Lucas, _______, le llevó regalos</Text>
                        </View>
                        <View style={css_DeLectura.divRespuestas}>
                            <TouchableOpacity style={css_DeLectura.Respuesta} onPress={()=> Respuesta(false)}>
                               <Text style={css_DeLectura.txtRespuesta}>como</Text> 
                            </TouchableOpacity>
    
                            <TouchableOpacity style={css_DeLectura.Respuesta} onPress={()=> Respuesta(false)}>
                               <Text style={css_DeLectura.txtRespuesta}>A PESAR</Text> 
                            </TouchableOpacity>
    
                            <TouchableOpacity style={css_DeLectura.Respuesta} onPress={()=> Respuesta(true)}>
                               <Text style={css_DeLectura.txtRespuesta}>y ademas</Text> 
                            </TouchableOpacity>

                                
                            <TouchableOpacity style={css_DeLectura.Respuesta} onPress={()=> Respuesta(false)}>
                               <Text style={css_DeLectura.txtRespuesta}>EN vez</Text> 
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            );
        }

    return (  
        <View style={css_Crucigrama.Container}>
            <HeaderGame name='Test Evaluativo'/>
            {preGame ? <PreScreenGame txtDialogo='Ahora veremos cuanto has aprendido, escoje la palabra que comlpleta la oración ¡Suerte!'/> : null}
            {preGame ? null : ( pregunta == 1) ? <PrimeraPregunta /> : null}
            {pregunta == 2 ? <SegundaPregunta /> : null }
            {pregunta == 3 ? <TerceraPregunta /> : null }
            {pregunta == 4 ? <CuartaPregunta /> : null }
            {pregunta == 5 ? <QuintaPregunta /> : null }
            {pregunta == 6 ? <SextaPregunta /> : null }
            {pregunta == 7 ? <SeptimaPregunta /> : null }
            {pregunta == 8 ? <OctavaPregunta /> : null }
            {pregunta == 9 ? <NovenaPregunta /> : null }
            {pregunta == 10 ? <DecimaPregunta /> : null }
            {pregunta == 11 ? <NotaFinal /> : null }

        </View>
     ); 
}
 
export default TestEvaluativo;

