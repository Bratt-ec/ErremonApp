import React, { useState, useEffect, useContext } from "react";
import {
  Image,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Button,
  BackHandler,
  TextInput,
} from "react-native";
import HeaderGame from "../components/HeaderGame";
import PreScreenGame from "../components/PreScreenGame";
import Ruleta from "../components/Ruleta";
import { AuthContext } from "../navigation/AuthProvider";
import { Colors } from "../styles/Colors";
import { css_JuegoImagenes, css_Vocabulario } from "../styles/GameStyle";
import AwesomeAlert from "react-native-awesome-alerts";
import LoseGame from "../screens/LoseGame";
import WinGame from "../screens/WinGame";

const JuegoImagenes = () => {
  const {
    itemRuleta,
    setItemRuleta,
    preGame,
    setPreGame,
    trofeos,
    setTrofeos,
    juegosCompletados,
    setJuegosCompletados,
  } = useContext(AuthContext);
  // State
  const [item, setItem] = useState("");
  const [oracion, setOracion] = useState("");
  const [alert1, setAlert1] = useState(false);
  const [win, setWin] = useState(false);
  const [lose, setLose] = useState(false);
  const [ ruleta, setRuleta] = useState(true);
  //
  let aleatorio = Math.random();

  const backHandler = BackHandler.addEventListener("hardwareBackPress", () =>
    setItemRuleta(null)
  );

  const RuletaView = () => <Ruleta />;
  const Imagenes = ({ Tipo }) => {
    if (Tipo == "DRAGON") {
      setOracion(
        "El dragón sale a volar por las montañas buscando su alimento"
      );
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
      setOracion(
        "El sol sale en la mañana y los niños salen a jugar despues de almorzar"
      );
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
                despues de almorzar
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
      setOracion("El gato y el perro juegan en el parque");
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
      setOracion(
        "Maria luego de salir de clase abre el candado de la puerta para ingresar a su casa"
      );
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
      setOracion(
        "Para endender la cocina usamos un fósforo y así podremos cocinar"
      );
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
      setOracion(
        "Lucas al salir de clase hace todas sus tareas y luego se va jugar al parque"
      );
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
      setOracion(
        "La tapa es muy bonita sus curvas son como las flores y las nubes del cielo"
      );
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
      setOracion(
        "La niña está muy feliz porque le regalaron un bonito vestido"
      );
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
    const [respuesta, setRespuesta] = useState("");

    //Verificamos si la oración escrita es correcta
    const VerificarOracion = (respuesta) => {
      // Verificamos si la respuesta no está vacia
      if (respuesta.length <= 15) return setAlert1(true);
      // Verificamos si las oraciones son iguales => respuesta == oracion ? true : false
      if (respuesta == oracion) {
        setWin(true);
        let trofeosObj;
        if (trofeos.id === "") {
          trofeosObj = [];
        } else {
          trofeosObj = [...trofeos];
        }
        // Creamos el trofeo del juego
        trofeosObj.push({
          id: aleatorio,
          nombre: "Master de las Oraciones",
          estrellas: "5",
        });
        // Reiniciamos el item de la ruleta
        setItemRuleta(null)
        setItem('')
        // Registramos el trofeo en el context
        setTrofeos(trofeosObj);
        setJuegosCompletados(juegosCompletados + 1);
      } else {
        setItemRuleta(null)
        setItem('')
        setLose(true);
      }
    };

    return (
      <View>
        <AwesomeAlert
          // Alerta si el usuario no escribe su nombre
          show={alert1}
          showProgress={false}
          title="Ops!"
          message="Primero escribe una oración!!"
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          showCancelButton={false}
          showConfirmButton={true}
          confirmText="Aceptar"
          confirmButtonColor={Colors.yellow}
          onConfirmPressed={() => setAlert1(false)}
        />
        <Imagenes Tipo={Nombre} />
        <View>
          <TextInput
            style={css_JuegoImagenes.InputOracion}
            onChangeText={setRespuesta}
            value={respuesta}
            multiline={true}
            numberOfLines={4}
            placeholder="Escribe correctamente la oración"
            placeholderTextColor={Colors.white}
          />
          <TouchableOpacity
            style={css_Boton.btnOpcion}
            onPress={() => VerificarOracion(respuesta)}
          >
            <View style={css_Boton.divIcon}>
              <Image
                source={require("../img/mando.png")}
                style={css_Boton.iconOpcion}
              />
            </View>
            <Text style={css_Boton.txtOpcion}>Terminar</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  useEffect(() => {
    console.log(ruleta);
    if(itemRuleta !== null) setRuleta(false) ;
    setItem(itemRuleta);
    // console.log('Y el juego es:' + item);
    return () => backHandler.remove();
  }, [itemRuleta]);

  return (
    <View style={css_JuegoImagenes.Container}>
      <HeaderGame image="book.png" name="JUEGO DE IMÁGENES" />
      {preGame ? (
        <PreScreenGame txtDialogo="Gira la ruleta y arma la oración correctamente ¡SUERTE!" />
      ) :null}
      {ruleta ? <RuletaView />  : null}
      {win ? (
        <WinGame
          Siguiente="Menu"
          Win={true}
          NombreTrofeo="Master de las Oraciones"
        />
      ) : null}
      {lose ? <LoseGame Siguiente="Menu" /> : null}
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
    width: 230,
    borderRadius: 30,
    alignSelf: "center",
    alignItems: "center",
    marginTop: "10%",
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
    marginHorizontal: "5%",
    textShadowOffset: { width: 1, height: 1 },
    textTransform: "uppercase",
  },
});
export default JuegoImagenes;
