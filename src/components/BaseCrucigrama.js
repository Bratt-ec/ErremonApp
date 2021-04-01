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
        "manzana","","","","","",
        "m","o","n","a","","",
        "a","j","o","n","","maiz",
        "n","a","m","a","i","z",
        "z","ajo","i","n","","",
        "a","","l","a","","",
        "n","","limon","b","banana","",
        "a","r","e","p","pera","",
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

          <FlatList
            data={DATA}
            renderItem={Item}
            keyExtractor={item => item.id}
            numColumns="6"
            style={{ marginTop: '1%' }} 
          />
        </View>
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
    lista: { alignItems: "center", justifyContent: "center" },
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
  
export default BaseCrucigrama;