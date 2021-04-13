import { StatusBar } from "expo-status-bar";
import React, { useContext, useState, useEffect } from "react";
import {
  Image,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  FlatList
} from "react-native";
import { AuthContext } from "../navigation/AuthProvider";
import { Colors } from "../styles/Colors";
import { css_Menu, css_Trofeos } from "../styles/Style";
import { FontAwesome5 } from "@expo/vector-icons";

export const Logros = ({ navigation }) => {
  const {
    trofeos,
    setTrofeos,
    juegosCompletados,
    setJuegosCompletados,
  } = useContext(AuthContext);

  
  const DivLogros = ({item}) => (
    <View style={css_Trofeos.divLogro}>
      <Image source={require('../img/trofeo.png')} style={css_Trofeos.Icono}/>
      <Text style={css_Trofeos.txtLogro}>{item.nombre}</Text>
    </View>
  )

  
  if(trofeos.id === ''){
    return (
      <>
        <StatusBar style="light" backgroundColor={Colors.blue_dark2} />
        <View style={css_Menu.ContainerMenu}>
              <TouchableOpacity
              style={css_Trofeos.btnMenu}
                onPress={() => {
                  navigation.openDrawer();
                }}
              >
                <FontAwesome5 name="bars" size={34} color={Colors.white} />
              </TouchableOpacity>
              <View style={css_Trofeos.ContainerTrofeos}> 
              <Text style={css_Trofeos.Titulo}>Aún no tienes ningun trofeo</Text>
              </View>
        </View>
   </>
   )
  }else{
      return (
    <>
      <StatusBar style="light" backgroundColor={Colors.blue_dark2} />
      <View style={css_Menu.ContainerMenu}>
            <TouchableOpacity
            style={css_Trofeos.btnMenu}
              onPress={() => {
                navigation.openDrawer();
              }}
            >
              <FontAwesome5 name="bars" size={34} color={Colors.white} />
            </TouchableOpacity>
            <View style={css_Trofeos.ContainerTrofeos}> 
            <Text style={css_Trofeos.Titulo}>Mis trofeos</Text>
              <FlatList 
              data={trofeos}
              renderItem={DivLogros}
              keyExtractor={DivLogros => DivLogros.id}
              style={{ marginTop: '1%' }} 
              />
            </View>

  
      </View>
 </>
  );
  }

};

const styles = StyleSheet.create({});
