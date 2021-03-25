import { StatusBar } from "expo-status-bar";
import React, { useState, useContext } from "react";
import {
  Image,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View,
} from "react-native";
import FondoInicio from "../components/FondoInicio";
import { AuthContext } from "../navigation/AuthProvider";
import { Colors } from "../styles/Colors";
import { css_Registro, css_Inicio } from "../styles/Style";
import AwesomeAlert from "react-native-awesome-alerts";

const Registro = ({ navigation }) => {
  const { usuario, setUsuario, personaje, setPersonaje } = useContext(
    AuthContext
  );
  //#region  States de la APP
  const [alert1, setAlert1] = useState(false);
  const [alert2, setAlert2] = useState(false);
  const [alert3, setAlert3] = useState(false);
  const [alert4, setAlert4] = useState(false);
  const [nombre, setNombre] = useState("");
  const [person, setPerson] = useState(null);
  //#endregion
  const SeleccionarPersonaje = (heroe) => {
    setPerson(heroe);
  };

  const RegistrarUsuario = () => {
    let nombreReview;
    let numbers = "0123456789";
    // Validamos que el input del nombre no esté vacio
    if (nombre.trim() == 0) {
      return setAlert1(true);
    }
    // Validamos que el nombre ingresado tenga más de 3 letras
    if (nombre.length <= 3) {
      return setAlert2(true);
    }
    // Validamos que el nombre no tenga números
    for (let i = 0; i < nombre.length; i++) {
      if (numbers.indexOf(nombre[i]) > -1) {
        return setAlert3(true);
      } else {
        nombreReview = nombreReview + nombre[i];
      }
    }
    // Validamos que hayan escogido un personaje
    if (person == null) {
      return setAlert4(true);
    }
    // Agregamos el nombre al Context
    setUsuario(nombre);
    // Agregamos el personaje al context
    setPersonaje(person);
  };
  return (
    <View style={css_Registro.Container}>
      <AwesomeAlert
        // Alerta si el usuario no escribe su nombre
        show={alert1}
        showProgress={false}
        title="Ops!"
        message="Para continuar, escribe tu nombre"
        closeOnTouchOutside={true}
        closeOnHardwareBackPress={false}
        showCancelButton={false}
        showConfirmButton={true}
        confirmText="Aceptar"
        confirmButtonColor={Colors.yellow}
        onConfirmPressed={() => setAlert1(false)}
      />

      <AwesomeAlert
        // Alerta si el nombre del usuario es menor a 3 caracteres
        show={alert2}
        showProgress={false}
        title="Ops!"
        message="El nombre debe tener más de 3 letras"
        closeOnTouchOutside={true}
        closeOnHardwareBackPress={false}
        showCancelButton={false}
        showConfirmButton={true}
        confirmText="Aceptar"
        confirmButtonColor={Colors.yellow}
        onConfirmPressed={() => setAlert2(false)}
      />

      <AwesomeAlert
        // Alerta si el nombre del usuario tiene números
        show={alert3}
        showProgress={false}
        title="Ops!"
        message="El nombre no debe tener NÚMEROS"
        closeOnTouchOutside={true}
        closeOnHardwareBackPress={false}
        showCancelButton={false}
        showConfirmButton={true}
        confirmText="Aceptar"
        confirmButtonColor={Colors.yellow}
        onConfirmPressed={() => setAlert3(false)}
      />

      <AwesomeAlert
        // Alerta si no han seleccionado un personaje
        show={alert4}
        showProgress={false}
        title="Ops!"
        message="Elije un Personaje para continuar"
        closeOnTouchOutside={true}
        closeOnHardwareBackPress={false}
        showCancelButton={false}
        showConfirmButton={true}
        confirmText="Aceptar"
        confirmButtonColor={Colors.yellow}
        onConfirmPressed={() => setAlert4(false)}
      />

      <StatusBar backgroundColor={Colors.redLight} style="light" />
      <FondoInicio />
      <View style={css_Registro.RegistroDivFondo} />
      <View style={css_Registro.RegistroDiv}>
        <Image
          source={require("../img/oso_game.png")}
          style={css_Registro.imgOso}
        />
        <Text style={css_Registro.textoRegistro}>Escribe tu nombre:</Text>
        <View style={css_Registro.DivInput}>
          <Image
            source={require("../img/pollito.png")}
            style={css_Registro.imgInput}
          />
          <TextInput
            style={css_Registro.InputNombre}
            onChangeText={setNombre}
            value={nombre}
            textContentType="name"
            placeholder="Escribe tu nombre"
            placeholderTextColor={Colors.white}
          />
        </View>
        <Text style={css_Registro.textoRegistro}>Selecciona tu personaje:</Text>
        <View style={css_Registro.DivPersonajes}>
          <TouchableOpacity
            style={css_Registro.GirlImg}
            onPress={() => SeleccionarPersonaje("Nina")}
          >
            {person && person == "Nina" ? (
              <Image
                source={require("../img/girl.png")}
                style={css_Registro.PersonajeSelect}
              />
            ) : (
              <Image
                source={require("../img/girl.png")}
                style={css_Registro.PersonajeImg}
              />
            )}
          </TouchableOpacity>
          <TouchableOpacity
            style={css_Registro.KidImg}
            onPress={() => SeleccionarPersonaje("Santi")}
          >
            {person && person == "Santi" ? (
              <Image
                source={require("../img/kid.png")}
                style={css_Registro.PersonajeSelect}
              />
            ) : (
              <Image
                source={require("../img/kid.png")}
                style={css_Registro.PersonajeImg}
              />
            )}
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity
        style={css_Inicio.ViewPlayButton}
        onPress={() => RegistrarUsuario()}
      >
        <Image
          source={require("../img/play-button.png")}
          style={css_Inicio.imgBotonIniciar}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Registro;
