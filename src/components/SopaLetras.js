import { useNavigation } from "@react-navigation/core";
import React from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  FlatList,
  Image,
} from "react-native";
import { Colors } from "../styles/Colors";
import LetraBtn from "./LetraBtn";
import Opciones from "./Opciones";

const SopaLetras = ({Juego, Opcion1, Opcion2, Opcion3, Opcion4}) => {
  const navigation = useNavigation();
  let DATA;
  if(Juego == 'DeOposicion'){
      DATA = [
    "S","","","","",
   "I","","","","E",
     "N","","","","N",
    "E","u","","","C",
     "M","","a","","A",
     "B","p","","","M",
     "A","","e","","B",
     "R","","","r","I",
     "G","","","","O",
     "O","","","",""
    ];
  }
  if(Juego == 'CausaConsecuencia'){
      DATA = [
    "P","P","D","","P",
    "O","O","E","","O",
    "R","R","B","","R",
    "Q","E","I","","C",
    "U","N","D","","O",
    "E","D","O","","N",
    "","E","A","","S",
    "","","","r","I",
    "E","","","","G",
    "T","N","E","I","U"
    ];
  }
  if(Juego == 'DeTiempo'){
      DATA = [
    "F","","m","p","",
    "i","","i","o","",
    "n","","e","r","",
    "a","","n","u","s",
    "l","","t","l","e",
    "m","","r","t","u",
    "e","","a","i","p",
    "n","","s","m","s",
    "t","","","o","e",
    "e","","","","d"
    ];
  }  
  if(Juego == 'DeAdicion'){
      DATA = [
    "","","","","T",
    "","","","","A",
    "","","","O","M",
    "","","","M","B",
    "","S","","S","I",
    "","A","","I","E",
    "","M","","M","N",
    "","E","","I","",
    "","D","","S","",
    "","A","","A",""
    ];
  }



  const abecedario = "abcdefghigklmnopqrstuvwxyz";

  const Item = ({ item }) => {
    let id = abecedario[Math.floor(Math.random(4) * abecedario.length)];
    return <LetraBtn Letra={item} key={id} />;
  };
  return (
    <View style={styles.container}>
      <View style={styles.divOpciones}>
        <Opciones Value={Opcion1} />
        <Opciones Value={Opcion2} />
        <Opciones Value={Opcion3} />
        <Opciones Value={Opcion4} />

      </View>
      <View style={styles.lista}>
        <FlatList
          data={DATA}
          renderItem={Item}
          keyExtractor={(item) => item}
          numColumns="5"
          style={{ marginTop: 20 }}
        />
        <TouchableOpacity style={styles.btnOpcion} onPress={() => navigation.navigate('WinGame')}>
          <View style={styles.divIcon}>
            <Image
              source={require("../img/mando.png")}
              style={styles.iconOpcion}
            />
          </View>
          <Text style={styles.txtOpcion}>Terminar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 8 },
  divOpciones: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  cell: {
    padding: 2,
    backgroundColor: Colors.turquesa,
    width: 45,
    borderColor: Colors.blue_dark,
    borderWidth: 1,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  cellPress: {
    padding: 2,
    backgroundColor: Colors.yellow,
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  cellText: {
    color: Colors.white,
    fontSize: 22,
    textTransform: "uppercase",
    fontWeight: "bold",
    textAlign: "center",
  },
  lista: { flex: 1, alignItems: "center", justifyContent: "center" },
  btnOpcion: {
    flexDirection: "row",
    backgroundColor: Colors.turquesa,
    padding: 4,
    width: "66%",
    borderRadius: 30,
    alignSelf: "center",
    alignItems: "center",
    margin: "1%",
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

export default SopaLetras;