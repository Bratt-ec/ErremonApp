import React, { useEffect, useState, useContext } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import HeaderGame from "../components/HeaderGame";
import { Palabras } from "../components/Palabras";
import SnakeApp from "../components/snake/Snake";
import { AuthContext } from "../navigation/AuthProvider";
import { Colors } from "../styles/Colors";
import { css_JuegoImagenes, css_Vocabulario } from "../styles/GameStyle";
import { Ionicons } from "@expo/vector-icons";
import PreScreenGame from "../components/PreScreenGame";
const Vocabulario = ({navigation}) => {
  const { palabraVocabulario, setPalabraVocabulario,onVocabulario, setOnVocabulario , preGame,
    setPreGame} = useContext(AuthContext);
  const [nuevaPalabra, setNuevaPalabra] = useState(false);

  if (palabraVocabulario == 20) {
    setPalabraVocabulario(1);
  }

  const NumeroPalabra = Palabras.find(
    (palabra) => palabra.id == palabraVocabulario
  );

  const RepetirJuego = ()=>{
      setNuevaPalabra(false)
      setPalabraVocabulario(palabraVocabulario + 1);
      setOnVocabulario(false);
  }

  const FinJuego = ()=>{
    setPalabraVocabulario(palabraVocabulario + 1);
    setOnVocabulario(false);
    navigation.navigate('Menu');
  }

  const PalabraNueva = ({ Palabra }) => (
    <View>
      <HeaderGame image="book.png" name="VOCABULARIO" />

      <View style={css_Vocabulario.Mensaje}>
        <Text style={css_Vocabulario.txtMensaje}>
          Encontraste una nueva palabra
        </Text>
        <Image
          source={require("../img/oso_game_7.png")}
          style={css_Vocabulario.imgOso}
        />
      </View>

      <View style={css_Vocabulario.ContainerPalabra}>
        <View style={css_Vocabulario.divPalabra}>
          <View>
            <Text style={css_Vocabulario.txtPalabra}>{Palabra.palabra}</Text>
            <Text style={css_Vocabulario.txtTipo}>{Palabra.tipo}</Text>
          </View>

          <Ionicons
            name="information-circle"
            size={50}
            color={Colors.blue_dark}
          />
        </View>
        <View style={css_Vocabulario.divSignificado}>
          <Ionicons
            name="chatbubble-ellipses-sharp"
            size={40}
            color={Colors.blue_dark}
          />
          <Text style={css_Vocabulario.txtSignificado}>
            {Palabra.definicion}
          </Text>
        </View>
      </View>
      <View style={css_Vocabulario.divBotones}>
        <TouchableOpacity style={css_Vocabulario.btnVocabulario} onPress={()=> FinJuego()}>
          <Ionicons name="checkbox" size={36} color={Colors.blue_dark} />
          <Text style={css_Vocabulario.txtBoton}>Listo</Text>
        </TouchableOpacity>

        <TouchableOpacity style={css_Vocabulario.btnVocabulario} onPress={()=> RepetirJuego()}>
          <Ionicons
            name="md-reload-circle"
            size={36}
            color={Colors.blue_dark}
          />
          <Text style={css_Vocabulario.txtBoton}>Otra vez</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

return(
    <View style={css_JuegoImagenes.Container}> 
        {onVocabulario ? <PalabraNueva Palabra={NumeroPalabra} /> : <SnakeApp />}
    </View>
)
};

export default Vocabulario;
