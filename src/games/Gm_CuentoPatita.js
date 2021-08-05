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

const Gm_CuentoPatita = () => {
  const { trofeos, setTrofeos, juegosCompletados, setJuegosCompletados } =
    useContext(AuthContext);
  //
  const { preGame, setPreGame } = useContext(AuthContext);
  const [pregunta, setPregunta] = useState(1);
  const [respuestas, setRespuestas] = useState(1);
  const [play, setPlay] = useState(false);
  const [medalla, setMedalla] = useState(false);
  const video = useRef(null);
  const backHandler = BackHandler.addEventListener("hardwareBackPress", () =>
    setPreGame(true)
  );

  const objPreguntas = {
    1: {
      id: 1,
      textoPregunta: "¿Quién encontró el grano de trigo?",
      opciones: ["La gallina", "La patita blanca", "El perro"],
      correcta: "La patita blanca",
    },
    2: {
      id: 2,
      textoPregunta: "¿Qué hizo la patita blanca con el grano de trigo?",
      opciones: ["Lo sembró ", "Lo boto", "Se comió "],
      correcta: "Lo sembró",
    },
    3: {
      id: 3,
      textoPregunta: "¿Con quién se comió los panes la patita blanca?",
      opciones: ["Con sus amigos", "Sola", "Con sus patitos"],
      correcta: "Con sus patitos",
    },
    // 4:{id:4, textoPregunta: '¿Con quién se comió los panes la patita blanca?', opciones:['SI','NO','TAL VEZ'], correcta: 'SI' },
    // 5:{id:5, textoPregunta: '¿Rocky es un..?', opciones:['Un León','Un Conejo','Un Oso'], correcta: 'Un León' },
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
              source={require("../img/cuentos/pata.png")}
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
                Había una vez, una patita blanca que encontró un grano de trigo.
                Ella sembró ese grano de trigo, Muy pronto el trigo empezó a
                crecer asomando por encima de la tierra.
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  paddingHorizontal: 10,
                  paddingVertical: 2,
                  color: Colors.blue_dark,
                }}
              >
                Y el trigo siguió creciendo y creciendo hasta que estuvo muy
                alto y maduro. La patita llevó el trigo al molino y muy pronto
                volvió con una bolsa de harina.
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  paddingHorizontal: 10,
                  paddingVertical: 2,
                  color: Colors.blue_dark,
                }}
              >
                La patita muy contenta amasó la harina e hizo unos ricos panes.
                Gracias a que sembró y cosecho el grano de trigo pudo hacer unos
                ricos panes y comer junto a sus patitos.
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
              <Text style={css_DeLectura.txtPregunta}>{respuestas}/3</Text>
            </View>
          </View>

          {respuestas >= 3 ? (
            <Dialogo texto="Felicidades has respondido bien todas las preguntas, eres GENIAL" />
          ) : respuestas >= 2 ? (
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
            <Trofeo Nombre="Master de la Comprensión Lectora III" />
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
    if (pregunta == 3) {
      if (respuestas >= 2) {
        let trofeosObj;
        if (trofeos.id === "") {
          trofeosObj = [];
        } else {
          trofeosObj = [...trofeos];
        }
        for (let i = 0; i < trofeos.length; i++) {
          if (trofeos[i].nombre == "Master de la Comprensión Lectora III") {
            console.log("Ya tienes este trofeo");
            setMedalla(false);
            return;
          }
        }

        trofeosObj.push({
          id: aleatorio,
          nombre: "Master de la Comprensión Lectora III",
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
      <HeaderGame name="La Patita Blanca" />
      {/* <ScrollView> */}
      {preGame ? (
        <PreScreenGame txtDialogo="Lee el cuento y luego responde a la pregunta ¡Suerte!" />
      ) : null}
      {pregunta !== 4 && preGame == false ? <JuegoLectura /> : null}
      {preGame ? null : pregunta == 1 ? (
        <Preguntas NumPregunta={pregunta} />
      ) : null}
      {pregunta == 2 ? <Preguntas NumPregunta={pregunta} /> : null}
      {pregunta == 3 ? <Preguntas NumPregunta={pregunta} /> : null}
      {pregunta == 4 ? <NotaFinal /> : null}
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

export default Gm_CuentoPatita;
