import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, Text, View, TextInput, Image } from "react-native";
import { Colors } from "../styles/Colors";
import { css_ItemCrucigrama } from "../styles/GameStyle";

const ItemCrucigrama = ({ Letra }) => {
    const [letter, setLetter] = useState('');
    const llave =  Math.random();
    const abecedario = "abcdefghigklmnopqrstuvwxyz";
    let LetraRelleno = abecedario[Math.floor(Math.random() * abecedario.length)];

    if(Letra == "manzana"){
      return(
        <View style={css_ItemCrucigrama.cellEmpty}>
            <Image source={require('../img/frutas/png/003-apple.png')} style={css_ItemCrucigrama.imgFruta} />
        </View>
      )
    }

    if(Letra == "limon"){
      return(
        <View style={css_ItemCrucigrama.cellEmpty}>
           <Image source={require('../img/frutas/png/020-lemon.png')} style={css_ItemCrucigrama.imgFruta} />
        </View>
      )
    }

    if(Letra == "ajo"){
      return(
        <View style={css_ItemCrucigrama.cellEmpty}>
           <Image source={require('../img/frutas/png/017-garlic.png')} style={css_ItemCrucigrama.imgFruta} />
        </View>
      )
    }

    if(Letra == "pera"){
      return(
        <View style={css_ItemCrucigrama.cellEmpty}>
           <Image source={require('../img/frutas/png/024-pear.png')} style={css_ItemCrucigrama.imgFruta} />
        </View>
      )
    }

    if(Letra == "banana"){
      return(
        <View style={css_ItemCrucigrama.cellEmpty}>
           <Image source={require('../img/frutas/png/006-bananas.png')} style={css_ItemCrucigrama.imgFruta} />
        </View>
      )
    }

    if(Letra == "maiz"){
      return(
        <View style={css_ItemCrucigrama.cellEmpty}>
           <Image source={require('../img/frutas/png/014-corn.png')} style={css_ItemCrucigrama.imgFruta} />
        </View>
      )
    }

    if (Letra == "") {
      return (
      <View style={css_ItemCrucigrama.cellEmpty}>
          <Text style={css_ItemCrucigrama.cellTextEmpty}>{LetraRelleno}</Text>
        </View>
      );
    } else {
      return (
        <View style={css_ItemCrucigrama.cell}>
        <TextInput
        style={css_ItemCrucigrama.InputNombre}
        onChangeText={setLetter}
        value={letter}
        textContentType="name"
        placeholderTextColor={Colors.white}
        maxLength={1}
        key={llave}
      />
        </View>
      );
    }
  };


  export default ItemCrucigrama;
