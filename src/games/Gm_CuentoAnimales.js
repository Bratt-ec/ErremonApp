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

const Gm_CuentoAnimales = () => {
  // STATES
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

  const objPreguntas = {
    1: {
      id: 1,
      textoPregunta: "¿De qué color era el pájaro?",
      opciones: ["Naranja", "Azul", "Café"],
      correcta: "Azul",
    },
    2: {
      id: 2,
      textoPregunta: "¿Quién empezaba a cantar?",
      opciones: ["El pájaro de color azul", "El cerdo", "El mono"],
      correcta: "El pájaro de color azul",
    },
    3: {
      id: 3,
      textoPregunta: "¿Quién relincha?",
      opciones: ["El pato", "La paloma", "El caballo"],
      correcta: "El caballo",
    },
    4: {
      id: 4,
      textoPregunta: "¿Las personas se sentían felices al escucharlos?",
      opciones: ["SI", "NO"],
      correcta: "SI",
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

  const JuegoLectura = () => {
    return (
      <ScrollView>
        <View style={css_DeLectura.divContenido}>
          <View style={css_DeLectura.divPregunta2}>
            <Image
              source={require("../img/cuentos/pajaro.png")}
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
                  fontSize: 17,
                  paddingHorizontal: 10,
                  paddingVertical: 2,
                  color: Colors.blue_dark,
                }}
              >
                Había un pájaro de color azul, que vivía en el tronco de un enorme árbol, todas las mañanas salía a cantar y empezaban a salir los demás animalitos que lo acompañaban en su cantar.
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  paddingHorizontal: 10,
                  paddingVertical: 2,
                  color: Colors.blue_dark,
                }}
              >
                ¡Kikiriki, kikiriki! Cantaba el gallo, ¡muuu, muuu! Mugía la vaca, ¡hiiii, hiiii! Relinchaba el caballo, ¡oink, oink! Gruñían los cerdos, así formaban un concierto al ritmo de sus sonidos, las personas que pasaban por ahí se sentían muy felices al escucharlos.
              </Text>              
            </View>
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
            <Dialogo texto="¡No te rindas Sigue Intetandolo!" />
          )}
          {respuestas >= 3 ? (
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
            <Trofeo Nombre="Master de la Comprensión Lectora VI" />
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
      if (respuestas >= 3) {
        let trofeosObj;
        if (trofeos.id === "") {
          trofeosObj = [];
        } else {
          trofeosObj = [...trofeos];
        }
        for (let i = 0; i < trofeos.length; i++) {
          if (trofeos[i].nombre == "Master de la Comprensión Lectora VI") {
            console.log("Ya tienes este trofeo");
            setMedalla(false);
            return;
          }
        }

        trofeosObj.push({
          id: aleatorio,
          nombre: "Master de la Comprensión Lectora VI",
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
    <View style={styles.Container}>
      <StatusBar style="light" />
      <HeaderGame name="El Cantar de los animalitos" />
      {/* <ScrollView> */}
      {preGame ? (
        <PreScreenGame txtDialogo="Lee el cuento y luego responde a la pregunta ¡Suerte!" />
      ) : null}
      {pregunta !== 5 && preGame == false ? <JuegoLectura /> : null}
      {preGame ? null : pregunta == 1 ? (
        <Preguntas NumPregunta={pregunta} />
      ) : null}
      {pregunta == 2 ? <Preguntas NumPregunta={pregunta} /> : null}
      {pregunta == 3 ? <Preguntas NumPregunta={pregunta} /> : null}
      {pregunta == 4 ? <Preguntas NumPregunta={pregunta} /> : null}
      {pregunta == 5 ? <NotaFinal /> : null}
      {/* </ScrollView> */}
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: Colors.blue_dark,
  },
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

export default Gm_CuentoAnimales;
