import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { AuthContext } from "../../navigation/AuthProvider";
import { Colors } from "../../styles/Colors";
import Constants from './Constants';

class Tail extends Component {
    static contextType = AuthContext;

    constructor(props){
        super(props);
    }

    render() {
        const { onVocabulario, setOnVocabulario } = this.context;

        let tailSize = this.props.elements.length;
        if(tailSize == 7){
         setOnVocabulario(true);
        }
        let tailList = this.props.elements.map((el, idx) => {
            return <View key={idx} style={{ width: this.props.size, height: this.props.size, position: 'absolute', left: el[0] * this.props.size, top: el[1] * this.props.size, backgroundColor: Colors.turquesa }} />
        });
        return (
            <View style={{ width: Constants.GRID_SIZE * this.props.size, height: Constants.GRID_SIZE * this.props.size }}>
                {tailList}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    finger: {
        backgroundColor: '#888888',
        position: "absolute"
    }
});

export { Tail };