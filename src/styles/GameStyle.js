import { StyleSheet } from "react-native";
import { Colors } from "./Colors";

export const css_SopaPalabras = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: Colors.blue_dark,
  },
  EligeJuego: {
    backgroundColor: Colors.turquesa,
    width: "70%",
    padding: "2%",
    shadowColor: "#fff",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,

    elevation: 16,

    borderRadius: 50,
    margin: "4%",
    marginTop: "8%",
  },
  txtElige: {
    fontSize: 18,
    color: Colors.blue_dark,
    fontWeight: "bold",
    textShadowRadius: 5,
    textShadowColor: "#fff",
    textShadowOffset: { width: 1, height: 2 },
    textAlign: "center",
  },
  imgOso: {
    alignSelf: "center",
    width: 145,
    height: 170,
    marginLeft: "8%",
  },
  btnOpcion: {
    flexDirection: "row",
    backgroundColor: Colors.turquesa,
    padding: 4,
    width: "85%",
    borderRadius: 30,
    alignSelf: "center",
    alignItems: "center",
    margin: "2%",
  },
  divIcon: {
    backgroundColor: Colors.yellow,
    width: "20%",
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
    color: Colors.blue_dark,
    fontWeight: "bold",
    textShadowRadius: 2,
    textShadowColor: Colors.yellow,
    textShadowOffset: { width: 2, height: 1 },
    marginHorizontal: "4%",
    textTransform: "uppercase",
  },
  txtOpcion2: {
    fontSize: 18,
    color: Colors.blue_dark,
    fontWeight: "bold",
    textShadowRadius: 2,
    textShadowColor: Colors.yellow,
    textShadowOffset: { width: 2, height: 1 },
    marginHorizontal: "8%",
  },
});

export const css_Crucigrama = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: Colors.blue_dark,
  },
});

