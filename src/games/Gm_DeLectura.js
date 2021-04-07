import React, { useContext, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, BackHandler, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import HeaderGame from '../components/HeaderGame';
import PreScreenGame from '../components/PreScreenGame';
import { css_Crucigrama, css_DeLectura } from '../styles/GameStyle';
import { AuthContext } from "../navigation/AuthProvider";
import { Colors } from '../styles/Colors';


const Gm_DeLectura = ({navigation}) => {
    const { preGame, setPreGame} = useContext(AuthContext);
    const backHandler = BackHandler.addEventListener("hardwareBackPress", ()=> setPreGame(true))
    const numeros = '123';
    let numeroAzar = numeros[Math.floor(Math.random() * numeros.length)];

    const Respuesta = (valor) =>{
        if(valor){
            navigation.navigate('WinGame');
        }else{
            navigation.navigate('LoseGame');
        }
    }
    const OpenVideo = ()=>{
        alert('Abriendo video....')
    }


    const JuegoLectura = ()=>{
        if(numeroAzar == 1){
            return(
                <View>
                    <View style={css_DeLectura.divTop}>
                        <Image source={require('../img/book.png')}  style={css_DeLectura.book}/>
                        <TouchableOpacity
                            style={styles.btnOpcion}
                            onPress={() => OpenVideo()}
                            >
                            <View style={styles.divIcon}>
                                <Image
                                source={require("../img/video.png")}
                                style={styles.iconOpcion}
                                />
                            </View>
                            <Text style={styles.txtOpcion}>Ver Video</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={css_DeLectura.divContenido}>
                        <View style={css_DeLectura.divPregunta}>
                            <Text style={css_DeLectura.txtPregunta}>¿Porqué Erremon sufrió un accidente?</Text>
                        </View>
                        <View style={css_DeLectura.divRespuestas}>
                            <TouchableOpacity style={css_DeLectura.Respuesta} onPress={()=> Respuesta(true)}>
                               <Text style={css_DeLectura.txtRespuesta}>Por no saber las señaléticas</Text> 
                            </TouchableOpacity>
    
                            <TouchableOpacity style={css_DeLectura.Respuesta} onPress={()=> Respuesta(false)}>
                               <Text style={css_DeLectura.txtRespuesta}>Porque no sabía leer</Text> 
                            </TouchableOpacity>
    
                            <TouchableOpacity style={css_DeLectura.Respuesta} onPress={()=> Respuesta(false)}>
                               <Text style={css_DeLectura.txtRespuesta}>Por que se distrajo</Text> 
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            );
        }

        if(numeroAzar == 2){
            return(
                <View>
                    <View style={css_DeLectura.divTop}>
                        <Image source={require('../img/book.png')}  style={css_DeLectura.book}/>
                        <TouchableOpacity
                            style={styles.btnOpcion}
                            onPress={() => OpenVideo()}
                            >
                            <View style={styles.divIcon}>
                                <Image
                                source={require("../img/video.png")}
                                style={styles.iconOpcion}
                                />
                            </View>
                            <Text style={styles.txtOpcion}>Ver Video</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={css_DeLectura.divContenido}>
                        <View style={css_DeLectura.divPregunta}>
                            <Text style={css_DeLectura.txtPregunta}>¿Que necesita Erremon para completar la tarea?</Text>
                        </View>
                        <View style={css_DeLectura.divRespuestas}>
                            <TouchableOpacity style={css_DeLectura.Respuesta} onPress={()=> Respuesta(false)}>
                               <Text style={css_DeLectura.txtRespuesta}>Un lapiz y un papel</Text> 
                            </TouchableOpacity>
    
                            <TouchableOpacity style={css_DeLectura.Respuesta} onPress={()=> Respuesta(true)}>
                               <Text style={css_DeLectura.txtRespuesta}>Papel y Cinta</Text> 
                            </TouchableOpacity>
    
                            <TouchableOpacity style={css_DeLectura.Respuesta} onPress={()=> Respuesta(false)}>
                               <Text style={css_DeLectura.txtRespuesta}>Una cartilina verde</Text> 
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            );
        }

        if(numeroAzar == 3){
            return(
                <View>
                    <View style={css_DeLectura.divTop}>
                        <Image source={require('../img/book.png')}  style={css_DeLectura.book}/>
                        <TouchableOpacity
                            style={styles.btnOpcion}
                            onPress={() => OpenVideo()}
                            >
                            <View style={styles.divIcon}>
                                <Image
                                source={require("../img/video.png")}
                                style={styles.iconOpcion}
                                />
                            </View>
                            <Text style={styles.txtOpcion}>Ver Video</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={css_DeLectura.divContenido}>
                        <View style={css_DeLectura.divPregunta}>
                            <Text style={css_DeLectura.txtPregunta}>¿Porqué Erremon no tomó jugo?</Text>
                        </View>
                        <View style={css_DeLectura.divRespuestas}>
                            <TouchableOpacity style={css_DeLectura.Respuesta} onPress={()=> Respuesta(false)}>
                               <Text style={css_DeLectura.txtRespuesta}>Porque no le gustaba el jugo de mora</Text> 
                            </TouchableOpacity>
    
                            <TouchableOpacity style={css_DeLectura.Respuesta} onPress={()=> Respuesta(false)}>
                               <Text style={css_DeLectura.txtRespuesta}>Porque estaba enfermo</Text> 
                            </TouchableOpacity>
    
                            <TouchableOpacity style={css_DeLectura.Respuesta} onPress={()=> Respuesta(true)}>
                               <Text style={css_DeLectura.txtRespuesta}>Porque no le avisaron</Text> 
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            );
        }

    }

    useEffect(() => {       
        return () => backHandler.remove();
    }, []);
    return ( 
        <View style={css_Crucigrama.Container}>
            <StatusBar style='light' />
            <HeaderGame name='Juego de lectura' />
            {preGame ? <PreScreenGame txtDialogo='Primero mira el video y luego responde a la pregunta ¡Suerte!'/> : null}
            {preGame ? null : <JuegoLectura />}
        </View>
     );
}
const styles= StyleSheet.create({
    btnOpcion: {
        flexDirection: "row",
        backgroundColor: Colors.turquesa,
        width: "46%",
        borderRadius: 30,
        alignSelf: "center",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
    
        elevation: 12,
      },
      divIcon: {
        backgroundColor: Colors.white,
        width: "24%",
        height: 35,
        borderRadius: 30,
        justifyContent: 'center'
      },
      iconOpcion: {
        resizeMode: "contain",
        width: "50%",
        height: 50,
        alignSelf: "center",
      },
      txtOpcion: {
        fontSize: 20,
        color: Colors.white,
        fontWeight: "bold",
        textShadowRadius: 3,
        textShadowColor: "black",
        marginHorizontal: "2%",
        textShadowOffset: { width: 1, height: 1 },
      },
})
export default Gm_DeLectura;