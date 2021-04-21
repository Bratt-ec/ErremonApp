import React, { useState, useEffect, useContext } from "react";
import {
  Image,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Button,
  BackHandler,
} from "react-native";
import HeaderGame from "../components/HeaderGame";
import PreScreenGame from "../components/PreScreenGame";
import Ruleta from "../components/Ruleta";
import { AuthContext } from "../navigation/AuthProvider";
import { Colors } from "../styles/Colors";
import { css_JuegoImagenes, css_Vocabulario } from "../styles/GameStyle";

const JuegoImagenes = () => {
  const { itemRuleta, setItemRuleta, preGame, setPreGame } = useContext(
    AuthContext
  );
  // State
  const [item, setItem] = useState("");
  const [oracion, setOracion] = useState("");
  const [respuesta, setRespuesta] = useState("");
  //
  const backHandler = BackHandler.addEventListener("hardwareBackPress", () =>
    setItemRuleta(null),
  );

  const RuletaView = () => <Ruleta />;
  const Imagenes = ({ Tipo }) => {
    if (Tipo == "DRAGON") {
      return (
        <View style={css_JuegoImagenes.divJuego}>
          <View style={css_JuegoImagenes.divImgOracion}>
            <Image
              source={require("../img/juego-imagenes/montania.png")}
              style={css_JuegoImagenes.imgOracion}
            />
            <Image
              source={require("../img/juego-imagenes/dragon.png")}
              style={css_JuegoImagenes.imgOracion}
            />
            <Image
              source={require("../img/juego-imagenes/carne.png")}
              style={css_JuegoImagenes.imgOracion}
            />
          </View>
          <View style={css_JuegoImagenes.divOracionesEjemplo}>
            <View style={css_JuegoImagenes.Ejemplos}>
              <Text style={css_JuegoImagenes.txtEjemplos}>
                por las montañas
              </Text>
            </View>
            <View style={css_JuegoImagenes.Ejemplos}>
              <Text style={css_JuegoImagenes.txtEjemplos}>
                El dragon sale a volar
              </Text>
            </View>
            <View style={css_JuegoImagenes.Ejemplos}>
              <Text style={css_JuegoImagenes.txtEjemplos}>
                buscando su alimento
              </Text>
            </View>
          </View>
        </View>
      );
    }

    if (Tipo == "PLATO") {
      return (
        <View style={css_JuegoImagenes.divJuego}>
          <View style={css_JuegoImagenes.divImgOracion}>
            <Image
              source={require("../img/juego-imagenes/sol.png")}
              style={css_JuegoImagenes.imgOracion}
            />
            <Image
              source={require("../img/juego-imagenes/plato.png")}
              style={css_JuegoImagenes.imgOracion}
            />
            <Image
              source={require("../img/juego-imagenes/boy.png")}
              style={css_JuegoImagenes.imgOracion}
            />
          </View>
          <View style={css_JuegoImagenes.divOracionesEjemplo}>
            <View style={css_JuegoImagenes.Ejemplos}>
              <Text style={css_JuegoImagenes.txtEjemplos}>
                El sol sale en la mañana
              </Text>
            </View>
            <View style={css_JuegoImagenes.Ejemplos}>
              <Text style={css_JuegoImagenes.txtEjemplos}>
                Despues de almorzar
              </Text>
            </View>
            <View style={css_JuegoImagenes.Ejemplos}>
              <Text style={css_JuegoImagenes.txtEjemplos}>
                y los niños salen a jugar
              </Text>
            </View>
          </View>
        </View>
      );
    }

    if (Tipo == "GATO") {
      return (
        <View style={css_JuegoImagenes.divJuego}>
          <View style={css_JuegoImagenes.divImgOracion}>
            <Image
              source={require("../img/juego-imagenes/gato.png")}
              style={css_JuegoImagenes.imgOracion}
            />
            <Image
              source={require("../img/juego-imagenes/parque.png")}
              style={css_JuegoImagenes.imgOracion}
            />
            <Image
              source={require("../img/juego-imagenes/perro.png")}
              style={css_JuegoImagenes.imgOracion}
            />
          </View>
          <View style={css_JuegoImagenes.divOracionesEjemplo}>
            <View style={css_JuegoImagenes.Ejemplos}>
              <Text style={css_JuegoImagenes.txtEjemplos}>El gato</Text>
            </View>
            <View style={css_JuegoImagenes.Ejemplos}>
              <Text style={css_JuegoImagenes.txtEjemplos}>
                juegan en el parque
              </Text>
            </View>
            <View style={css_JuegoImagenes.Ejemplos}>
              <Text style={css_JuegoImagenes.txtEjemplos}>y el perro</Text>
            </View>
          </View>
        </View>
      );
    }

    if (Tipo == "CANDADO") {
      return (
        <View style={css_JuegoImagenes.divJuego}>
          <View style={css_JuegoImagenes.divImgOracion}>
            <Image
              source={require("../img/juego-imagenes/casa.png")}
              style={css_JuegoImagenes.imgOracion}
            />
            <Image
              source={require("../img/juego-imagenes/candado.png")}
              style={css_JuegoImagenes.imgOracion}
            />
            <Image
              source={require("../img/juego-imagenes/estudiante.png")}
              style={css_JuegoImagenes.imgOracion}
            />
          </View>
          <View style={css_JuegoImagenes.divOracionesEjemplo}>
            <View style={css_JuegoImagenes.Ejemplos}>
              <Text style={css_JuegoImagenes.txtEjemplos}>
                para ingresar a su casa
              </Text>
            </View>
            <View style={css_JuegoImagenes.Ejemplos}>
              <Text style={css_JuegoImagenes.txtEjemplos}>
                abre el candado de la puerta
              </Text>
            </View>
            <View style={css_JuegoImagenes.Ejemplos}>
              <Text style={css_JuegoImagenes.txtEjemplos}>
                Maria luego de salir de clase
              </Text>
            </View>
          </View>
        </View>
      );
    }

    if (Tipo == "FOSFORO") {
      return (
        <View style={css_JuegoImagenes.divJuego}>
          <View style={css_JuegoImagenes.divImgOracion}>
            <Image
              source={require("../img/juego-imagenes/comida.png")}
              style={css_JuegoImagenes.imgOracion}
            />
            <Image
              source={require("../img/juego-imagenes/fosforo.png")}
              style={css_JuegoImagenes.imgOracion}
            />
            <Image
              source={require("../img/juego-imagenes/estufa.png")}
              style={css_JuegoImagenes.imgOracion}
            />
          </View>
          <View style={css_JuegoImagenes.divOracionesEjemplo}>
            <View style={css_JuegoImagenes.Ejemplos}>
              <Text style={css_JuegoImagenes.txtEjemplos}>
                y así podremos cocinar
              </Text>
            </View>
            <View style={css_JuegoImagenes.Ejemplos}>
              <Text style={css_JuegoImagenes.txtEjemplos}>
                usamos un fosforo
              </Text>
            </View>
            <View style={css_JuegoImagenes.Ejemplos}>
              <Text style={css_JuegoImagenes.txtEjemplos}>
                Para endender la cocina
              </Text>
            </View>
          </View>
        </View>
      );
    }

    if (Tipo == "LIBRO") {
      return (
        <View style={css_JuegoImagenes.divJuego}>
          <View style={css_JuegoImagenes.divImgOracion}>
            <Image
              source={require("../img/juego-imagenes/estudiante.png")}
              style={css_JuegoImagenes.imgOracion}
            />
            <Image
              source={require("../img/juego-imagenes/parque.png")}
              style={css_JuegoImagenes.imgOracion}
            />
            <Image
              source={require("../img/juego-imagenes/libro.png")}
              style={css_JuegoImagenes.imgOracion}
            />
          </View>
          <View style={css_JuegoImagenes.divOracionesEjemplo}>
            <View style={css_JuegoImagenes.Ejemplos}>
              <Text style={css_JuegoImagenes.txtEjemplos}>
                Lucas al salir de clase
              </Text>
            </View>
            <View style={css_JuegoImagenes.Ejemplos}>
              <Text style={css_JuegoImagenes.txtEjemplos}>
                y luego se va jugar al parque
              </Text>
            </View>
            <View style={css_JuegoImagenes.Ejemplos}>
              <Text style={css_JuegoImagenes.txtEjemplos}>
                hace todas sus tareas
              </Text>
            </View>
          </View>
        </View>
      );
    }

    if (Tipo == "TAPILLA") {
      return (
        <View style={css_JuegoImagenes.divJuego}>
          <View style={css_JuegoImagenes.divImgOracion}>
            <Image
              source={require("../img/juego-imagenes/nube.png")}
              style={css_JuegoImagenes.imgOracion}
            />
            <Image
              source={require("../img/juego-imagenes/tapilla.png")}
              style={css_JuegoImagenes.imgOracion}
            />
            <Image
              source={require("../img/juego-imagenes/flor.png")}
              style={css_JuegoImagenes.imgOracion}
            />
          </View>
          <View style={css_JuegoImagenes.divOracionesEjemplo}>
            <View style={css_JuegoImagenes.Ejemplos}>
              <Text style={css_JuegoImagenes.txtEjemplos}>
                y las nubes del cielo
              </Text>
            </View>
            <View style={css_JuegoImagenes.Ejemplos}>
              <Text style={css_JuegoImagenes.txtEjemplos}>
                La tapa es muy bonita
              </Text>
            </View>
            <View style={css_JuegoImagenes.Ejemplos}>
              <Text style={css_JuegoImagenes.txtEjemplos}>
                sus curvas son como las flores
              </Text>
            </View>
          </View>
        </View>
      );
    }

    if (Tipo == "REGALO") {
      return (
        <View style={css_JuegoImagenes.divJuego}>
          <View style={css_JuegoImagenes.divImgOracion}>
            <Image
              source={require("../img/juego-imagenes/ropa.png")}
              style={css_JuegoImagenes.imgOracion}
            />
            <Image
              source={require("../img/juego-imagenes/regalo.png")}
              style={css_JuegoImagenes.imgOracion}
            />
            <Image
              source={require("../img/juego-imagenes/nina.png")}
              style={css_JuegoImagenes.imgOracion}
            />
          </View>
          <View style={css_JuegoImagenes.divOracionesEjemplo}>
            <View style={css_JuegoImagenes.Ejemplos}>
              <Text style={css_JuegoImagenes.txtEjemplos}>
                un bonito vestido
              </Text>
            </View>
            <View style={css_JuegoImagenes.Ejemplos}>
              <Text style={css_JuegoImagenes.txtEjemplos}>
                porque le regalaron
              </Text>
            </View>
            <View style={css_JuegoImagenes.Ejemplos}>
              <Text style={css_JuegoImagenes.txtEjemplos}>
                La niña está muy feliz
              </Text>
            </View>
          </View>
        </View>
      );
    }

  };
  const ActividadImagenes = ({ Nombre }) => {
    return (
      <View>
        <Imagenes Tipo={Nombre} />
      </View>
    );
  };

  useEffect(() => {
    setItem(itemRuleta);
    // console.log('Y el juego es:' + item);
    return () => backHandler.remove();
  }, [itemRuleta]);

  return (
    <View style={css_JuegoImagenes.Container}>
      <HeaderGame image="book.png" name="JUEGO DE IMÁGENES" />
      {preGame ? <PreScreenGame txtDialogo='Gira la ruleta y arma la oración correctamente ¡SUERTE!'/> : null }
      {item == null && preGame == false ? <RuletaView /> : null}
      {item == "DRAGON" ? <ActividadImagenes Nombre="DRAGON" /> : null}
      {item == "LIBRO" ? <ActividadImagenes Nombre="LIBRO" /> : null}
      {item == "REGALO" ? <ActividadImagenes Nombre="REGALO" /> : null}
      {item == "GATO" ? <ActividadImagenes Nombre="GATO" /> : null}
      {item == "CANDADO" ? <ActividadImagenes Nombre="CANDADO" /> : null}
      {item == "FOSFORO" ? <ActividadImagenes Nombre="FOSFORO" /> : null}
      {item == "PLATO" ? <ActividadImagenes Nombre="PLATO" /> : null}
      {item == "TAPILLA" ? <ActividadImagenes Nombre="TAPILLA" /> : null}
    </View>
  );
};

const css_Boton = StyleSheet.create({
  btnOpcion: {
    flexDirection: "row",
    backgroundColor: Colors.turquesa,
    padding: 4,
    width: "66%",
    borderRadius: 30,
    alignSelf: "center",
    alignItems: "center",
    marginTop: "24%",
    margin: "2%",
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
    backgroundColor: Colors.yellow,
    width: "24%",
    height: 50,
    borderRadius: 30,
  },
  iconOpcion: {
    resizeMode: "contain",
    width: "75%",
    height: 50,
    alignSelf: "center",
  },
  txtOpcion: {
    fontSize: 24,
    color: Colors.yellow,
    fontWeight: "bold",
    textShadowRadius: 3,
    textShadowColor: "black",
    marginHorizontal: "2%",
    textShadowOffset: { width: 1, height: 1 },
    textTransform: "uppercase",
  },
});
export default JuegoImagenes;
