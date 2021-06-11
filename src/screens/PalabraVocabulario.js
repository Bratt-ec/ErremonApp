import React, { useContext } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import HeaderGame from "../components/HeaderGame";
import { css_JuegoImagenes, css_Vocabulario } from "../styles/GameStyle";
import { Ionicons } from "@expo/vector-icons";
import { AuthContext } from "../navigation/AuthProvider";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { TouchableOpacity } from "react-native-gesture-handler";

const PalabraVocabulario = ({ navigation }) => {
  const { objPalabra } = useContext(AuthContext);

  const RepetirJuego = () => {
    navigation.navigate("Vocabulario");
  };

  const FinJuego = () => {
    navigation.navigate("Menu");
  };

  const ImagenVocabulario = ({Palabra}) =>{
    if(Palabra == 'Estadio'){          
      return <Image source={require('../img/vocabulario/estadio.png')} style={css_Vocabulario.imgVocabulario}/>;
    }
    if(Palabra == 'bacteria'){          
      return <Image source={require('../img/vocabulario/bacteria.png')} style={css_Vocabulario.imgVocabulario}/>;
    }
    if(Palabra == 'microorganismo'){          
      return <Image source={require('../img/vocabulario/microorganismo.png')} style={css_Vocabulario.imgVocabulario}/>;
    }
    if(Palabra == 'cabaña'){          
      return <Image source={require('../img/vocabulario/cabana.png')} style={css_Vocabulario.imgVocabulario}/>;
    }
    if(Palabra == 'ganado'){          
      return <Image source={require('../img/vocabulario/ganado.png')} style={css_Vocabulario.imgVocabulario}/>;
    }
    if(Palabra == 'Alce'){          
      return <Image source={require('../img/vocabulario/alce.png')} style={css_Vocabulario.imgVocabulario}/>;
    }
    if(Palabra == 'panda'){          
      return <Image source={require('../img/vocabulario/panda.png')} style={css_Vocabulario.imgVocabulario}/>;
    }
  }
  return (
    <View style={css_JuegoImagenes.Container}>
      <HeaderGame image="book.png" name="NUEVA PALABRA" />
      {/* <View style={css_Vocabulario.Mensaje}>
        <Text style={css_Vocabulario.txtMensaje}>
          Encontraste una nueva palabra
        </Text>
        <Image
          source={require("../img/oso_game_7.png")}
          style={css_Vocabulario.imgOso}
        />
      </View> */}

      <View style={css_Vocabulario.ContainerPalabra}>
        <View style={css_Vocabulario.divPalabra}>
          <View>
            <Text style={css_Vocabulario.txtPalabra}>{objPalabra.palabra}</Text>
            <Text style={css_Vocabulario.txtTipo}>{objPalabra.tipo}</Text>
          </View>

          <Ionicons
            name="information-circle"
            size={50}
            color={Colors.blue_dark}
          />
        </View>
        <View style={css_Vocabulario.divSignificado}>
          <ImagenVocabulario Palabra={objPalabra.palabra} />
          {/* <Ionicons
            name="chatbubble-ellipses-sharp"
            size={40}
            color={Colors.blue_dark}
          /> */}
          <Text style={css_Vocabulario.txtSignificado}>
            {objPalabra.definicion}
          </Text>
        </View>
      </View>
      <View style={css_Vocabulario.divBotones2}>
        <TouchableOpacity
          style={css_Vocabulario.btnVocabulario2}
          onPress={() => FinJuego()}
        >
          <Ionicons name="checkbox" size={36} color={Colors.blue_dark} />
          <Text style={css_Vocabulario.txtBoton}>Regresar al Menú</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={css_Vocabulario.btnVocabulario2}
          onPress={() => RepetirJuego()}
        >
          <Ionicons
            name="md-reload-circle"
            size={36}
            color={Colors.blue_dark}
          />
          <Text style={css_Vocabulario.txtBoton}>Encontrar otra palabra</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PalabraVocabulario;

const styles = StyleSheet.create({});
