import React, { useState, useEffect, useContext } from "react";
import {
  Image,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Button,
  BackHandler,
  TextInput,
} from "react-native";
import HeaderGame from "../components/HeaderGame";
import PreScreenGame from "../components/PreScreenGame";
import Ruleta from "../components/Ruleta";
import { AuthContext } from "../navigation/AuthProvider";
import { Colors } from "../styles/Colors";
import { css_JuegoImagenes, css_Vocabulario } from "../styles/GameStyle";
import AwesomeAlert from "react-native-awesome-alerts";
import LoseGame from "../screens/LoseGame";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { DraxProvider, DraxView } from "react-native-drax";
import WinGame2 from "./WinGame2";

const JuegoImagenes = ({navigation}) => {
  const {
    participants,
    setparticipants,
    itemRuleta,
    setItemRuleta,
    preGame,
    setPreGame,
    trofeos,
    setTrofeos,
    juegosCompletados,
    setJuegosCompletados,
    ruleta,
    setRuleta,
    win,
    setWin,
    setGmSopaLetras,
    gmSopaLetras
  } = useContext(AuthContext);
  // State
  const [item, setItem] = useState("");
  const [oracion, setOracion] = useState("");
  const [alert1, setAlert1] = useState(false);

  const [lose, setLose] = useState(false);
  // const [ruleta, setRuleta] = useState(true);
  const [received, setReceived] = useState([]);

  if(participants.length == 0){
    navigation.navigate('FinJuegoImagenes')
  }
  //
  let aleatorio = Math.random();

  // const backHandler = BackHandler.addEventListener("hardwareBackPress", () =>
  //   setItemRuleta(null)
  // );

  const RepetirJuego = () => {
    setReceived([]);
  };

  const RuletaView = () => <Ruleta />;
  const Imagenes = ({ Tipo }) => {
    if (Tipo == "DRAGÓN") {
      setOracion(
        "El dragón sale a volar por las montañas buscando su alimento"
      );
      return (
        <View>
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
                      <View style={styles.contentWord}>
                        <View style={css_JuegoImagenes.divImgOracion}>
                          <Image
                            source={require("../img/juego-imagenes/dragon.png")}
                            style={css_JuegoImagenes.imgOracion}
                          />
                          <Image
                            source={require("../img/juego-imagenes/montania.png")}
                            style={css_JuegoImagenes.imgOracion}
                          />
                          <Image
                            source={require("../img/juego-imagenes/carne.png")}
                            style={css_JuegoImagenes.imgOracion}
                          />
                        </View>
                        <Text style={styles.incomingPayload}>{payload}</Text>
                        <View style={styles.divReceived}>
                          {
                            received.map(item =>(                                                            
                                <Text style={styles.received} key={item}>
                                  {item}
                                </Text>                              
                            ))
                          }                          
                        </View>
                      </View>
                    </>
                  );
                }}
                onReceiveDragDrop={(event) => {
                  if (received.length == 3) {
                    console.log("DRAG BLOCK");
                  } else {
                    setReceived([...received, event.dragged.payload || "?"]);
                  }
                }}
              />
              <View style={styles.palette}>
                <DraxView
                  style={[styles.centeredContent, css_JuegoImagenes.Ejemplos]}
                  draggingStyle={styles.dragging}
                  dragReleasedStyle={styles.dragging}
                  hoverDraggingStyle={styles.hoverDragging}
                  dragPayload="por las montañas"
                  longPressDelay={0}
                >
                  <View>
                    <Text style={css_JuegoImagenes.txtEjemplos}>
                      por las montañas
                    </Text>
                  </View>
                </DraxView>

                <DraxView
                  style={[styles.centeredContent, css_JuegoImagenes.Ejemplos]}
                  draggingStyle={styles.dragging}
                  dragReleasedStyle={styles.dragging}
                  hoverDraggingStyle={styles.hoverDragging}
                  dragPayload="El dragón sale a volar"
                  longPressDelay={0}
                >
                  <View>
                    <Text style={css_JuegoImagenes.txtEjemplos}>
                      El dragón sale a volar
                    </Text>
                  </View>
                </DraxView>

                <DraxView
                  style={[styles.centeredContent, css_JuegoImagenes.Ejemplos]}
                  draggingStyle={styles.dragging}
                  dragReleasedStyle={styles.dragging}
                  hoverDraggingStyle={styles.hoverDragging}
                  dragPayload="buscando su alimento"
                  longPressDelay={0}
                >
                  <View>
                    <Text style={css_JuegoImagenes.txtEjemplos}>
                      buscando su alimento.
                    </Text>
                  </View>
                </DraxView>
              </View>
            </View>
          </DraxProvider>
        </View>
      );
    }

    if (Tipo == "PLATO") {
      setOracion(
        "El sol sale en la mañana y los niños salen a jugar despues de almorzar"
      );
      return (
        <View>
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
                      <View style={styles.contentWord}>
                        <View style={css_JuegoImagenes.divImgOracion}>
                          <Image
                            source={require("../img/juego-imagenes/sol.png")}
                            style={css_JuegoImagenes.imgOracion}
                          />
                          <Image
                            source={require("../img/juego-imagenes/boy.png")}
                            style={css_JuegoImagenes.imgOracion}
                          />
                          <Image
                            source={require("../img/juego-imagenes/plato.png")}
                            style={css_JuegoImagenes.imgOracion}
                          />                          
                        </View>
                        <Text style={styles.incomingPayload}>{payload}</Text>
                        <View style={styles.divReceived}>
                          {
                            received.map(item =>(
                              <Text style={styles.received} key={item}>
                                {item}
                              </Text>
                            ))
                          }                          
                        </View>
                      </View>
                    </>
                  );
                }}
                onReceiveDragDrop={(event) => {
                  if (received.length == 3) {
                    console.log("DRAG BLOCK");
                  } else {
                    setReceived([...received, event.dragged.payload || "?"]);
                  }
                }}
              />
              <View style={styles.palette}>
                <DraxView
                  style={[styles.centeredContent, css_JuegoImagenes.Ejemplos]}
                  draggingStyle={styles.dragging}
                  dragReleasedStyle={styles.dragging}
                  hoverDraggingStyle={styles.hoverDragging}
                  dragPayload="despues de almorzar"
                  longPressDelay={0}
                >
                  <View>
                    <Text style={css_JuegoImagenes.txtEjemplos}>
                      despues de almorzar.
                    </Text>
                  </View>
                </DraxView>

                <DraxView
                  style={[styles.centeredContent, css_JuegoImagenes.Ejemplos]}
                  draggingStyle={styles.dragging}
                  dragReleasedStyle={styles.dragging}
                  hoverDraggingStyle={styles.hoverDragging}
                  dragPayload="El sol sale en la mañana"
                  longPressDelay={0}
                >
                  <View>
                    <Text style={css_JuegoImagenes.txtEjemplos}>
                      El sol sale en la mañana
                    </Text>
                  </View>
                </DraxView>

                <DraxView
                  style={[styles.centeredContent, css_JuegoImagenes.Ejemplos]}
                  draggingStyle={styles.dragging}
                  dragReleasedStyle={styles.dragging}
                  hoverDraggingStyle={styles.hoverDragging}
                  dragPayload="y los niños salen a jugar"
                  longPressDelay={0}
                >
                  <View>
                    <Text style={css_JuegoImagenes.txtEjemplos}>
                      y los niños salen a jugar
                    </Text>
                  </View>
                </DraxView>
              </View>
            </View>
          </DraxProvider>
        </View>
      );
    }

    if (Tipo == "GATO") {
      setOracion("El gato y el perro juegan en el parque");
      return (
        <View>
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
                      <View style={styles.contentWord}>
                        <View style={css_JuegoImagenes.divImgOracion}>
                          <Image
                            source={require("../img/juego-imagenes/gato.png")}
                            style={css_JuegoImagenes.imgOracion}
                          />
                          <Image
                            source={require("../img/juego-imagenes/perro.png")}
                            style={css_JuegoImagenes.imgOracion}
                          />
                          <Image
                            source={require("../img/juego-imagenes/parque.png")}
                            style={css_JuegoImagenes.imgOracion}
                          />
                        </View>
                        <Text style={styles.incomingPayload}>{payload}</Text>
                        <View style={styles.divReceived}>
                          {
                            received.map(item =>(
                              <Text style={styles.received} key={item}>
                                {item}
                              </Text>
                            ))
                          }                          
                        </View>
                      </View>
                    </>
                  );
                }}
                onReceiveDragDrop={(event) => {
                  if (received.length == 3) {
                    console.log("DRAG BLOCK");
                  } else {
                    setReceived([...received, event.dragged.payload || "?"]);
                  }
                }}
              />
              <View style={styles.palette}>
                <DraxView
                  style={[styles.centeredContent, css_JuegoImagenes.Ejemplos]}
                  draggingStyle={styles.dragging}
                  dragReleasedStyle={styles.dragging}
                  hoverDraggingStyle={styles.hoverDragging}
                  dragPayload="El gato"
                  longPressDelay={0}
                >
                  <View>
                    <Text style={css_JuegoImagenes.txtEjemplos}>El gato</Text>
                  </View>
                </DraxView>

                <DraxView
                  style={[styles.centeredContent, css_JuegoImagenes.Ejemplos]}
                  draggingStyle={styles.dragging}
                  dragReleasedStyle={styles.dragging}
                  hoverDraggingStyle={styles.hoverDragging}
                  dragPayload="juegan en el parque"
                  longPressDelay={0}
                >
                  <View>
                    <Text style={css_JuegoImagenes.txtEjemplos}>
                      juegan en el parque
                    </Text>
                  </View>
                </DraxView>

                <DraxView
                  style={[styles.centeredContent, css_JuegoImagenes.Ejemplos]}
                  draggingStyle={styles.dragging}
                  dragReleasedStyle={styles.dragging}
                  hoverDraggingStyle={styles.hoverDragging}
                  dragPayload="y el perro"
                  longPressDelay={0}
                >
                  <View>
                    <Text style={css_JuegoImagenes.txtEjemplos}>
                      y el perro
                    </Text>
                  </View>
                </DraxView>
              </View>
            </View>
          </DraxProvider>
        </View>
      );
    }

    if (Tipo == "CANDADO") {
      setOracion(
        "Maria luego de salir de clase abre el candado de la puerta para ingresar a su casa"
      );
      return (
        <View>
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
                      <View style={styles.contentWord}>
                        <View style={css_JuegoImagenes.divImgOracion}>
                          <Image
                            source={require("../img/juego-imagenes/estudiante.png")}
                            style={css_JuegoImagenes.imgOracion}
                          />                          
                          <Image
                            source={require("../img/juego-imagenes/candado.png")}
                            style={css_JuegoImagenes.imgOracion}
                          />
                          <Image
                            source={require("../img/juego-imagenes/casa.png")}
                            style={css_JuegoImagenes.imgOracion}
                          />
                          
                        </View>
                        <Text style={styles.incomingPayload}>{payload}</Text>
                        <View style={styles.divReceived}>
                          {
                            received.map(item =>(
                              <Text style={styles.received} key={item}>
                                {item}
                              </Text>
                            ))
                          }                          
                        </View>
                      </View>
                    </>
                  );
                }}
                onReceiveDragDrop={(event) => {
                  if (received.length == 3) {
                    console.log("DRAG BLOCK");
                  } else {
                    setReceived([...received, event.dragged.payload || "?"]);
                  }
                }}
              />
              <View style={styles.palette}>
                <DraxView
                  style={[styles.centeredContent, css_JuegoImagenes.Ejemplos]}
                  draggingStyle={styles.dragging}
                  dragReleasedStyle={styles.dragging}
                  hoverDraggingStyle={styles.hoverDragging}
                  dragPayload="para ingresar a su casa"
                  longPressDelay={0}
                >
                  <View>
                    <Text style={css_JuegoImagenes.txtEjemplos}>
                      para ingresar a su casa
                    </Text>
                  </View>
                </DraxView>

                <DraxView
                  style={[styles.centeredContent, css_JuegoImagenes.Ejemplos]}
                  draggingStyle={styles.dragging}
                  dragReleasedStyle={styles.dragging}
                  hoverDraggingStyle={styles.hoverDragging}
                  dragPayload="abre el candado de la puerta"
                  longPressDelay={0}
                >
                  <View>
                    <Text style={css_JuegoImagenes.txtEjemplos}>
                      abre el candado de la puerta
                    </Text>
                  </View>
                </DraxView>

                <DraxView
                  style={[styles.centeredContent, css_JuegoImagenes.Ejemplos]}
                  draggingStyle={styles.dragging}
                  dragReleasedStyle={styles.dragging}
                  hoverDraggingStyle={styles.hoverDragging}
                  dragPayload="Maria luego de salir de clase"
                  longPressDelay={0}
                >
                  <View>
                    <Text style={css_JuegoImagenes.txtEjemplos}>
                      Maria luego de salir de clase
                    </Text>
                  </View>
                </DraxView>
              </View>
            </View>
          </DraxProvider>
        </View>
      );
    }

    if (Tipo == "FÓSFORO") {
      setOracion(
        "Para encender la cocina usamos un fósforo y así podremos cocinar"
      );
      return (
        <View>
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
                      <View style={styles.contentWord}>
                        <View style={css_JuegoImagenes.divImgOracion}>
                          <Image
                            source={require("../img/juego-imagenes/estufa.png")}
                            style={css_JuegoImagenes.imgOracion}
                          />
                          <Image
                            source={require("../img/juego-imagenes/fosforo.png")}
                            style={css_JuegoImagenes.imgOracion}
                          />                          
                          <Image
                            source={require("../img/juego-imagenes/comida.png")}
                            style={css_JuegoImagenes.imgOracion}
                          />                          
                        </View>
                        <Text style={styles.incomingPayload}>{payload}</Text>
                        <View style={styles.divReceived}>
                          {
                            received.map(item =>(
                              <Text style={styles.received} key={item}>
                                {item}
                              </Text>
                            ))
                          }                          
                        </View>
                      </View>
                    </>
                  );
                }}
                onReceiveDragDrop={(event) => {
                  if (received.length == 3) {
                    console.log("DRAG BLOCK");
                  } else {
                    setReceived([...received, event.dragged.payload || "?"]);
                  }
                }}
              />
              <View style={styles.palette}>
                <DraxView
                  style={[styles.centeredContent, css_JuegoImagenes.Ejemplos]}
                  draggingStyle={styles.dragging}
                  dragReleasedStyle={styles.dragging}
                  hoverDraggingStyle={styles.hoverDragging}
                  dragPayload="y así podremos cocinar"
                  longPressDelay={0}
                >
                  <View>
                    <Text style={css_JuegoImagenes.txtEjemplos}>
                      y así podremos cocinar
                    </Text>
                  </View>
                </DraxView>

                <DraxView
                  style={[styles.centeredContent, css_JuegoImagenes.Ejemplos]}
                  draggingStyle={styles.dragging}
                  dragReleasedStyle={styles.dragging}
                  hoverDraggingStyle={styles.hoverDragging}
                  dragPayload="usamos un fósforo"
                  longPressDelay={0}
                >
                  <View>
                    <Text style={css_JuegoImagenes.txtEjemplos}>
                      usamos un fosforo
                    </Text>
                  </View>
                </DraxView>

                <DraxView
                  style={[styles.centeredContent, css_JuegoImagenes.Ejemplos]}
                  draggingStyle={styles.dragging}
                  dragReleasedStyle={styles.dragging}
                  hoverDraggingStyle={styles.hoverDragging}
                  dragPayload="Para encender la cocina"
                  longPressDelay={0}
                >
                  <View>
                    <Text style={css_JuegoImagenes.txtEjemplos}>
                      Para encender la cocina
                    </Text>
                  </View>
                </DraxView>
              </View>
            </View>
          </DraxProvider>
        </View>
      );
    }

    if (Tipo == "LIBRO") {
      setOracion(
        "Lucas al salir de clase hace todas sus tareas y luego se va jugar al parque"
      );
      return (
        <View>
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
                      <View style={styles.contentWord}>
                        <View style={css_JuegoImagenes.divImgOracion}>
                          <Image
                            source={require("../img/juego-imagenes/estudiante.png")}
                            style={css_JuegoImagenes.imgOracion}
                          />
                          <Image
                            source={require("../img/juego-imagenes/libro.png")}
                            style={css_JuegoImagenes.imgOracion}
                          />
                          <Image
                            source={require("../img/juego-imagenes/parque.png")}
                            style={css_JuegoImagenes.imgOracion}
                          />       
                        </View>
                        <Text style={styles.incomingPayload}>{payload}</Text>
                        <View style={styles.divReceived}>
                          {
                            received.map(item =>(
                              <Text style={styles.received} key={item}>
                                {item}
                              </Text>
                            ))
                          }                          
                        </View>
                      </View>
                    </>
                  );
                }}
                onReceiveDragDrop={(event) => {
                  if (received.length == 3) {
                    console.log("DRAG BLOCK");
                  } else {
                    setReceived([...received, event.dragged.payload || "?"]);
                  }
                }}
              />
              <View style={styles.palette}>
                <DraxView
                  style={[styles.centeredContent, css_JuegoImagenes.Ejemplos]}
                  draggingStyle={styles.dragging}
                  dragReleasedStyle={styles.dragging}
                  hoverDraggingStyle={styles.hoverDragging}
                  dragPayload="Lucas al salir de clase"
                  longPressDelay={0}
                >
                  <View>
                    <Text style={css_JuegoImagenes.txtEjemplos}>
                      Lucas al salir de clase
                    </Text>
                  </View>
                </DraxView>

                <DraxView
                  style={[styles.centeredContent, css_JuegoImagenes.Ejemplos]}
                  draggingStyle={styles.dragging}
                  dragReleasedStyle={styles.dragging}
                  hoverDraggingStyle={styles.hoverDragging}
                  dragPayload="y luego se va jugar al parque"
                  longPressDelay={0}
                >
                  <View>
                    <Text style={css_JuegoImagenes.txtEjemplos}>
                      y luego se va jugar al parque
                    </Text>
                  </View>
                </DraxView>

                <DraxView
                  style={[styles.centeredContent, css_JuegoImagenes.Ejemplos]}
                  draggingStyle={styles.dragging}
                  dragReleasedStyle={styles.dragging}
                  hoverDraggingStyle={styles.hoverDragging}
                  dragPayload="hace todas sus tareas"
                  longPressDelay={0}
                >
                  <View>
                    <Text style={css_JuegoImagenes.txtEjemplos}>
                      hace todas sus tareas
                    </Text>
                  </View>
                </DraxView>
              </View>
            </View>
          </DraxProvider>
        </View>
      );
    }

    if (Tipo == "TAPILLA") {
      setOracion(
        "La tapa es muy bonita sus curvas son como las flores y las nubes del cielo"
      );
      return (
        <View>
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
                      <View style={styles.contentWord}>
                        <View style={css_JuegoImagenes.divImgOracion}>
                          <Image
                            source={require("../img/juego-imagenes/tapilla.png")}
                            style={css_JuegoImagenes.imgOracion}
                          />
                          <Image
                            source={require("../img/juego-imagenes/flor.png")}
                            style={css_JuegoImagenes.imgOracion}
                          />
                          <Image
                            source={require("../img/juego-imagenes/nube.png")}
                            style={css_JuegoImagenes.imgOracion}
                          />
                        </View>
                        <Text style={styles.incomingPayload}>{payload}</Text>
                        <View style={styles.divReceived}>
                          {
                            received.map(item =>(
                              <Text style={styles.received} key={item}>
                                {item}
                              </Text>
                            ))
                          }                          
                        </View>
                      </View>
                    </>
                  );
                }}
                onReceiveDragDrop={(event) => {
                  if (received.length == 3) {
                    console.log("DRAG BLOCK");
                  } else {
                    setReceived([...received, event.dragged.payload || "?"]);
                  }
                }}
              />
              <View style={styles.palette}>
                <DraxView
                  style={[styles.centeredContent, css_JuegoImagenes.Ejemplos]}
                  draggingStyle={styles.dragging}
                  dragReleasedStyle={styles.dragging}
                  hoverDraggingStyle={styles.hoverDragging}
                  dragPayload="y las nubes del cielo"
                  longPressDelay={0}
                >
                  <View>
                    <Text style={css_JuegoImagenes.txtEjemplos}>
                      y las nubes del cielo
                    </Text>
                  </View>
                </DraxView>

                <DraxView
                  style={[styles.centeredContent, css_JuegoImagenes.Ejemplos]}
                  draggingStyle={styles.dragging}
                  dragReleasedStyle={styles.dragging}
                  hoverDraggingStyle={styles.hoverDragging}
                  dragPayload="La tapa es muy bonita"
                  longPressDelay={0}
                >
                  <View>
                    <Text style={css_JuegoImagenes.txtEjemplos}>
                      La tapa es muy bonita
                    </Text>
                  </View>
                </DraxView>

                <DraxView
                  style={[styles.centeredContent, css_JuegoImagenes.Ejemplos]}
                  draggingStyle={styles.dragging}
                  dragReleasedStyle={styles.dragging}
                  hoverDraggingStyle={styles.hoverDragging}
                  dragPayload="sus curvas son como las flores"
                  longPressDelay={0}
                >
                  <View>
                    <Text style={css_JuegoImagenes.txtEjemplos}>
                      sus curvas son como las flores
                    </Text>
                  </View>
                </DraxView>
              </View>
            </View>
          </DraxProvider>
        </View>
      );
    }

    if (Tipo == "REGALO") {
      setOracion(
        "La niña está muy feliz porque le regalaron un bonito vestido"
      );
      return (
        <View>
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
                      <View style={styles.contentWord}>
                        <View style={css_JuegoImagenes.divImgOracion}>
                          <Image
                            source={require("../img/juego-imagenes/nina.png")}
                            style={css_JuegoImagenes.imgOracion}
                          />
                            <Image
                              source={require("../img/juego-imagenes/regalo.png")}
                              style={css_JuegoImagenes.imgOracion}
                            />
                          <Image
                            source={require("../img/juego-imagenes/ropa.png")}
                            style={css_JuegoImagenes.imgOracion}
                          />
                        </View>
                        <Text style={styles.incomingPayload}>{payload}</Text>
                        <View style={styles.divReceived}>
                          {
                            received.map(item =>(
                              <Text style={styles.received} key={item}>
                                {item}
                              </Text>
                            ))
                          }                          
                        </View>
                      </View>
                    </>
                  );
                }}
                onReceiveDragDrop={(event) => {
                  if (received.length == 3) {
                    console.log("DRAG BLOCK");
                  } else {
                    setReceived([...received, event.dragged.payload || "?"]);
                  }
                }}
              />
              <View style={styles.palette}>
                <DraxView
                  style={[styles.centeredContent, css_JuegoImagenes.Ejemplos]}
                  draggingStyle={styles.dragging}
                  dragReleasedStyle={styles.dragging}
                  hoverDraggingStyle={styles.hoverDragging}
                  dragPayload="un bonito vestido"
                  longPressDelay={0}
                >
                  <View>
                    <Text style={css_JuegoImagenes.txtEjemplos}>
                      un bonito vestido
                    </Text>
                  </View>
                </DraxView>

                <DraxView
                  style={[styles.centeredContent, css_JuegoImagenes.Ejemplos]}
                  draggingStyle={styles.dragging}
                  dragReleasedStyle={styles.dragging}
                  hoverDraggingStyle={styles.hoverDragging}
                  dragPayload="porque le regalaron"
                  longPressDelay={0}
                >
                  <View>
                    <Text style={css_JuegoImagenes.txtEjemplos}>
                      porque le regalaron
                    </Text>
                  </View>
                </DraxView>

                <DraxView
                  style={[styles.centeredContent, css_JuegoImagenes.Ejemplos]}
                  draggingStyle={styles.dragging}
                  dragReleasedStyle={styles.dragging}
                  hoverDraggingStyle={styles.hoverDragging}
                  dragPayload="La niña está muy feliz"
                  longPressDelay={0}
                >
                  <View>
                    <Text style={css_JuegoImagenes.txtEjemplos}>
                      La niña está muy feliz
                    </Text>
                  </View>
                </DraxView>
              </View>
            </View>
          </DraxProvider>
        </View>
      );
    }
  };

  const ActividadImagenes = ({ Nombre }) => {
    const [respuesta, setRespuesta] = useState("");

    //Verificamos si la oración escrita es correcta
    const VerificarOracion = (respuesta) => {
      // Verificamos si la respuesta no está vacia
      console.log(respuesta);
      let oracionCompleta = `${respuesta[0]} ${respuesta[1]} ${respuesta[2]}`;
      console.log(oracionCompleta);
      console.log(oracion);
      // Verificamos si las oraciones son iguales => respuesta == oracion ? true : false
      if (oracionCompleta == oracion) {
        setWin(true);
        // Reiniciamos el item de la ruleta
        setItemRuleta(null);
        setItem("");
        setReceived([]);
        // Eliminamos de la ruleta el item
        let objParticipant = participants;
        objParticipant = objParticipant.filter((obj) => {
          return obj !== item;
        });
        setparticipants(objParticipant);

        for (let i = 0; i < trofeos.length; i++) {
          if (trofeos[i].nombre == "Jefe de las Oraciones") {
            console.log("Ya tienes este trofeo");
            // setMedalla(false);
            return;
          }
        }
        let trofeosObj;
        if (trofeos.id === "") {
          trofeosObj = [];
        } else {
          trofeosObj = [...trofeos];
        }
        // Creamos el trofeo del juego
        trofeosObj.push({
          id: aleatorio,
          nombre: "Jefe de las Oraciones",
          estrellas: "5",
          tipo: "medalla",
        });
        // Registramos el trofeo en el context
        
        setTrofeos(trofeosObj);
        setJuegosCompletados(juegosCompletados + 1);
        setGmSopaLetras(gmSopaLetras + 1);
        if(gmSopaLetras  == 7){
          trofeosObj.push(  
            {
            id: aleatorio,
            nombre: 'Master de las Oraciones',
            estrellas: "5",
            tipo: 'trofeo'
          });
          setTrofeos(trofeosObj);
        }
      } else {
        setItemRuleta(null);
        setItem("");
        setLose(true);
      }
    };

    return (
      <View style={styles.content}>
        <AwesomeAlert
          // Alerta si el usuario no escribe su nombre
          show={alert1}
          showProgress={false}
          title="Ops!"
          message="Primero escribe una oración!!"
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          showCancelButton={false}
          showConfirmButton={true}
          confirmText="Aceptar"
          confirmButtonColor={Colors.yellow}
          onConfirmPressed={() => setAlert1(false)}
        />
        <View style={css_JuegoImagenes.divInstrucciones}>
          <Text style={css_JuegoImagenes.txtInstrucciones}>
            Ordena la oración de manera correcta, guiate en las imágenes.
          </Text>
          {/* <MaterialIcons
            name="emoji-emotions"
            size={22}            
            color={Colors.blue_dark}
          /> */}
        </View>
        <View style={styles.game}>
          <Imagenes Tipo={Nombre} />
        </View>

        <View style={styles.botones}>
          <TouchableOpacity
            style={css_Vocabulario.btnVocabulario2}
            onPress={() => RepetirJuego()}
          >
            <Ionicons
              name="md-reload-circle"
              size={36}
              color={Colors.blue_dark}
            />
            <Text style={css_Vocabulario.txtBoton}>Deshacer</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={css_Boton.btnOpcion}
            onPress={() => VerificarOracion(received)}
          >
            <View style={css_Boton.divIcon}>
              <Image
                source={require("../img/mando.png")}
                style={css_Boton.iconOpcion}
              />
            </View>
            <Text style={css_Boton.txtOpcion}>Terminar</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  useEffect(() => {    
    if (itemRuleta !== null) setRuleta(false);
    setItem(itemRuleta);
    // console.log('Y el juego es:' + item);
    // return () => backHandler.remove();
  }, [itemRuleta]);  
  return (
    <View style={css_JuegoImagenes.Container}>
      <HeaderGame image="book.png" name="JUEGO DE IMÁGENES" />
      {preGame ? (
        <PreScreenGame txtDialogo="Gira la ruleta y arma la oración correctamente ¡SUERTE!" />
      ) : null}
      {ruleta && preGame == false ? <RuletaView /> : null}
      {win ? (
        <WinGame2
          Siguiente="Menu"
          Win={true}
          NombreTrofeo="Master de las Oraciones"          
        />
      ) : null}
      {lose ? <LoseGame Siguiente="Menu" /> : null}
      {item == "DRAGÓN" ? <ActividadImagenes Nombre="DRAGÓN" /> : null}
      {item == "LIBRO" ? <ActividadImagenes Nombre="LIBRO" /> : null}
      {item == "REGALO" ? <ActividadImagenes Nombre="REGALO" /> : null}
      {item == "GATO" ? <ActividadImagenes Nombre="GATO" /> : null}
      {item == "CANDADO" ? <ActividadImagenes Nombre="CANDADO" /> : null}
      {item == "FÓSFORO" ? <ActividadImagenes Nombre="FÓSFORO" /> : null}
      {item == "PLATO" ? <ActividadImagenes Nombre="PLATO" /> : null}
      {item == "TAPILLA" ? <ActividadImagenes Nombre="TAPILLA" /> : null}
    </View>
  );
};

const css_Boton = StyleSheet.create({
  btnOpcion: {
    flexDirection: "row",
    backgroundColor: Colors.turquesa,
    padding: 4,
    width: 230,
    borderRadius: 30,
    alignSelf: "center",
    alignItems: "center",
    marginTop: "10%",
    margin: "2%",
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
    marginHorizontal: "5%",
    textShadowOffset: { width: 1, height: 1 },
    textTransform: "uppercase",
  },
});

const styles = StyleSheet.create({
  content: {
    flex: 1,
    padding: 20,
  },
  game: {
    flex: 2,
  },
  botones: {
    flex: 1,
  },
  container: {
    // flex: 1,
    paddingTop: 5,
    // padding:20,
  },
  centeredContent: {
    // justifyContent: "center",
    alignItems: "center",
  },
  receivingZone: {
    height: 220,
    borderRadius: 10,
    padding: 10,
    // margin: 16
    backgroundColor: Colors.blue_dark,
    borderColor: Colors.yellow,
    borderWidth: 2,
  },
  textRecived: {
    color: Colors.blue_dark,
    fontSize: 20,
    fontWeight: "bold",
  },
  receiving: {
    borderColor: Colors.redLight,
    borderWidth: 2,
  },
  incomingPayload: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.blue_dark,
  },
  contentWord: {
    padding: 4,
    margin: 2,
    // alignItems: "center",
    justifyContent: "center",
  },
  divReceived:{
    display: 'flex',
    flexDirection: 'row',           
    // alignItems: "center",      
    // justifyContent: 'center'
  },
  received: {    
    width: "30%",  
    height:70,
    margin: 4,
    flexDirection:'column',
    // alignSelf:'center',
    alignItems: "center",
    // justifyContent: "center",
    backgroundColor: Colors.redLight,
    borderRadius: 10,
    padding: 6,
    textAlign: "center",    
    fontSize: 15,        
    color: Colors.white,
  },
  palette: {
    flexDirection: "row",
    margin: 3,
    justifyContent: "center",
  },
  draggableBox: {
    width: 80,
    height: 80,
    borderRadius: 10,
    padding: 10,
    margin: 10,
  },
  textDraggable: {
    fontWeight: "bold",
    fontSize: 20,
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
    backgroundColor: "#aaffff",
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
  imgOso: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
});

export default JuegoImagenes;
