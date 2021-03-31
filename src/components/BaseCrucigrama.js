import { useNavigation } from "@react-navigation/core";
import React, {useState} from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  FlatList,
  Image,
  TextInput,
} from "react-native";
import { Colors } from "../styles/Colors";
import ItemCrucigrama from "./ItemCrucigrama";

const BaseCrucigrama = () => {
    const navigation = useNavigation();
    let aleatorio = Math.random();

    let DATA = [
        "m","o","n","a","","",
        "a","j","o","n","","",
        "n","a","m","a","i","z",
        "z","","i","n","","",
        "a","","l","a","","",
        "n","","","b","","",
        "a","r","e","p","","",
        "","","","","","",
        "","","","","","",
        "","","","","","",
        ];
    
    const Item = ({ item }) => {
      return <ItemCrucigrama Letra={item} key={aleatorio}/>;
    };
    return (
      <View style={styles.container}>
        <View style={styles.lista}>
        <Image source={require('../img/frutas/png/003-apple.png')} style={styles.manzana} />
        <Image source={require('../img/frutas/png/006-bananas.png')} style={styles.banana} />
        <Image source={require('../img/frutas/png/024-pear.png')} style={styles.pera} />
        <Image source={require('../img/frutas/png/020-lemon.png')} style={styles.limon} />
        <Image source={require('../img/frutas/png/014-corn.png')} style={styles.maiz} />
        <Image source={require('../img/frutas/png/017-garlic.png')} style={styles.ajo} />
          <FlatList
            data={DATA}
            renderItem={Item}
            keyExtractor={item => item.id}
            numColumns="6"
            style={{ marginTop: '12%' }} 
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
}

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
      width: 45,
      height: 40,
      alignItems: "center",
      justifyContent: "center",
      borderColor: Colors.blue_dark,
      borderWidth: 1,
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
    manzana: {width: 45, height:40, position: 'absolute', top: -5, alignSelf: 'flex-start', left: 24},
    ajo: {width: 45, height:40, position: 'absolute', top: '28%', alignSelf: 'flex-start', left: '22%'},
    limon: {width: 45, height:40, position: 'absolute', top: '42%', alignSelf: 'flex-start', left: '36%'},
    pera: {width: 45, height:40, position: 'absolute', top: '49%', alignSelf: 'flex-start', left: '64%'},
    banana: {width: 45, height:40, position: 'absolute', top: '42%', alignSelf: 'flex-start', left: '64%'},
    maiz: {width: 45, height:40, position: 'absolute', top: '30%', alignSelf: 'flex-start', left: '80%'},
  });
  
export default BaseCrucigrama;