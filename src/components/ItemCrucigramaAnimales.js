import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, Text, View, TextInput, Image } from "react-native";
import { Colors } from "../styles/Colors";
import { css_ItemCrucigrama } from "../styles/GameStyle";

const ItemCrucigramaAnimales = ({Animal, NumLetras}) => {
    const llave = Math.random();
    const [item, setItem] = useState("");

    if(item !== ''){
      if(item == Animal.toUpperCase()){
        aciertos += +1
      }else{
        aciertos += -1
      }
    }
    
    useEffect(() => {
      if(aciertos == NumLetras){
        navigation.navigate('WinGame');
      }
    }, [aciertos])
    if(Animal == "vaca"){
        return(
          <View style={css_ItemCrucigrama.cellEmpty}>
              <Image source={require('../img/animales/016-cow.png')} style={css_ItemCrucigrama.imgFruta} />
          </View>
        ) 
      }

      if(Animal == "oveja"){
        return(
          <View style={css_ItemCrucigrama.cellEmpty}>
              <Image source={require('../img/animales/080-sheep.png')} style={css_ItemCrucigrama.imgFruta} />
          </View>
        ) 
      }

      if(Animal == "raton"){
        return(
          <View style={css_ItemCrucigrama.cellEmpty}>
              <Image source={require('../img/animales/071-rat.png')} style={css_ItemCrucigrama.imgFruta} />
          </View>
        ) 
      }

      if(Animal == "cabra"){
        return(
          <View style={css_ItemCrucigrama.cellEmpty}>
              <Image source={require('../img/animales/031-goat.png')} style={css_ItemCrucigrama.imgFruta} />
          </View>
        ) 
      }

      if(Animal == "pato"){
        return(
          <View style={css_ItemCrucigrama.cellEmpty}>
              <Image source={require('../img/animales/022-duck.png')} style={css_ItemCrucigrama.imgFruta} />
          </View>
        ) 
      }

      if(Animal == "panda"){
        return(
          <View style={css_ItemCrucigrama.cellEmpty}>
              <Image source={require('../img/animales/029-panda.png')} style={css_ItemCrucigrama.imgFruta} />
          </View>
        ) 
      }

      if(Animal == "tigre"){
        return(
          <View style={css_ItemCrucigrama.cellEmpty}>
              <Image source={require('../img/animales/091-tiger.png')} style={css_ItemCrucigrama.imgFruta} />
          </View>
        ) 
      }
 
    if (Animal == "") {
        return (
          <View style={css_ItemCrucigrama.cellEmpty}>
            <Text style={css_ItemCrucigrama.cellTextEmpty}> </Text>
          </View>
        );
      } else {
        return (
          <View style={css_ItemCrucigrama.cell}>
            <TextInput
              style={css_ItemCrucigrama.InputNombre}
              onChangeText={setItem}
              value={item}
              textContentType="name"
              placeholderTextColor={Colors.white}
              maxLength={1}
              key={llave}
            />
          </View>
        );
      }
}
 
export default ItemCrucigramaAnimales;