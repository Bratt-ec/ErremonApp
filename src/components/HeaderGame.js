import React, {useContext} from "react";
import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Colors } from "../styles/Colors";
import { AuthContext } from "../navigation/AuthProvider";

const HeaderGame = ({ name }) => {
  const {personaje,playSound,setPlaySound  } = useContext(AuthContext);
  return (
    <View style={CSS.headerDiv}>
      
      {/* <Image source={require("../img/book.png")} style={CSS.ImgHeader} /> */}
           {personaje == "Santi" ? (
        <Image
          source={require("../img/../img/kid.png")}
          style={{ width: 40, height: 40, margin: 10 }}
        />
      ) : (
        <Image
          source={require("../img/../img/girl.png")}
          style={{ width: 40, height: 40, margin: 10 }}
        />
      )}
      <Text style={CSS.txtHeader}>{name}</Text>
 
      <TouchableOpacity
        onPress={() => (playSound ? setPlaySound(false) : setPlaySound(true))}
        style={{
          margin: 20,
          borderRadius: 100,
          width: 35,
          height: 35,
          backgroundColor: Colors.white,
          justifyContent: "center",
          alignSelf: "center",
        }}
      >
        <Image
          source={
            playSound
              ? require("../img/volume.png")
              : require("../img/volume-off.png")
          }
          style={{ width: 23, height: 23, alignSelf: "center" }}
        />
      </TouchableOpacity>
    </View>
  );
};

const CSS = StyleSheet.create({
  headerDiv: {
    marginTop: "10%",
    width: "100%",
    height: 50,
    backgroundColor: Colors.turquesa,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  ImgHeader: {
    width: 40,
    height: 40,
    marginHorizontal: "4%",
  },
  txtHeader: {
    color: Colors.white,
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
    textTransform: "uppercase",
  },
});

export default HeaderGame;
