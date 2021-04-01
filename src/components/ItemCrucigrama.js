import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, Text, View, TextInput, Image } from "react-native";
import { Colors } from "../styles/Colors";

const ItemCrucigrama = ({ Letra }) => {
    const [letter, setLetter] = useState('');
    const abecedario = "abcdefghigklmnopqrstuvwxyz";
    let LetraRelleno = abecedario[Math.floor(Math.random() * abecedario.length)];

    if(Letra == "manzana"){
      return(
        <View style={styles.cellEmpty}>
            <Image source={require('../img/frutas/png/003-apple.png')} style={styles.imgFruta} />
        </View>
      )
    }

    if(Letra == "limon"){
      return(
        <View style={styles.cellEmpty}>
           <Image source={require('../img/frutas/png/020-lemon.png')} style={styles.imgFruta} />
        </View>
      )
    }
    if(Letra == "ajo"){
      return(
        <View style={styles.cellEmpty}>
           <Image source={require('../img/frutas/png/017-garlic.png')} style={styles.imgFruta} />
        </View>
      )
    }
    if(Letra == "pera"){
      return(
        <View style={styles.cellEmpty}>
           <Image source={require('../img/frutas/png/024-pear.png')} style={styles.imgFruta} />
        </View>
      )
    }
    if(Letra == "banana"){
      return(
        <View style={styles.cellEmpty}>
           <Image source={require('../img/frutas/png/006-bananas.png')} style={styles.imgFruta} />
        </View>
      )
    }
    if(Letra == "maiz"){
      return(
        <View style={styles.cellEmpty}>
           <Image source={require('../img/frutas/png/014-corn.png')} style={styles.imgFruta} />
        </View>
      )
    }
    if (Letra == "") {
      return (
      <View style={styles.cellEmpty}>
          <Text style={styles.cellTextEmpty}>{LetraRelleno}</Text>
        </View>
      );
    } else {
      return (
        <View
          style={styles.cell}
        >
        <TextInput
        style={styles.InputNombre}
        onChangeText={setLetter}
        value={letter}
        textContentType="name"
        placeholderTextColor={Colors.white}
        maxLength={1}
      />
        </View>
      );
    }
  };

  const styles = StyleSheet.create({
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
      borderColor: Colors.blue_dark,
      borderWidth: 1,
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
    InputNombre:{
        fontSize: 24,
        textAlign: 'center',
        color: Colors.white,
        width: 45
    },
    cellEmpty:{
        padding: 2,
        width: 45,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
    },
    cellTextEmpty:{
  opacity: 1,
  color: Colors.white,
  fontSize: 0,
  textTransform: "uppercase",
  fontWeight: "bold",
  textAlign: "center",
    },
    imgFruta: {width: 45, height:40, position: 'absolute'},
  });

  export default ItemCrucigrama;
