import React, { useContext, useEffect, useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, BackHandler, Image, TouchableOpacity, Text, StyleSheet,KeyboardAvoidingView,
     Platform, TouchableWithoutFeedback, Keyboard ,TextInput, ScrollView } from 'react-native';
import HeaderGame from '../components/HeaderGame';
import PreScreenGame from '../components/PreScreenGame';
import { css_Crucigrama, css_DeLectura, css_JuegoImagenes, css_TestEvaluativo } from '../styles/GameStyle';
import { AuthContext } from "../navigation/AuthProvider";
// import Dialogo from '../components/Dialogo';
import BotonContinuar from '../components/BotonContinuar';
import { DraxProvider, DraxView } from 'react-native-drax';
import { Colors } from '../styles/Colors';
import { css_Registro } from '../styles/Style';
import { Dialogo } from '../components/Dialogo';


const TestEvaluativo = ({navigation}) => {
    const { preGame, setPreGame} = useContext(AuthContext);
    const[pregunta, setPregunta] = useState(1);
    const[respuestas, setRespuestas] = useState(1);
    const [received, setReceived] = useState([]);


    const base = '123';
    let numeroAzar = base[Math.floor(Math.random() * base.length)];

    const Respuesta = (valor) =>{
        if(valor){
            setRespuestas(respuestas + 1)            
            // navigation.navigate('WinGame');
            setPregunta(pregunta + 1 )
        }else{
            // setRespuestas(respuestas - 1)
            setPregunta(pregunta + 1 )
            // navigation.navigate('LoseGame');
        }
        console.log(respuestas);
    }

    const backHandler = BackHandler.addEventListener("hardwareBackPress", ()=> setPreGame(true))
    useEffect(() => {      
        return () => backHandler.remove();
    }, []);

    const NotaFinal = ()=>{
        return(
            <View>
                <View style={css_DeLectura.divContenido}>
                    <View style={css_DeLectura.divPregunta}>
                        <Text style={css_DeLectura.txtPregunta}>Tu nota final es: </Text>
                    </View>
                    <View style={css_DeLectura.Respuesta}>
                               <Text style={css_DeLectura.txtPregunta}>{respuestas}/7</Text> 
                        </View>                
                        {
                    (respuestas >= 6)
                    ? <Dialogo texto='Felicidades has aprobado el test con una nota Excelente ' />
                    : (respuestas >= 5)
                     ? <Dialogo texto='Casi aciertas, pero te equivocaste en algunas preguntas ¡Sigue Intetandolo!' />
                     : <Dialogo texto='No aprobaste, ¡No te rindas Sigue Intetandolo!' />
                }
                <Image source={require('../img/oso_game_2.png')}  style={{ width: 100, height: 150, alignSelf: 'flex-end', marginTop: -40}}/>
                <BotonContinuar  Texto='Continuar' Ruta='Menu'/>
                </View>

            </View>
        );
    }

    const PrimeraPregunta = ()=>{
            return(
                <View>
                    <View style={css_DeLectura.divContenido}>
                        <View style={css_DeLectura.divPregunta2}>
                            <Text style={css_DeLectura.txtPregunta}>-CONECTORES-</Text>
                            <Text style={css_DeLectura.txtPregunta}>Arrastra el conector correcto.</Text>
                        </View>
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
                                        <Text style={styles.textRecived}></Text>
                                        <Image source={require('../img/test/viaje.png')} style={styles.imgOso} />
                                        <View style={styles.contentWord}>
                                        <Text style={styles.incomingPayload}>{payload}</Text>
                                        <View style={styles.divReceived}>    
                                            <Text style={styles.oracion} >Carlos fue de viaje</Text>
                                            <Text style={styles.received} >{received}</Text>
                                            <Text style={styles.oracion} >despues de un largo tiempo.</Text>

                                        </View>
                                        </View>
                                    </>
                                    );
                                }}
                                onReceiveDragDrop={(event) => {                                    
                                    if(received.length == 1){
                                    console.log('DRAG BLOQUEADO');
                                    }else{
                                        setReceived([
                                            ...received,
                                            event.dragged.payload || '?',
                                        ]);
                                    }
                                    setTimeout(() => {
                                        if(event.dragged.payload == 'finalmente'){
                                            Respuesta(true);
                                            setReceived([]);
                                        }else{
                                            Respuesta(false);
                                            setReceived([]);
                                        }
                                    }, 3000);
                                }}
                                />      
                                <View style={styles.palette}>
                                
                                <DraxView
                                    style={[styles.centeredContent, styles.draggableBox, styles.yellow]}
                                    draggingStyle={styles.dragging}
                                    dragReleasedStyle={styles.dragging}
                                    hoverDraggingStyle={styles.hoverDragging}
                                    dragPayload="finalmente"
                                    longPressDelay={0}
                                >
                                    <Text style={styles.textDraggable}>finalmente</Text>
                                </DraxView>            
                                <DraxView
                                    style={[styles.centeredContent, styles.draggableBox, styles.yellow]}
                                    draggingStyle={styles.dragging}
                                    dragReleasedStyle={styles.dragging}
                                    hoverDraggingStyle={styles.hoverDragging}
                                    dragPayload="ojalá"
                                    longPressDelay={0}
                                >
                                    <Text style={styles.textDraggable}>ojalá</Text>
                                </DraxView>            
                                </View>
                            </View> 
                        </DraxProvider>
                    </View>
                </View>
            );
        }

        const SegundaPregunta = ()=>{
            return(
                <View>
                    <View style={css_DeLectura.divContenido}>
                        <View style={css_DeLectura.divPregunta2}>
                            <Text style={css_DeLectura.txtPregunta}>-CONECTORES-</Text>
                            <Text style={css_DeLectura.txtPregunta}>Arrastra el conector correcto.</Text>
                        </View>
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
                                        <Image source={require('../img/test/calles.png')} style={styles.imgOso} />
                                        <View style={styles.contentWord}>
                                        <Text style={styles.incomingPayload}>{payload}</Text>
                                        <View style={styles.divReceived}>    
                                            <Text style={styles.oracion} >Las calles están oscuras</Text>
                                            <Text style={styles.received} >{received}</Text>
                                            <Text style={styles.oracion} >eso, debemos ir con cuidado de no tropezarnos.</Text>

                                        </View>
                                        </View>
                                    </>
                                    );
                                }}
                                onReceiveDragDrop={(event) => {                                    
                                    if(received.length == 1){
                                    console.log('DRAG BLOQUEADO');
                                    }else{
                                        setReceived([
                                            ...received,
                                            event.dragged.payload || '?',
                                        ]);
                                    }
                                    setTimeout(() => {
                                        if(event.dragged.payload == 'debido a'){
                                            setReceived([]);
                                            Respuesta(true);
                                        }else{
                                            setReceived([]);
                                            Respuesta(false);
                                        }
                                    }, 3000);
                                }}
                                />      
                                <View style={styles.palette}>
                                
                                <DraxView
                                    style={[styles.centeredContent, styles.draggableBox, styles.yellow]}
                                    draggingStyle={styles.dragging}
                                    dragReleasedStyle={styles.dragging}
                                    hoverDraggingStyle={styles.hoverDragging}
                                    dragPayload="debido a"
                                    longPressDelay={0}
                                >
                                    <Text style={styles.textDraggable}>debido a</Text>
                                </DraxView>            
                                <DraxView
                                    style={[styles.centeredContent, styles.draggableBox, styles.yellow]}
                                    draggingStyle={styles.dragging}
                                    dragReleasedStyle={styles.dragging}
                                    hoverDraggingStyle={styles.hoverDragging}
                                    dragPayload="por que"
                                    longPressDelay={0}
                                >
                                    <Text style={styles.textDraggable}>por que</Text>
                                </DraxView>            
                                </View>
                            </View> 
                        </DraxProvider>
                    </View>
                </View>
            );
        }

        const TerceraPregunta = ()=>{
        const [animal1, setanimal1] = useState("");
        const [animal2, setanimal2] = useState("");
        const [animal3, setanimal3] = useState("");
        const VerificarAnimales = ()=>{
            if(animal1.length == 0 || animal2.length == 0 || animal3.length == 0){
                return alert('Debes completar todos las preguntas')
            }
            console.log('animal 1', animal1);
            console.log('animal 2', animal2);
            console.log('animal 3', animal3);
            if(animal1.toLowerCase() == 'vaca' && animal2.toLowerCase() == 'ratón' || animal2.toLowerCase() == 'raton' || animal2.toLowerCase() == 'rata'  &&  animal3.toLowerCase() == 'oso'){
                Respuesta(true);
            }else{
                Respuesta(false);
            }
        }
            return(
                <View>
                    <View style={css_DeLectura.divContenido}>
                        <View style={css_DeLectura.divPregunta2}>
                            <Text style={css_DeLectura.txtPregunta}>-ESCRITURA-</Text>
                            <Text style={css_DeLectura.txtPregunta}>Escribe correctamente el nombre de los animales</Text>
                        </View>
                        <KeyboardAvoidingView behavior="position">
                        <View style={css_DeLectura.divRespuestas}>
                            <View style={css_DeLectura.Respuesta}>
                               <Image source={require('../img/animales/016-cow.png')} style={css_TestEvaluativo.img}/>
                               <TextInput
                                style={css_TestEvaluativo.InputNombres}
                                onChangeText={setanimal1}
                                value={animal1}
                                textContentType="name"
                                placeholder="Nombre del animalito"
                                placeholderTextColor={Colors.blue_dark}
                                />
                            </View>
                            
                            <View style={css_DeLectura.Respuesta}>
                               <Image source={require('../img/test/rata.png')} style={css_TestEvaluativo.img}/>
                               <TextInput
                                style={css_TestEvaluativo.InputNombres}
                                onChangeText={setanimal2}
                                value={animal2}
                                textContentType="name"
                                placeholder="Nombre del animalito"
                                placeholderTextColor={Colors.blue_dark}
                                />
                            </View>    
                                                        
                            <View style={css_DeLectura.Respuesta}>
                               <Image source={require('../img/test/bear.png')} style={css_TestEvaluativo.img}/>
                               <TextInput
                                style={css_TestEvaluativo.InputNombres}
                                onChangeText={setanimal3}
                                value={animal3}
                                textContentType="name"
                                placeholder="Nombre del animalito"
                                placeholderTextColor={Colors.blue_dark}
                                />
                            </View>       

                            <TouchableOpacity style={css_DeLectura.Respuesta} onPress={()=> VerificarAnimales()}>
                               <Text style={css_DeLectura.txtRespuesta}>SIGUIENTE</Text> 
                            </TouchableOpacity>                                                   
                        </View>
                        </KeyboardAvoidingView>
                    </View>
                </View>
            );
        }

        const CuartaPregunta = ()=>{
            return(
                <View>
                    <View style={css_DeLectura.divContenido}>
                        <View style={css_DeLectura.divPregunta2}>
                            <Text style={css_DeLectura.txtPregunta}>-CREATIVIDAD-</Text>
                            <Text style={css_DeLectura.txtPregunta}>Según las imágenes cual oración es la correcta.
                            </Text>
                        </View>

                        <View style={css_DeLectura.divPregunta}>
                            <View style={css_JuegoImagenes.divImgOracion}>
                            <Image
                                source={require("../img/test/flores.png")}
                                style={css_JuegoImagenes.imgOracion}
                            />
                            <Image
                                source={require("../img/test/jardin.png")}
                                style={css_JuegoImagenes.imgOracion}
                            />
                            <Image
                                source={require("../img/test/barrio.png")}
                                style={css_JuegoImagenes.imgOracion}
                            />
                            </View>    
                        </View>
                        
                        <View style={css_DeLectura.divRespuestas}>                            

                            <TouchableOpacity style={css_DeLectura.Respuesta} onPress={()=> Respuesta(false)}>
                               <Text style={css_DeLectura.txtRespuesta}>Las rocas del jardín de Ana son las mas bonitas de la playa.</Text> 
                            </TouchableOpacity>
    
                            <TouchableOpacity style={css_DeLectura.Respuesta} onPress={()=> Respuesta(true)}>
                               <Text style={css_DeLectura.txtRespuesta}>Las flores del jardín de Ana son las mas bonitas de la barriada.</Text> 
                            </TouchableOpacity>
                                                            
                        </View>
                    </View>
                </View>
            );
        }

        const QuintaPregunta = ()=>{
            return(
                <View>
                    <View style={css_DeLectura.divContenido}>
                        <View style={css_DeLectura.divPregunta2}>
                            <Text style={css_DeLectura.txtPregunta}>-CREATIVIDAD-</Text>
                            <Text style={css_DeLectura.txtPregunta}>Según las imágenes cual oración es la correcta.
                            </Text>
                        </View>

                        <View style={css_DeLectura.divPregunta}>
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
                        </View>
                        
                        <View style={css_DeLectura.divRespuestas}>                            
                            <TouchableOpacity style={css_DeLectura.Respuesta} onPress={()=> Respuesta(true)}>
                               <Text style={css_DeLectura.txtRespuesta}>El dragón sale todos los días a buscar en las montañas comida para alimentarse.</Text> 
                            </TouchableOpacity>

                            <TouchableOpacity style={css_DeLectura.Respuesta} onPress={()=> Respuesta(false)}>
                               <Text style={css_DeLectura.txtRespuesta}>El dragón sale todos los días a  buscar a sus hijitos.</Text> 
                            </TouchableOpacity>
    
                                                            
                        </View>
                    </View>
                </View>
            );
        }

        const SextaPregunta = () =>{
            const [press1,setPress1]=useState(false);
            const [select1,setSelect1]=useState("");
            const [press2,setPress2]=useState(false);
            const [select2,setSelect2]=useState("");
            const [press3,setPress3]=useState(false);
            const [select3,setSelect3]=useState("");

            const seleccion1 = (respuesta)=>{
                setSelect1(respuesta);
                setPress1(true);
            }
            const seleccion2 = (respuesta)=>{
                setSelect2(respuesta);
                setPress2(true);
            }
            const seleccion3 = (respuesta)=>{
                setSelect3(respuesta);
                setPress3(true);
            }
            const verificarRespuestas = ()=>{
                if(select1.length == 0 || select2.length == 0 || select3.length == 0){
                    return alert('Te falta seleccionar una respuesta');
                }

                if(select1 == 'Josefina' && select2 == 'Azules' && select3 == 'Cacarea'){
                    Respuesta(true);
                }else{
                    Respuesta(false);
                }
            }
            return(
                <ScrollView>
                    <View style={css_DeLectura.divContenido}>
                        <View style={css_DeLectura.divPregunta2}>
                            <Text style={css_DeLectura.txtPregunta}>-COMPRENSIÓN LECTORA-</Text>
                            <Text style={css_DeLectura.txtPregunta}>Lee y responde a las preguntas</Text>
                        </View>
                        <View style={css_DeLectura.divPregunta2}>
                            <Text style={css_DeLectura.txtPregunta}>La gallina Josefina.</Text>
                            <Text style={css_DeLectura.txtPregunta}>
                            La gallina Josefina a puesto 5 huevos de color azul, a la gallina Josefina le gusta usar un sombrero de color verde y le gusta cacarear cada que pone un huevo.
                            </Text>
                        </View>                        

                        <View style={css_DeLectura.divRespuestas}>
                            <View style={css_TestEvaluativo.Respuesta}>
                               <Text style={css_TestEvaluativo.txtRespuesta}>¿Cómo se llama la gallina?</Text> 
                            </View>
                            <View style={css_TestEvaluativo.viewOp}>
                                <TouchableOpacity style={(select1 == 'Josefina' && press1) ? css_TestEvaluativo.viewPress :css_TestEvaluativo.btnOp } onPress={()=>{seleccion1('Josefina')}}>
                                    <Text style={css_TestEvaluativo.txtOp}>Josefina</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={(select1 == 'Susana'  && press1) ? css_TestEvaluativo.viewPress :css_TestEvaluativo.btnOp }  onPress={()=>{seleccion1('Susana')}}>
                                    <Text style={css_TestEvaluativo.txtOp}>Susana</Text>
                                </TouchableOpacity>
                            </View> 
    
                            <View style={css_TestEvaluativo.Respuesta}>
                               <Text style={css_TestEvaluativo.txtRespuesta}>¿De qué color eran los huevos?</Text> 
                            </View>
                            <View style={css_TestEvaluativo.viewOp}>
                                <TouchableOpacity style={(select2 == 'Verdes' && press2) ? css_TestEvaluativo.viewPress :css_TestEvaluativo.btnOp } onPress={()=>{seleccion2('Verdes')}}>
                                    <Text style={css_TestEvaluativo.txtOp}>Verdes</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={(select2 == 'Azules' && press2) ? css_TestEvaluativo.viewPress :css_TestEvaluativo.btnOp } onPress={()=>{seleccion2('Azules')}}>
                                    <Text style={css_TestEvaluativo.txtOp}>Azules</Text>
                                </TouchableOpacity>                                
                            </View> 

                            <View style={css_TestEvaluativo.Respuesta}>
                               <Text style={css_TestEvaluativo.txtRespuesta}>¿Qué hace la gallina cuendo pone un huevo?</Text> 
                            </View>
                            <View style={css_TestEvaluativo.viewOp}>
                                <TouchableOpacity style={(select3 == 'Cacarea' && press3) ? css_TestEvaluativo.viewPress :css_TestEvaluativo.btnOp } onPress={()=>{seleccion3('Cacarea')}}>
                                    <Text style={css_TestEvaluativo.txtOp}>Cacarea</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={(select3 == 'Come' && press3) ? css_TestEvaluativo.viewPress :css_TestEvaluativo.btnOp } onPress={()=>{seleccion3('Come')}}>
                                    <Text style={css_TestEvaluativo.txtOp}>Come maíz</Text>
                                </TouchableOpacity>
                            </View>

                            <TouchableOpacity style={css_DeLectura.Respuesta} onPress={()=> verificarRespuestas()}>
                               <Text style={css_DeLectura.txtRespuesta}>SIGUIENTE</Text> 
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            );
        }

        const SeptimaPregunta = () =>{
            const [animal1, setanimal1] = useState('');
            const [animal2, setanimal2] = useState('');
            const Verificar = ()=>{
                if(animal1.length == 0 || animal2.length == 0){
                    return alert('Debes completar todas las preguntas');
                }
                if(animal1.toLowerCase == 'loro' && (animal2.toLowerCase() == 'lago' || animal2.toLowerCase() == 'laguna')){
                    Respuesta(true);
                }else{
                    Respuesta(false);
                }
            }
            return(
                <View>
                    <View style={css_DeLectura.divContenido}>
                        <View style={css_DeLectura.divPregunta}>
                            <Text style={css_DeLectura.txtPregunta}>-VOCABULARIO-</Text>
                        </View>
                    <KeyboardAvoidingView behavior="position">
                        <View style={css_DeLectura.divRespuestas}>
                            <View style={css_TestEvaluativo.Respuesta}>
                               <Image source={require('../img/test/loro.png')} style={css_TestEvaluativo.img2}/>
                               <Text style={css_TestEvaluativo.txtRespuesta2}>Ave grande con plumas coloridas.</Text> 
                               <TextInput
                                style={css_TestEvaluativo.InputNombres}
                                onChangeText={setanimal1}
                                value={animal1}
                                textContentType="name"
                                placeholder="Nombre del animalito"
                                placeholderTextColor={Colors.blue_dark}
                                />
                            </View>

                            <TouchableWithoutFeedback>
                            <View style={css_TestEvaluativo.Respuesta}>                                                                                               
                                    <Image source={require('../img/test/lago.png')} style={css_TestEvaluativo.img2}/>
                                    <Text style={css_TestEvaluativo.txtRespuesta2}>Gran depósito natural de agua. </Text> 
                                    <TextInput
                                        style={css_TestEvaluativo.InputNombres}
                                        onChangeText={setanimal2}
                                        value={animal2}
                                        textContentType="name"
                                        placeholder="Nombre del lugar"
                                        placeholderTextColor={Colors.blue_dark}
                                    />                                                              
                            </View>
                            </TouchableWithoutFeedback>

                            <TouchableOpacity style={css_DeLectura.Respuesta} onPress={()=> Verificar()}>
                               <Text style={css_DeLectura.txtRespuesta}>SIGUIENTE</Text> 
                            </TouchableOpacity>
                        </View>
                    </KeyboardAvoidingView>
                    </View>
                </View>
            );
        }


    return (  
        <View style={css_Crucigrama.Container}>           
            <HeaderGame name='Test Evaluativo'/>
            {preGame ? <PreScreenGame txtDialogo='Ahora veremos cuanto has aprendido, juega y contesta las preguntas ¡Suerte!'/> : null}
            {preGame ? null : ( pregunta == 1) ? <PrimeraPregunta /> : null}
            {pregunta == 2 ? <SegundaPregunta /> : null }
            {pregunta == 3 ? <TerceraPregunta /> : null }
            {pregunta == 4 ? <CuartaPregunta /> : null }
            {pregunta == 5 ? <QuintaPregunta /> : null }
            {pregunta == 6 ? <SextaPregunta /> : null }
            {pregunta == 7 ? <SeptimaPregunta /> : null }
            {pregunta == 8 ?  <NotaFinal /> : null }        

        </View>
     ); 
}
const styles = StyleSheet.create({
    container: {
      // flex: 1,
    //   paddingTop: 20,
      // padding:20,
      
    },
    centeredContent: {
    //   justifyContent: 'center',
      alignItems: 'center',
    },
    receivingZone: {
      height: 260,      
      borderRadius: 10,
      padding: 10,
    //   margin: 16,
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
      width: 300,
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    oracion:{
    //   textAlignVertical: "center",
    //   textAlign: 'center',
      fontSize: 20,
      fontWeight:'bold',
      color: Colors.blue_dark
    },
    received: {
      backgroundColor: Colors.red,          
      padding: 4,
      borderRadius: 6,
      width: 110,      
      textAlignVertical: "center",
      textAlign: 'center',
      fontSize: 20,
      fontWeight:'bold',
      color: Colors.white,
      marginHorizontal: 4
    },
    palette: {
      flexDirection: 'row',
      alignItems:'center',    
      flexWrap:'wrap',
      margin: 10,
      justifyContent: 'center',
    },
    draggableBox: {
      width: 130,
    //   height: 80,
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
export default TestEvaluativo;

