import { StyleSheet } from "react-native";
import { Colors } from "./Colors";


export const css_Inicio = StyleSheet.create({
    containerInicio : {
        backgroundColor: Colors.redLight,
        flex:1,
        justifyContent: 'center',
        padding: '2%'
    },
    imgFondoHome:{
        width: '94%',
        height: 450,
        position: 'absolute',
        borderRadius: 20,
    },
    imgLogoHome:{
        resizeMode: 'contain',
        width: '80%',
    },
    AnimateLogo:{
        width: '100%'  
    },
    imgBotonIniciar:{
        width: 100,
        height: 100
    },
    ContenidoInicio:{
        // flex:3,
        // marginVertical: '10%',
        height: '75%',
        marginTop: '12%',
        // marginBottom: '10%',
        // margin: '2%'
    },
    ViewPlayButton:{
        flex: 1,
        alignItems: 'center'
    },
    divLogo:{
        alignItems: 'center',
        marginTop: '6%'
    },
    cuadrado1:{
        width: 120,
        height: 120,
        borderRadius: 20,
        backgroundColor: Colors.red,
        opacity: .7,
        position: 'absolute',
        top: '85%'
    },
    cuadrado2:{
        width: 120,
        height: 120,
        borderRadius: 20,
        backgroundColor: Colors.red,
        opacity: .7,
        position: 'absolute',
        top: '15%',
        left: '90%',
    },
    cuadrado3:{
        width: 120,
        height: 120,
        borderRadius: 20,
        backgroundColor: Colors.red,
        opacity: .7,
        position: 'absolute',
        top: '95%',
        left: '90%',
    },    
    cuadrado4:{
        width: 120,
        height: 120,
        borderRadius: 20,
        backgroundColor: Colors.red,
        opacity: .7,
        position: 'absolute',
        top: '62%',
        left: '50%',
    },
    circulo:{
        width: 120,
        height: 120,
        borderRadius: 120,
        backgroundColor: Colors.red,
        opacity: .7,
        position: 'absolute',
        top: '22%',
        left: '-10%',
    }
})


export const css_Registro = StyleSheet.create({
    Container:{
        flex: 1,
        backgroundColor: Colors.redLight,
        alignItems: 'center',
        padding: '1%'
    },
    RegistroDivFondo:{
        width: '95%',
        height: 500,
        marginTop: '12%',
        backgroundColor: Colors.blue_dark,
        borderRadius: 30,
        alignItems: 'center',
        opacity: .3, 
        position: 'absolute',
    },
    RegistroDiv:{
        width: '95%',
        height: 500,
        marginTop: '12%',
        marginBottom: '3%',
        borderRadius: 30,
        alignItems: 'center',
        // flex: 4
    },
    imgOso:{
        resizeMode: 'contain',
        width: '55%',
    },
    imgInput:{
        resizeMode: 'contain',
        width: '15%'
    },
    InputNombre:{
        fontSize: 22,
        marginHorizontal: '2%',
        color: Colors.white,
        borderBottomWidth: 1,
        borderBottomColor: Colors.white,
        width: 200
    },
    textoRegistro:{
        color: Colors.yellow,
        fontSize: 26,
        fontWeight: 'bold',
    },
    DivInput:{
        flexDirection: 'row',
    },
    DivPersonajes:{
        flexDirection: "row",
       
    },
    GirlImg:{
        width: '40%',
        alignItems: 'center'
    },
    KidImg:{
        width: '40%',
        alignItems: 'center'
    },
    PersonajeImg:{
        resizeMode: 'contain',
        width: '70%',
        marginHorizontal: '5%',
        opacity: .2,
    },
    PersonajeSelect:{
        resizeMode: 'contain',
        width: '70%',
        marginHorizontal: '5%',

    }
})

export const css_Menu = StyleSheet.create({
    ContainerMenu:{
        flex: 1,
        backgroundColor: Colors.blue_dark,
        alignItems: 'center',
        padding: '2%',
    },
    textoMenu:{
        color: Colors.white,
        fontSize: 20,
        fontWeight: 'bold',
        marginHorizontal: '8%',
        margin: '5%',
        textAlign: "center",
    },
    textoMenu2:{
        color: Colors.white,
        fontSize: 20,
        fontWeight: 'bold',
        marginHorizontal: '5%',
        margin: '5%',
        textAlign: "center",
        width: '50%'
    },
    txtHeader:{
        color: Colors.white,
        fontSize: 20,
        alignSelf: 'flex-start',
        marginTop: 28,
        marginLeft: 18,
        fontWeight: 'bold',
    },
    MenuImg:{
        resizeMode: 'contain',
        width: '100%',
    },
    MenuImg2:{
        resizeMode: 'contain',
        width: '40%',
        alignSelf: 'center',
        top: -12
    },
    ImgOso:{
        resizeMode: 'contain',
        width: '40%',
    },
    ImgOso2:{
        resizeMode: 'contain',
        width: '70%',
        alignSelf: 'center',
        top: -7
    },
    DivMenuTop:{
        flexDirection: "row",
        marginTop: '1%',
        padding: '2%',
    },
    DivMenuCenter:{
        flexDirection: "row",
        padding: '2%',
    },
    DivSopaLetras:{
        backgroundColor: Colors.redLight,
        width: '45%',
        height: 160,
        margin: '2%',
        borderRadius: 15,
        overflow: 'hidden',
    },
    DivSopaPalabras:{
        backgroundColor: Colors.turquesa,
        width: '45%',
        height: 160,
        margin: '2%',
        borderRadius: 15,
    },
    DivCrucigramas:{
        backgroundColor: Colors.turquesa,
        width: '45%',
        height: 160,
        margin: '2%',
        borderRadius: 15,
        overflow: 'hidden'
    },
    DivVocabulario:{
        backgroundColor: Colors.yellow,
        width: '45%',
        height: 160,
        margin: '2%',
        borderRadius: 15,
        // alignItems: 'center',
        overflow: 'hidden'
    },
    DivJuegoImg:{
        backgroundColor: Colors.redLight,
        width: '90%',
        height: 160,
        margin: '2%',
        borderRadius: 15,
        flexDirection: 'row',
        overflow: 'hidden',
    },
    DivTest:{
        backgroundColor: Colors.yellow,
        width: '90%',
        height: 160,
        margin: '2%',
        borderRadius: 15,
        flexDirection: 'row',
        overflow: 'hidden',
    },
})