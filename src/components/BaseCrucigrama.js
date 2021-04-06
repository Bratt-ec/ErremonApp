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
import ItemCrucigramaColores from "./ItemCrucigramaColores";

const BaseCrucigrama = ({Tipo}) => {
    const navigation = useNavigation();
    let aleatorio = Math.random();
  let DATA;

    if(Tipo == 'Frutas'){
          DATA = [
        "","","","limon","","","",
        "","manzana","","l","","","",
        "maiz","m","a","i","z","","",
        "","a","","m","","","",
        "","n","","o","","","",
        "","z","","n","","","",
        "ajo","a","","","","","",
        "a","n","a","n","a","b","banana",
        "j","a","","","","r","",
        "o","","","","","e","",
        "","","","","","p","",
        "","","","","","pera","",
        ];
    }
    if(Tipo =='Colores'){
           DATA = [
        "","","amarillo","","","","",
        "","azul","a","z","u","l","",
        "","","m","","","","",
        "","","a","","","","",
        "","rojo","r","o","j","o","",
        "","","i","","","","",
        "","","l","","cafe","","",
        "","","l","","c","","",
        "rosa","r","o","s","a","","",
        "","","","","f","","",
        "","e","d","r","e","v","verde",
        "","","","","","","",
      ]
    }

    
    const Item = ({ item }) => {
      if(Tipo == 'Frutas'){
        return <ItemCrucigrama Letra={item} key={aleatorio}/>;
      }

      if(Tipo == 'Colores'){
        return <ItemCrucigramaColores Color={item} key={aleatorio}/>;
      }
    };
    return (
      <View style={styles.container}>
        <View style={styles.lista}> 
          <FlatList
            data={DATA}
            renderItem={Item}
            keyExtractor={item => item.id}
            numColumns="7" 
            style={{ marginTop: '1%' }} 
          />
        </View>
        {/* <TouchableOpacity style={styles.btnOpcion} onPress={() => navigation.navigate('WinGame')}>
            <View style={styles.divIcon}>
              <Image
                source={require("../img/mando.png")}
                style={styles.iconOpcion}
              />
            </View>
            <Text style={styles.txtOpcion}>Siguiente</Text>
        </TouchableOpacity> */}
      </View>
    );
}

const styles = StyleSheet.create({
    container: { height: '100%', width:'100%', padding: 8 },
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
      margin: "6%",
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