import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import HeaderGame from "../components/HeaderGame";
import { css_JuegoImagenes } from "../styles/GameStyle";
import { css_Acerca, css_Trofeos } from "../styles/Style";
import { FontAwesome5 } from "@expo/vector-icons";
import { Colors } from "react-native/Libraries/NewAppScreen";

const AcercaDe = ({ navigation }) => {
  return (
    <ScrollView style={css_JuegoImagenes.Container}>
      <HeaderGame name="Acerca de Erremon" />
        <TouchableOpacity
          style={css_Trofeos.btnMenu}
          onPress={() => {
            navigation.openDrawer();
          }}
        >
          <FontAwesome5 name="bars" size={34} color={Colors.white} />
        </TouchableOpacity>
      <View style={css_Acerca.contenido}>
        <Image source={require("../img/oso_1.png")} style={css_Acerca.imgOso} />
        <Text style={css_Acerca.titulos}>INTRODUCCIÓN</Text>

        <Text style={css_Acerca.texto}>
          Juega y aprende con ErreMOn es dirigido para usuarios entre 8 y 10
          años.
        </Text>

        <Text style={css_Acerca.texto}>
          • Se pueden ver los trofeos que el usuario va ganando.
        </Text>

        <Text style={css_Acerca.texto}>
          • Se puede seleccionar entre 2 usuarios uno para niño y otro para
          niña.
        </Text>

        <Text style={css_Acerca.texto}>
          La lectura es un elemento clave en el proceso de enseñanza, a través
          de él, las personas pueden mejorar y desarrollar sus propias
          habilidades y destrezas lingüísticas, como hablar, leer, escribir,
          comprender el entorno y otras habilidades, para que puedan expresar
          eficazmente sus pensamientos de manera clara y precisa.
        </Text>

        <Text style={css_Acerca.texto}>
          Los niños desde que nacen ya son nativos digitales y por ello debemos
          aprovechar las herramientas que ofrece la tecnología. Para mejorar y
          reforzar sus conocimientos adquiridos en el aula de clase.
        </Text>

        <Text style={css_Acerca.titulos}>MÉTODO</Text>

        <Text style={css_Acerca.texto}>
          Juega y aprende con ErreMOn cuenta con 5 misiones cada una de ellas
          con diferentes juegos que ayudaran a desarrollar sus habilidades
          lectoras además tiene un test evaluativo que permitirá verificar lo
          aprendido a través de los resultados obtenidos.
        </Text>

        <Text style={css_Acerca.titulos}>JUEGOS</Text>

        <Text style={css_Acerca.texto}>
          En cada una de las diferentes misiones encontraran los siguientes
          juegos:
        </Text>

        <Text style={css_Acerca.texto}>• Sopa de letras</Text>
        <Text style={css_Acerca.texto}>• Crucigramas</Text>
        <Text style={css_Acerca.texto}>• Juego de imágenes</Text>

        <Text style={css_Acerca.texto}>• Juego de lectura</Text>

        <Text style={css_Acerca.texto}>• Vocabulario</Text>

        <Text style={css_Acerca.titulos}>Niveles</Text>

        <Text style={css_Acerca.texto}>
          Cada uno de los juegos cuentan con niveles de dificultad, que permite
          que el niño avance a su propio ritmo, ayudando a que el usuario pueda
          interrumpir el juego y volver en otro momento.
        </Text>

        <Text style={css_Acerca.texto}>
          A medida que avance los niveles el niño obtiene trofeos.
        </Text>

        <Text style={css_Acerca.texto2}>• Nivel 1: Tipos de conectores.</Text>
        <Text style={css_Acerca.texto}>
          La primera actividad conectores cuenta con 4 juegos, su principal
          objetivo es conocer y practicar el uso correcto de los conectores
          mediante la gamificación, permitiendo a los alumnos a que aprendan a
          unir ideas, conectar distintas partes de un texto, ya sean palabras,
          oraciones o incluso párrafos completos, logrando como resultado
          identificar claramente el modo en que se relacionan entre sí.
        </Text>

        <Text style={css_Acerca.texto2}>• Nivel 2: Fomentar la escritura.</Text>
        <Text style={css_Acerca.texto}>
          La segunda actividad crucigrama permitirá desarrollar las capacidades
          lingüísticas y aumentar el léxico de los infantes a través del
          aprendizaje de nuevas palabras y sinónimos.
        </Text>

        <Text style={css_Acerca.texto2}>
          • Nivel 3: Desarrollo de la creatividad.
        </Text>
        <Text style={css_Acerca.texto}>
          La tercera actividad juego de imágenes permitirá a los estudiantes
          desarrollar su creatividad, donde implementamos una ruleta didáctica
          que consiste en hacerla girar y según la palabra que le toque deberá
          ordenar la oración guiándose en las imágenes que se presentará.
        </Text>

        <Text style={css_Acerca.texto2}>
          • Nivel 4: Compresión lectora mediante audio cuentos y cuentos cortos.
        </Text>
        <Text style={css_Acerca.texto2}>
          La cuarta actividad juego de lectura mejorará la concentración y
          atención en los estudiantes al escuchar y comprender los audios
          cuentos de la misma manera los cuentos cortos aumentará su comprensión
          lectora y motivará a los estudiantes a practicar la lectura.
        </Text>

        <Text style={css_Acerca.texto2}>
          • Nivel 5: Conocer nuevas palabras a través del vocabulario.
        </Text>
        <Text style={css_Acerca.texto}>
          La quinta actividad vocabulario desarrolla el aprendizaje de nuevas
          palabras el mismo es indispensable en la comprensión lectora, debido a
          eso la importancia que los niños conozcan el significado de diversos
          tipos de palabras y expresiones.
        </Text>

        <Text style={css_Acerca.titulos}>Habilidades</Text>

        <Text style={css_Acerca.texto}>• Memorización visual</Text>

        <Text style={css_Acerca.texto}>• Atención y Concentración</Text>

        <Text style={css_Acerca.texto}>• Creatividad</Text>

        <Text style={css_Acerca.texto}>• Compresión lectora</Text>

        <Text style={css_Acerca.texto}>• Lectoescritura</Text>

        <Text style={css_Acerca.titulos}>AUTORAS</Text>

        <Text style={css_Acerca.texto}>Rosa Elizabeth Erreyes Zambrano</Text>

        <Text style={css_Acerca.texto}>Lady Stephany Montesdeoca Guaycha</Text>
      </View>
    </ScrollView>
  );
};

export default AcercaDe;
