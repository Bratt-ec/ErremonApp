import React, { useEffect, useState, useContext } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import HeaderGame from "../components/HeaderGame";
import { Palabras } from "../components/Palabras";
import { AuthContext } from "../navigation/AuthProvider";
import { Colors } from "../styles/Colors";
import { css_JuegoImagenes, css_Vocabulario } from "../styles/GameStyle";
import { Ionicons } from "@expo/vector-icons";
import { DraxProvider, DraxView } from 'react-native-drax';
import AwesomeAlert from "react-native-awesome-alerts";


const Vocabulario = ({navigation}) => {
  const [received, setReceived] = useState([]);
  const [alert1, setAlert1] = useState(false);
  // const [staged, setStaged] = useState([]);
  const { palabraVocabulario, setPalabraVocabulario,setobjPalabra, setOnVocabulario , preGame,
    setPreGame} = useContext(AuthContext);  

  if (palabraVocabulario == 6) {
    setPalabraVocabulario(1);
  }

  const NumeroPalabra = Palabras.find(
    (palabra) => palabra.id == palabraVocabulario
  );

  const RepetirJuego = ()=>{
    setReceived([]);
      // setNuevaPalabra(false)
      // setPalabraVocabulario(palabraVocabulario + 1);
      // setOnVocabulario(false);
  }

  const FinJuego = ()=>{
    let word = '';
    received.map(silaba =>{  
      word+=silaba;
    })
    console.log(word.toLowerCase() , '---' , NumeroPalabra.palabra);
    if(word.toLowerCase() == NumeroPalabra.palabra.toLowerCase()){
      console.log('WIN GAME');
      setReceived([]);
      setobjPalabra(NumeroPalabra);
      navigation.navigate('PalabraVocabulario');
      setPalabraVocabulario(palabraVocabulario + 1);
    }else{
      setReceived([]);
      setAlert1(true);
      console.log('LOSE GAME');
    }
    // setPalabraVocabulario(palabraVocabulario + 1);
    // setOnVocabulario(false);
    // navigation.navigate('Menu');
  }


return(
  <View style={css_JuegoImagenes.Container}> 
          <AwesomeAlert
          // Alerta si el usuario no escribe su nombre
          show={alert1}
          showProgress={false}
          title="Ops!"
          message="Fallaste, Intentalo otra vez!!"
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          showCancelButton={false}
          showConfirmButton={true}
          confirmText="Aceptar"
          confirmButtonColor={Colors.yellow}
          onConfirmPressed={() => setAlert1(false)}
        />
    <HeaderGame image="book.png" name="VOCABULARIO" />
        {/* <PalabraNueva Palabra={NumeroPalabra} />   */}
        <DraxProvider>
      <View style={styles.container}>
        <DraxView
          style={[styles.centeredContent, styles.receivingZone]}
          receivingStyle={styles.receiving}
          renderContent={({ viewState }) => {

            const receivingDrag = viewState && viewState.receivingDrag;
            const payload = receivingDrag && receivingDrag.payload;               

            return (
              <>
                <Text style={styles.textRecived}>Completa una palabra</Text>
                <Image source={require('../img/oso_game_2.png')} style={styles.imgOso} />
                <View style={styles.contentWord}>
                  <Text style={styles.incomingPayload}>{payload}</Text>
                  <View style={styles.divReceived}>
                  {
                      received.map(silaba =>(
                          <Text style={styles.received} key={silaba} >{silaba}</Text>
                      ))
                    }
                  </View>
                </View>
              </>
            );
          }}
          onReceiveDragDrop={(event) => {

            if(received.length == NumeroPalabra.juego.length){
              console.log('DRAG BLOQUEADO');
            }else{
              setReceived([
                ...received,
                event.dragged.payload || '?',
              ]);
            }
          }}
        />      
        <View style={styles.palette}>
          {
            NumeroPalabra.juego.map(silaba =>(
              <DraxView
            style={[styles.centeredContent, styles.draggableBox, styles.yellow]}
            draggingStyle={styles.dragging}
            dragReleasedStyle={styles.dragging}
            hoverDraggingStyle={styles.hoverDragging}
            dragPayload={silaba}
            longPressDelay={0}
          >
            <Text style={styles.textDraggable}>{silaba}</Text>
          </DraxView>

            ))
          }          
        </View>
      </View>      
      <View style={css_Vocabulario.divBotones}>
        <TouchableOpacity style={css_Vocabulario.btnVocabulario} onPress={()=> FinJuego()}>
          <Ionicons name="checkbox" size={36} color={Colors.blue_dark} />
          <Text style={css_Vocabulario.txtBoton}>Listo</Text>
        </TouchableOpacity>

        <TouchableOpacity style={css_Vocabulario.btnVocabulario} onPress={()=> RepetirJuego()}>
          <Ionicons
            name="md-reload-circle"
            size={36}
            color={Colors.blue_dark}
          />
          <Text style={css_Vocabulario.txtBoton}>Otra vez</Text>
        </TouchableOpacity>
      </View>      
    </DraxProvider>
  </View>
)
};
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    paddingTop: 5,
    // padding:20,
    
  },
  centeredContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  receivingZone: {
    height: 'auto',
    borderRadius: 10,
    padding: 10,
    margin: 16,
    backgroundColor: Colors.turquesa
  },
  textRecived:{
    color: Colors.blue_dark,
    fontSize: 24,
    fontWeight: 'bold',
  },  
  receiving: {
    borderColor: Colors.redLight,
    borderWidth: 2,
  },
  incomingPayload: {  
    fontSize: 20,
    fontWeight:'bold',
    color: Colors.blue_dark
  },
  contentWord:{
    margin: 1,
    alignItems: 'center',
    justifyContent: 'center',    
  },
  divReceived:{
    display: 'flex',
    flexDirection: 'row',

  },
  received: {
    backgroundColor: Colors.yellow,    
    borderStyle: "dotted",
    borderColor: Colors.blue_lit,
    borderWidth: 4,
    padding: 18,
    borderRadius: 6,
    margin: 4,
    textAlignVertical: "center",
    textAlign: 'center',
    fontSize: 22,
    fontWeight:'bold',
    color: Colors.blue_dark
  },
  palette: {
    flexDirection: 'row',
    alignItems:'center',    
    flexWrap:'wrap',
    margin: 10,
    justifyContent: 'center',
  },
  draggableBox: {
    width: 80,
    height: 80,
    borderRadius: 10,
    padding: 10,
    margin: 10
  },
  textDraggable:{
    fontWeight: 'bold',
    fontSize: 20
  },  
  green: {
    backgroundColor: Colors.blue_lit,
  },
  blue: {
    backgroundColor: Colors.yellow,
  },
  red: {
    backgroundColor: Colors.redLight,
  },
  yellow: {
    backgroundColor: Colors.yellow,
  },
  cyan: {
    backgroundColor: '#aaffff',
  },
  dragging: {
    opacity: 0.2,
  },
  hoverDragging: {
    borderColor: Colors.redLight,
    borderWidth: 2,
  },
  stagedCount: {
    fontSize: 18,
  },
  imgOso:{
    width: 100,
    height:100,
    resizeMode: "contain"
  }
});

export default Vocabulario;
