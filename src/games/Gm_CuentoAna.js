import React, { useContext, useEffect, useState, useRef } from "react";
import { StatusBar } from "expo-status-bar";
import {
  View,
  BackHandler,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import HeaderGame from "../components/HeaderGame";
import PreScreenGame from "../components/PreScreenGame";
import { css_Crucigrama, css_DeLectura } from "../styles/GameStyle";
import { AuthContext } from "../navigation/AuthProvider";
import { Colors } from "../styles/Colors";
import { Video, AVPlaybackStatus } from "expo-av";
// import Dialogo from "../components/Dialogo";
import BotonContinuar from "../components/BotonContinuar";
import WinGame, { Trofeo } from "../screens/WinGame";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Dialogo } from "../components/Dialogo";

const Gm_CuentoAna = ({ navigation }) => {
  // App Context
  const { trofeos, setTrofeos, juegosCompletados, setJuegosCompletados } =
    useContext(AuthContext);
  //
  const { preGame, setPreGame } = useContext(AuthContext);
  const [pregunta, setPregunta] = useState(1);
  const [respuestas, setRespuestas] = useState(0);
  const [play, setPlay] = useState(false);
  const [medalla, setMedalla] = useState(false);
  const video = useRef(null);
  const backHandler = BackHandler.addEventListener("hardwareBackPress", () =>
    setPreGame(true)
  );

  /*
    1. Como se llama el oso?  1. Juan, Enrique, R=ErreMon 
    2. A ErreMon lê gustaba leer? 2. Si, R=no, talvez 
    3. A quien fue a visitar ErreMon? 3. R=Abuela tia, papa 
    4. Por que ErreMon tomo ese caminho?  4. R=Por que penso que era um atajo, por que era de color Rojo 
    5. Quien lê ayudo a salir del abismo? 5. Polo el Leon, R=Juan el conejo, marissa
    */
  const objPreguntas = {
    1: {
      id: 1,
      textoPregunta: "¿Cómo se llama la niña?",
      opciones: ["Ana", "Luisa", "Maria"],
      correcta: "Ana",
    },
    2: {
      id: 2,
      textoPregunta: "¿Cuántas mascotas tiene?",
      opciones: ["Tres", "Dos", "Uno"],
      correcta: "Dos",
    },
    3: {
      id: 3,
      textoPregunta: "¿De qué color es el vestido de Ana?",
      opciones: ["Rojo", "Amarillo", "Azul"],
      correcta: "Amarillo",
    },
    4: {
      id: 4,
      textoPregunta: "¿De qué color es Pelusa? ",
      opciones: ["Verde", "Violeta", "Café"],
      correcta: "Café",
    },
  };
  let aleatorio = Math.random();

  const Respuesta = (valor) => {
    if (valor) {
      setPregunta(pregunta + 1);
      setRespuestas(respuestas + 1);
    } else {
      // setRespuestas(respuestas - 1)
      setPregunta(pregunta + 1);
    }
  };
  // console.log(respuestas);

  const JuegoLectura = () => {
    return (
      <ScrollView>
        <View style={css_DeLectura.divPregunta2}>
          <Image
            source={require("../img/cuentos/ana.png")}
            style={{
              width: 100,
              height: 100,
              resizeMode: "contain",
              margin: 10,
            }}
          />
        </View>

        <View style={{ padding: 10 }}>
          <View style={css_DeLectura.divPregunta2}>
            <Text
              style={{
                fontSize: 18,
                paddingHorizontal: 10,
                paddingVertical: 2,
                color: Colors.blue_dark,
              }}
            >
              Ella es Ana una niña muy tierna y respetuosa, tiene el cabello de
              color café y piel clara, usa un vestido de color amarillo.
            </Text>
            <Text
              style={{
                fontSize: 18,
                paddingHorizontal: 10,
                paddingVertical: 2,
                color: Colors.blue_dark,
              }}
            >
              A ella le gusta mucho cuidar de los animales, Ana tiene dos
              perritos, Lulu de color amarillo y Pelusa de color café.
            </Text>
            <Text
              style={{
                fontSize: 18,
                paddingHorizontal: 10,
                paddingVertical: 2,
                color: Colors.blue_dark,
              }}
            >
              A Ana le gusta cuidar mucho a sus perritos.
            </Text>
          </View>
        </View>
      </ScrollView>
    );
  };

  const NotaFinal = () => {
    return (
      <View>
        <View style={css_DeLectura.divContenido}>
          <View style={css_DeLectura.divNota}>
            <Text style={css_DeLectura.txtPregunta}>Tu nota final es:</Text>
            <View style={css_DeLectura.Respuesta}>
              <Text style={css_DeLectura.txtPregunta}>{respuestas}/4</Text>
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
            <Trofeo Nombre="Master de la Comprensión Lectora IV" />
          ) : null}
          <BotonContinuar Texto="Continuar" Ruta="MenuCuentos" />
        </View>
      </View>
    );
  };

  const Preguntas = ({ NumPregunta }) => {
    return (
      <View>
        <View style={css_DeLectura.divContenido}>
          <View style={css_DeLectura.divPregunta}>
            <View style={css_DeLectura.divIcon}>
              <AntDesign
                name="questioncircle"
                size={26}
                color={Colors.yellow}
              />
            </View>

            <Text style={css_DeLectura.txtPregunta}>
              {objPreguntas[NumPregunta].textoPregunta}
            </Text>
          </View>
          <View style={css_DeLectura.divRespuestas}>
            {objPreguntas[NumPregunta].opciones.map((numero) => (
              <TouchableOpacity
                style={css_DeLectura.Respuesta}
                onPress={() => {
                  if (objPreguntas[NumPregunta].correcta == numero) {
                    Respuesta(true);
                  } else {
                    Respuesta(false);
                  }
                }}
              >
                <View style={css_DeLectura.divIcon}>
                  <Ionicons
                    name="md-game-controller"
                    size={24}
                    color={Colors.turquesa}
                  />
                </View>
                <Text style={css_DeLectura.txtRespuesta}>{numero}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>
    );
  };

  useEffect(() => {
    if (pregunta == 5) {
      if (respuestas >= 4) {
        let trofeosObj;
        if (trofeos.id === "") {
          trofeosObj = [];
        } else {
          trofeosObj = [...trofeos];
        }
        for (let i = 0; i < trofeos.length; i++) {
          if (trofeos[i].nombre == "Master de la Comprensión Lectora IV") {
            console.log("Ya tienes este trofeo");
            setMedalla(false);
            return;
          }
        }

        trofeosObj.push({
          id: aleatorio,
          nombre: "Master de la Comprensión Lectora IV",
          estrellas: "5",
        });

        setMedalla(true);
        setTrofeos(trofeosObj);
        setJuegosCompletados(juegosCompletados + 1);
      }
    }
    return () => backHandler.remove();
  }, [pregunta]);
  return (
    <View style={css_Crucigrama.Container}>
      <StatusBar style="light" />
      <HeaderGame name="Ana y sus Perritos" />
      {pregunta !== 5 && preGame == false ? <JuegoLectura /> : null}
      {preGame ? (
        <PreScreenGame txtDialogo="Primero lee el cuento y luego responde a la pregunta ¡Suerte!" />
      ) : null}
      {preGame ? null : pregunta == 1 ? (
        <Preguntas NumPregunta={pregunta} />
      ) : null}
      {/* <ScrollView> */}
      {pregunta == 2 ? <Preguntas NumPregunta={pregunta} /> : null}
      {pregunta == 3 ? <Preguntas NumPregunta={pregunta} /> : null}
      {pregunta == 4 ? <Preguntas NumPregunta={pregunta} /> : null}
      {pregunta == 5 ? <NotaFinal /> : null}
      {/* </ScrollView> */}
    </View>
  );
};
const styles = StyleSheet.create({
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
    justifyContent: "center",
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
  oso: { width: 100, height: 150, alignSelf: "flex-end", marginTop: -40 },
  oso2: { width: 100, height: 110, alignSelf: "flex-end", marginTop: -40 },
});
export default Gm_CuentoAna;