export const css_JuegoImagenes = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: Colors.blue_dark,
  },
  divImgOracion: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  imgOracion: {
    width: 87,
    height: 90,
  },
  divJuego: {
    margin: 8,
    marginTop: 14,
    borderStyle: "solid",
    borderWidth: 3,
    borderColor: Colors.yellow,
    padding: 6,
    borderRadius: 12,
  },
  divOracionesEjemplo: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  Ejemplos: {
    width: "30%",
    height: 100,
    margin: "2%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.redLight,
    borderRadius: 10,
    padding: "1%",
  },
  txtEjemplos: {
    color: Colors.white,
    textAlign: "center",
    fontSize: 16,
  },
  InputOracion: {
    height: 80,
    borderColor: Colors.yellow,
    borderWidth: 3,
    borderRadius: 10,
    margin: 8,
    marginTop: 12,
    padding: 10,
    color: Colors.white,
    fontSize: 16,
  },
  opcionesRuleta: {
    width: 70,
    height: 70,
  },
  divRuleta: {
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
  divRuletaTop: {
    // margin: '4%',
    width: 170,
    flexDirection: "row",
    flexWrap: "wrap",
    display: "flex",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "space-around",
  },
  divRuletaCenter: {
    margin: "1%",
    paddingHorizontal: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  divRuletaCenter2: {
    margin: "1%",
    flexDirection: "row",
    paddingHorizontal: 10,
    flexWrap: "wrap",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  divRuletaDown: {
    // margin: '2%',
    width: 170,
    flexDirection: "row",
    flexWrap: "wrap",
    display: "flex",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "space-around",
  },
  itemGiro: {
    backgroundColor: Colors.turquesa,
    borderRadius: 50,
    opacity: 1,
  },
  divInstrucciones:{
    backgroundColor: Colors.turquesa,
    padding: 8,
    margin: 10,
    alignItems: 'center',
    borderRadius: 6,    
    borderColor: Colors.yellow,
    borderWidth: 4,
    borderStyle: "solid"
  },
  txtInstrucciones:{
    color: Colors.blue_dark,
    fontWeight: 'bold',
    fontSize: 22
  }
});

export const css_Vocabulario = StyleSheet.create({
  Mensaje: {
    flexDirection: "row",
    width: "80%",
    alignSelf: "center",
    backgroundColor: Colors.yellow,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    height: 80,
    paddingLeft: 53,
    marginVertical: "10%",
  },
  imgOso: {
    width: 120,
    height: 120,
  },
  txtMensaje: {
    width: "62%",
    color: Colors.white,
    fontWeight: "bold",
    fontSize: 18,
  },
  ContainerPalabra:{
    backgroundColor: Colors.turquesa,
    margin: '4%',
    borderRadius:14,
    borderWidth: 3,
    borderColor: Colors.yellow,
    overflow: 'hidden',
  },
  divPalabra:{
    backgroundColor: Colors.yellow,
    padding: '4%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between' 
  },
  txtPalabra:{
    fontSize: 30,
    fontWeight: 'bold',
    textTransform: 'capitalize'
  },
  txtTipo:{
    fontSize: 16,
  },
  divSignificado:{
    padding: '5%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  txtSignificado:{
    fontSize: 20,
    textAlign: 'justify',
  },
  btnVocabulario:{
    padding: 2,
    backgroundColor: Colors.turquesa,
    flexDirection: 'row',
    alignSelf: 'center',
    width: '40%',
    alignItems: 'center',
    borderRadius:8,
    margin: '2%',
  },
  btnVocabulario2:{
    padding: 5,
    backgroundColor: Colors.turquesa,
    flexDirection: 'row',
    alignSelf: 'center',  
    alignItems: 'center',
    borderRadius:8,
    margin: '2%',
  },
  txtBoton:{
  fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 6
  },
  divBotones:{
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  divBotones2:{
    marginTop: 30,
    flexDirection: 'column',
    justifyContent: 'center'
  }
});

export const css_DeOposicion = StyleSheet.create({
  SopaLetrasDiv: {
    width: "100%",
    height: "80%",
  },
  SopaLetrasOff: {
    backgroundColor: Colors.turquesa,
  },
  SopaLetrasOn: {
    backgroundColor: Colors.yellow,
  },
});

export const css_DeLectura = StyleSheet.create({
  divTop: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "space-between",
    marginTop: "4%",
  },
  book: {
    width: 80,
    height: 80,
    marginHorizontal: "4%",
  },
  divContenido: {
    alignItems: "center",
    margin: "4%",
  },
  divPregunta: {
    backgroundColor: Colors.turquesa,
    borderRadius: 6,
    borderColor: Colors.yellow,
    borderWidth: 3,
    marginVertical: "2%",
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  divIcon:{
    backgroundColor: Colors.blue_dark,
    paddingVertical: 14,
    paddingHorizontal: 8,
  },
  divNota: {
    // backgroundColor: Colors.turquesa,
    padding: 10,
    borderRadius: 6,
    marginVertical: "2%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  txtPregunta: {
    color: Colors.white,
    fontSize: 20,
    fontWeight: "bold",
    marginHorizontal: 4,
  },
  Respuesta: {
    backgroundColor: Colors.yellow,
    margin: "2%",
    borderRadius: 6,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: Colors.turquesa,
    borderWidth: 3
  },
  txtRespuesta: {
    fontSize: 20,
    fontWeight: "bold",
    textTransform: "uppercase",
    marginHorizontal: 12,
  },
  hiddenVideo: {
    alignSelf: "center",
    width: 0,
    height: 0,
  },
  video: {
    alignSelf: "center",
    width: 320,
    height: 200,
  },
});

export const css_ItemCrucigrama = StyleSheet.create({
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
  cellError: {
    padding: 2,
    backgroundColor: Colors.redLight,
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
  InputNombre: {
    fontSize: 24,
    textAlign: "center",
    color: Colors.white,
    width: 45,
    fontWeight: "bold",
  },
  cellEmpty: {
    padding: 2,
    width: 45,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  cellTextEmpty: {
    opacity: 1,
    color: Colors.white,
    fontSize: 0,
    textTransform: "uppercase",
    fontWeight: "bold",
    textAlign: "center",
  },
  imgFruta: { width: 45, height: 40, position: "absolute" },
});
