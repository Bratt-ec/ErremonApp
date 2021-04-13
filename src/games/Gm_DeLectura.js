import React, { useContext, useEffect, useState,useRef} from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, BackHandler, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import HeaderGame from '../components/HeaderGame';
import PreScreenGame from '../components/PreScreenGame';
import { css_Crucigrama, css_DeLectura } from '../styles/GameStyle';
import { AuthContext } from "../navigation/AuthProvider";
import { Colors } from '../styles/Colors';
import { Video, AVPlaybackStatus } from 'expo-av';
import Dialogo from '../components/Dialogo';
import BotonContinuar from '../components/BotonContinuar';
import { Trofeo } from '../screens/WinGame';

const Gm_DeLectura = ({navigation}) => {
    // App Context
    const {
        trofeos,
        setTrofeos,
        juegosCompletados,
        setJuegosCompletados,
      } = useContext(AuthContext);
    // 
    const { preGame, setPreGame} = useContext(AuthContext);
    const[pregunta, setPregunta] = useState(1);
    const[respuestas, setRespuestas] = useState(0);
    const[play, setPlay] = useState(false);
    const [medalla, setMedalla] = useState(false);
    const video = useRef(null);
    const backHandler = BackHandler.addEventListener("hardwareBackPress", ()=> setPreGame(true))

    /*
    1. Como se llama el oso?  1. Juan, Enrique, R=ErreMon 
    2. A ErreMon lê gustaba leer? 2. Si, R=no, talvez 
    3. A quien fue a visitar ErreMon? 3. R=Abuela tia, papa 
    4. Por que ErreMon tomo ese caminho?  4. R=Por que penso que era um atajo, por que era de color Rojo 
    5. Quien lê ayudo a salir del abismo? 5. Polo el Leon, R=Juan el conejo, marissa
    */
   const objPreguntas = {
    1:{id:1, textoPregunta: '¿Como se llama el oso?', opciones:['Juan','Enrique','Erremon'], correcta: 'Erremon' },
    2:{id:2, textoPregunta: '¿A ErreMon le gustaba leer?', opciones:['Si','No','Tal vez'], correcta: 'No' },
    3:{id:3, textoPregunta: '¿A quien fue a visitar ErreMon?', opciones:['Abuela','Tía','Papá'], correcta: 'Abuela' },
    4:{id:4, textoPregunta: '¿Por que ErreMon tomo ese camino?', opciones:['Por que penso que era un atajo','Por que era de color Rojo','Por que le daba miedo'], correcta: 'Por que penso que era un atajo' },
    5:{id:5, textoPregunta: '¿Quien le ayudo a salir del abismo?', opciones:['Polo el Leon','Juan el conejo','Marissa'], correcta: 'Juan el conejo' },
   }
   let aleatorio = Math.random();

    const Respuesta = (valor) =>{
        if(valor){
            setPregunta(pregunta + 1 )
            setRespuestas(respuestas + 1)
          
        }else{
            // setRespuestas(respuestas - 1)
            setPregunta(pregunta + 1 )
        }
        // console.log(respuestas);
    }
    
    const OpenVideo = ()=>{
        (play) ? setPlay(false):setPlay(true)
    }


    const JuegoLectura = ()=>{
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
                    <Video
                        ref={video}
                        style={(play)? css_DeLectura.video : css_DeLectura.hiddenVideo}
                        source={require('../video/juego.mp4')}
                        useNativeControls
                        resizeMode="contain"
                    />
                    </View>
                </View>
            );

    }

    const NotaFinal = ()=>{
        return (
          <View>
            <View style={css_DeLectura.divContenido}>
              <View style={css_DeLectura.divNota}>
                <Text style={css_DeLectura.txtPregunta}>
                  Tu nota final es:
                </Text>
                <View style={css_DeLectura.Respuesta}>
                  <Text style={css_DeLectura.txtPregunta}>{respuestas}/5</Text>
                </View>
              </View>

              {respuestas >= 4 ? (
                <Dialogo texto="Felicidades has respondido bien todas las preguntas, eres GENIAL" />
              ) : respuestas >= 3 ? (
                <Dialogo texto="Casi aciertas, pero te equivocaste en algunas preguntas ¡Sigue Intetandolo!" />
              ) : (
                <Dialogo texto="Solo acertaste 2, ¡No te rindas Sigue Intetandolo!" />
              )}
              {respuestas >= 4 ? (
                <Image
                  source={require("../img/oso_game_3.png")}
                  style={styles.oso2}
                />
              ) : respuestas >= 3 ? (
                <Image
                  source={require("../img/oso_game_2.png")}
                  style={styles.oso}
                />
              ) : (
                <Image
                  source={require("../img/OSO-TRISTE.png")}
                  style={styles.oso}
                />
              )}
              {medalla ? (
                <Trofeo Nombre="Master de la Comprensión Lectora" />
              ) : null}
              <BotonContinuar Texto="Continuar" Ruta="Menu" />
            </View>
          </View>
        );
    }

    const Preguntas = ({NumPregunta})=>{
        return(
            <View>
                
                <View style={css_DeLectura.divContenido}>

                <View style={css_DeLectura.divPregunta}>
                    <Text style={css_DeLectura.txtPregunta}>{objPreguntas[NumPregunta].textoPregunta}</Text>
                </View>
                <View style={css_DeLectura.divRespuestas}>
                    {
                        objPreguntas[NumPregunta].opciones.map(numero =>(
                        <TouchableOpacity style={css_DeLectura.Respuesta} onPress={()=> {
                            
                            if(objPreguntas[NumPregunta].correcta == numero){
                                Respuesta(true)
                            }else{
                                Respuesta(false)
                            }
                        }}>
                           <Text style={css_DeLectura.txtRespuesta}>{numero}</Text> 
                        </TouchableOpacity>
                        ))
                    }
                        
                    </View>
                </View>
            </View>
        );
    }
        
    useEffect(() => {       
        if(pregunta == 6){
            if(respuestas >= 4){
                let trofeosObj;
                if(trofeos.id === '') {
                    trofeosObj = []
                }else{
                trofeosObj = [...trofeos]
                }
                for (let i = 0; i < trofeos.length; i++) {
                if (trofeos[i].nombre == "Master de la Comprensión Lectora") {
                console.log("Ya tienes este trofeo");
                setMedalla(false);
                return;
                } }    
                
                trofeosObj.push({
                id: aleatorio,
                nombre: "Master de la Comprensión Lectora",
                estrellas: "5",
                });
            setMedalla(true);
            setTrofeos(trofeosObj);
            setJuegosCompletados(juegosCompletados + 1);
            }
        }

        return () => backHandler.remove();
    }, []);
    return ( 
        <View style={css_Crucigrama.Container}>
            <StatusBar style='light' />
            <HeaderGame name='Juego de lectura' />
            {pregunta !== 6 && preGame == false ? <JuegoLectura />:null}
            {preGame ? <PreScreenGame txtDialogo='Primero mira el video y luego responde a la pregunta ¡Suerte!'/> : null}
            {preGame ? null : ( pregunta == 1) ? <Preguntas NumPregunta={pregunta} /> : null}
            {pregunta == 2 ? <Preguntas NumPregunta={pregunta} /> : null }
            {pregunta == 3 ? <Preguntas NumPregunta={pregunta} /> : null }
            {pregunta == 4 ? <Preguntas NumPregunta={pregunta} /> : null }
            {pregunta == 5 ? <Preguntas NumPregunta={pregunta} /> : null }
            {pregunta == 6 ? <NotaFinal /> : null }
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
      oso:{ width: 100, height: 150, alignSelf: 'flex-end', marginTop: -40},
      oso2:{ width: 100, height: 110, alignSelf: 'flex-end', marginTop: -40}
})
export default Gm_DeLectura;