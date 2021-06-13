import { useNavigation } from "@react-navigation/core";
import React, {useState,useEffect, useContext} from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  FlatList,
  Image,
  TextInput,
} from "react-native";
import { AuthContext } from "../navigation/AuthProvider";
import LoseGame from "../screens/LoseGame";
import WinGame from "../screens/WinGame";
import { Colors } from "../styles/Colors";
import { css_ItemCrucigrama } from "../styles/GameStyle";



const BaseCrucigrama = ({Tipo}) => {
  const {
    trofeos,
    setTrofeos,
    juegosCompletados,
    setJuegosCompletados,
  } = useContext(AuthContext);

  const [lose, setLose] = useState(false);
  const [win, setWin] = useState(false);
  const [medalla, setMedalla] = useState(false);
    const navigation = useNavigation();
    let aleatorio = Math.random();
    let aciertos = 0;
  let DATA;
  let num_letras;

    if(Tipo == 'Frutas'){
          DATA = [
        "","","","limon","","","",
        "","manzana","","l","","","",
        "maiz","m","a","i","z","","",
        "","a","","m","","","",
        "","n","","o","","","",
        "","z","","n","","","",
        "","a","","","","","",
        "","n","a","n","a","b","banana",
        "","a","","","r","","",
        "","","","","e","","",
        "","a","ñ","i","p","piña","",
        "","","","","pera","","",
        ];

        num_letras= 24;
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
      ];
      num_letras = 24;
    }

    if(Tipo == 'Animales'){
      DATA = [
        "","","vaca","","","","",
        "oveja","o","v","e","j","a","",
        "","","a","","","raton","",
        "","cabra","c","a","b","r","a",
        "","","a","","","a","",
        "","","panda","","tigre","t","",
        "","pato","p","a","t","o","",
        "","","a","","i","n","",
        "","","n","","g","","",
        "","","d","","r","","",
        "","","a","","e","","",

      ];
      num_letras = 27;
    }

    //#region Crucigrama de Frutas
    const ItemCrucigrama = ({ Letra, NumLetras }) => {
      const [letter, setLetter] = useState('');
      const llave =  Math.random();
      
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
  
      if(Letra == "piña"){
        return(
          <View style={css_ItemCrucigrama.cellEmpty}>
             <Image source={require('../img/frutas/png/pina.png')} style={css_ItemCrucigrama.imgFruta} />
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
    if(letter !== ''){
      if(letter == Letra.toUpperCase()){
        aciertos += +1
        console.log(aciertos);
      }else{
        // aciertos += -1
        console.log(aciertos);
      }
    }
    
    useEffect(() => {
      if(aciertos == NumLetras){
        // navigation.navigate('WinGame');
        setWin(true);
       
        let trofeosObj;
        if(trofeos.id === '') {
            trofeosObj = []
        }else{
          trofeosObj = [...trofeos]
        }

        for (let i = 0; i < trofeos.length; i++) {
          if (trofeos[i].nombre == "Jefe de las Frutas") {
            console.log("Ya tienes este trofeo");
            setMedalla(false);
            return;
          } }

          trofeosObj.push(
              {
              id: aleatorio,
              nombre: 'Jefe de las Frutas',
              estrellas: "5",
            }) 
            setMedalla(true);
        setTrofeos(trofeosObj);
        setJuegosCompletados(juegosCompletados + 1);
      }
    }, [aciertos])
      if (Letra == "") {
        return (
        <View style={css_ItemCrucigrama.cellEmpty} key={llave}>
          
        </View>
        );
      } else {
        return (
          <View style={(letter == Letra.toUpperCase()) ? css_ItemCrucigrama.cell : css_ItemCrucigrama.cellError } >
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
    //#endregion
    
    //#region Crucigrama de Animales
    const ItemCrucigramaAnimales = ({Animal, NumLetras}) => {
      const llave = Math.random();
      const [item, setItem] = useState("");
  
      if(item !== ''){
        if(item == Animal.toUpperCase()){
          aciertos += +1
        }else{
          console.log(aciertos);
        }
      }
      
      useEffect(() => {
        if(aciertos == NumLetras){
          // navigation.navigate('WinGame');
          setWin(true);
          let trofeosObj;
          if(trofeos.id === '') {
              trofeosObj = []
          }else{            
            trofeosObj = [...trofeos]
          }

          for (let i = 0; i < trofeos.length; i++) {
            if (trofeos[i].nombre == "Jefe de los Animales") {
              console.log("Ya tienes este trofeo");
              setMedalla(false);
              return;
            } }
  
          trofeosObj.push(
                {
                id: aleatorio,
                nombre: 'Jefe de los Animales',
                estrellas: "5",
              }) 
              setMedalla(true);
          setTrofeos(trofeosObj);
          setJuegosCompletados(juegosCompletados + 1);

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

    //#endregion
    
    //#region Crucigrama de Colores
    const ItemCrucigramaColores = ({ Color, NumLetras }) => {
      const llave = Math.random();
      const [item, setItem] = useState("");
    
      if(item !== ''){
        if(item == Color.toUpperCase()){
          aciertos += +1
        }else{
          console.log(aciertos);
        }
      }
      
      useEffect(() => {
        if(aciertos == NumLetras){
          // navigation.navigate('WinGame');
          setWin(true);
          let trofeosObj;
          if(trofeos.id === '') {
              trofeosObj = []
          }else{
            console.log(trofeos);
            trofeosObj = [...trofeos]
          }

          for (let i = 0; i < trofeos.length; i++) {
            if (trofeos[i].nombre == "Jefe de los Colores") {
              console.log("Ya tienes este trofeo");
              setMedalla(false);
              return;
            } }
          
          trofeosObj.push(
                {
                id: aleatorio,
                nombre: 'Jefe de los Colores',
                estrellas: "5",
              }) 
              setMedalla(true);
          setTrofeos(trofeosObj);
          setJuegosCompletados(juegosCompletados + 1);

        }
      }, [aciertos])
    
      if (Color == "amarillo") {
        return (
          <View
            style={{
              backgroundColor: "#F1C40F",
              borderRadius: 10,
              width: 45,
              height: 40,
            }}
          ></View>
        );
      }
    
      if (Color == "azul") {
        return (
          <View
            style={{
              backgroundColor: "#2980B9",
              borderRadius: 10,
              width: 45,
              height: 40,
            }}
          ></View>
        );
      }
    
      if (Color == "rojo") {
        return (
          <View
            style={{
              backgroundColor: "#CB4335",
              borderRadius: 10,
              width: 45,
              height: 40,
            }}
          ></View>
        );
      }
    
      if (Color == "rosa") {
        return (
          <View
            style={{
              backgroundColor: "#FF6FCD",
              borderRadius: 10,
              width: 45,
              height: 40,
            }}
          ></View>
        );
      }
    
      if (Color == "verde") {
        return (
          <View
            style={{
              backgroundColor: "#16DB43",
              borderRadius: 10,
              width: 45,
              height: 40,
            }}
          ></View>
        );
      }
    
      if (Color == "cafe") {
        return (
          <View
            style={{
              backgroundColor: "#873600",
              borderRadius: 10,
              width: 45,
              height: 40,
            }}
          ></View>
        );
      }
    
      if (Color == "") {
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
    };
    //#endregion
    
    
  const BotonSiguiente = () => (
    <TouchableOpacity style={styles.btnOpcion} onPress={() => setLose(true)}>
      <View style={styles.divIcon}>
        <Image source={require("../img/mando.png")} style={styles.iconOpcion} />
      </View>
      <Text style={styles.txtOpcion}>Terminar</Text>
    </TouchableOpacity>
  );


    const Item = ({ item }) => {
      if(Tipo == 'Frutas'){
        return <ItemCrucigrama Letra={item} key={aleatorio} NumLetras={num_letras} />;
      }

      if(Tipo == 'Colores'){
        return <ItemCrucigramaColores Color={item} key={aleatorio} NumLetras={num_letras}/>;
      }

      if(Tipo == 'Animales'){
        return <ItemCrucigramaAnimales Animal={item} key={aleatorio} NumLetras={num_letras}/>;
      }
    };

    if(win){
      if (Tipo == "Frutas") {
        return <WinGame Siguiente='MenuCrucigrama' Win={medalla} NombreTrofeo='Jefe de las Frutas' />
      }
  
      if (Tipo == "Animales") {
        return <WinGame Siguiente='MenuCrucigrama'  Win={medalla} NombreTrofeo='Jefe de los Animales' />
      }
  
      if (Tipo == "Colores") {
        return <WinGame Siguiente='MenuCrucigrama'  Win={medalla} NombreTrofeo='Jefe de los Colores' />
      }
    }

    if (lose) {
      if (Tipo == "Frutas") {
        // setLose(false);
        return <LoseGame Siguiente="MenuCrucigrama" />;
      }
  
      if (Tipo == "Colores") {
        return <LoseGame Siguiente="MenuCrucigrama" />;
      }
      if (Tipo == "Animales") {
        return <LoseGame Siguiente="MenuCrucigrama" />;
      }
  
    } else {
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
        <BotonSiguiente />
      </View>
    );
    }
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