import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '../styles/Colors';

export const Dialogo = ({texto}) => {
    return ( 
        <View style={css.divDialogo}>
            <Text style={css.txtDialogo}>
                {texto}
            </Text>
        </View>
     );
}

const css =  StyleSheet.create({
    divDialogo: {
        backgroundColor: Colors.turquesa,
        width: '58%',
        padding: '4%',
        // height: 130
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.53,
        shadowRadius: 13.97,
        elevation: 15,
        alignSelf: 'center',
        margin: '4%',
        borderRadius: 20
    },
    txtDialogo:{
        color: Colors.blue_semi_dark,
        fontSize: 18,
        textTransform: 'uppercase',
        fontWeight: 'bold',
    },
});