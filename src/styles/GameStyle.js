import { StyleSheet } from "react-native";
import { Colors } from "./Colors";

export const css_SopaPalabras = StyleSheet.create({
    Container:{
        flex:1,
        backgroundColor: Colors.blue_dark,
    },
    EligeJuego:{
        backgroundColor: Colors.turquesa,
        width: '60%',
        padding: '4%',
        shadowColor: '#fff',
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,

        elevation: 16,

        borderRadius: 50,
        margin: '4%',
        marginTop: '8%',

    },
    txtElige:{
        fontSize: 22, 
        color: Colors.blue_dark,
        fontWeight: 'bold',
        textShadowRadius:5,
        textShadowColor: '#fff',
        textShadowOffset: { width: 1, height: 2},
        textAlign: 'center'
    },
    imgOso:{
        alignSelf: 'center',
        width: 145,
        height: 170,
        marginLeft: '8%'
    },
    btnOpcion:{
        flexDirection: 'row',
        backgroundColor: Colors.turquesa,
        padding: 4,
        width: '85%',
        borderRadius: 30,
        alignSelf: 'center',
        alignItems: 'center',
        margin: '2%',
    },
    divIcon:{
       backgroundColor: Colors.yellow,
       width: '20%',
       height: 50,
       borderRadius: 30
    },
    iconOpcion: {
        resizeMode: 'contain',
        width: '75%',
        height: 50,
        alignSelf: 'center'
    },
    txtOpcion:{
        fontSize: 24,
        color: Colors.blue_dark,
        fontWeight: 'bold',
        textShadowRadius: 2,
        textShadowColor: Colors.yellow,
        textShadowOffset: { width: 2, height: 1},
        marginHorizontal: '4%',
    },
    txtOpcion2:{
        fontSize: 18, 
        color: Colors.blue_dark,
        fontWeight: 'bold',
        textShadowRadius: 2,
        textShadowColor: Colors.yellow,
        textShadowOffset: { width: 2, height: 1},
        marginHorizontal: '8%',
    }

})

export const css_Crucigrama = StyleSheet.create({
    Container:{
        flex:1,
        backgroundColor: Colors.blue_dark,
    },
})

export const css_JuegoImagenes = StyleSheet.create({
    Container:{
        flex:1,
        backgroundColor: Colors.blue_dark,
    },
    imgRuleta:{
        width: '80%',
        height: 310,
        alignSelf: 'center',
        marginTop: '10%',
    }
})

export const css_Vocabulario =  StyleSheet.create({
    Mensaje:{
        flexDirection: 'row',
        width: '70%',
        alignSelf: 'center',
        backgroundColor: Colors.yellow,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        height: 80,
        paddingLeft: 53,
        marginVertical: '10%',
    },
    imgOso:{
        width:120,
        height: 120
    },
    txtMensaje:{
        width: '62%',
        color: Colors.white,
        fontWeight: 'bold',
        fontSize: 17
    },
    totalCajas:{
        backgroundColor: Colors.red,
        width: 170,
        height: 30,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent:'center',
        flexDirection: 'row',
        borderRadius: 12
    },
    txtCajas:{
        color: Colors.white,
        fontWeight: 'bold',
        fontSize: 18
    },
    imgTotal:{
        width: 50,
        height: 50
    },
    divCajas:{
        width: '42%',
        padding: '8%',
        margin: '4%',
    },
    caja: {
        width:60,
        height:60,
        borderRadius: 8,
        backgroundColor: Colors.turquesa,
        justifyContent: 'center',
        alignItems:'center'
    },
    imgCaja:{
        width: '90%',
        height: '90%',
    },
    containerCajas:{
        flexDirection: "row",
        width: '100%',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
    }


})

export const css_DeOposicion = StyleSheet.create({
    SopaLetrasDiv:{
        width: '100%',
        height: '80%',
    },
    SopaLetrasOff: {
        backgroundColor: Colors.turquesa,
    },
    SopaLetrasOn: {
        backgroundColor: Colors.yellow
    }
})


export const css_DeLectura = StyleSheet.create({
    divTop:{
        display: 'flex',
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'space-between' ,
        marginTop: '4%',
    },
    book:{
        width: 80,
        height: 80,
        marginHorizontal: '4%',
    },
    divContenido:{
        alignItems: 'center',
        margin: '4%',
    },
    divPregunta:{
        backgroundColor: Colors.turquesa,
        padding: 10,
        borderRadius: 6,
        marginVertical: '4%'
    },
    txtPregunta:{
        color: Colors.white,
        fontSize: 26,
        fontWeight: 'bold',
    },
    Respuesta:{
        backgroundColor: Colors.yellow,
        margin: '4%',
        padding: 10,
        borderRadius: 6,
    },
    txtRespuesta:{
        fontSize: 22,
        fontWeight: 'bold'
    }
})