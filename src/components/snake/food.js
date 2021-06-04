import React, { Component } from "react";
import { Image, StyleSheet, View } from "react-native";
import { Colors } from "../../styles/Colors";
class Food extends Component {
    constructor(props){
        super(props);
    }

    render() {
        const x = this.props.position[0];
        const y = this.props.position[1];
        return (
            // <View style={[styles.finger, { width: this.props.size, height: this.props.size, left: x * this.props.size, top: y * this.props.size }]} />
            <Image source={require('../../img/manzana.png')} style={[styles.finger, { width: this.props.size, height: this.props.size, left: x * this.props.size, top: y * this.props.size }]} />
        );
    }
}

const styles = StyleSheet.create({
    finger: {
        backgroundColor: Colors.white,
        position: "absolute"
    }
});

export { Food };