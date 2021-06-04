import React, { Component } from "react";
import { AppRegistry, StyleSheet, StatusBar, SafeAreaView, View, Alert, Button, TouchableOpacity, Text } from "react-native";
import { GameEngine, dispatch } from "react-native-game-engine";
import { Head } from "./head";
import { Food } from "./food";
import { Tail } from "./tail";
import { GameLoop } from "./system";
import Constants from './Constants';
import { AntDesign } from '@expo/vector-icons';
import { Colors } from "../../styles/Colors";

export default class SnakeApp extends Component {
    constructor(props) {
        super(props);
        this.boardSize = Constants.GRID_SIZE * Constants.CELL_SIZE;
        this.engine = null;
        this.state = {
            running: true
        }
    }

    randomBetween = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    

    onEvent = (e) => {
        if (e.type === "game-over"){
            this.setState({
                running: false
            });
            Alert.alert("¡¡FALLASTE, INTENTA OTRA VEZ!!");
        }
        
    }

    reset = () => {
        this.engine.swap({
            head: { position: [0,  0], xspeed: 1, yspeed: 0, nextMove: 10, updateFrequency: 10, size: 20, renderer: <Head />},
            food: { position: [this.randomBetween(0, Constants.GRID_SIZE - 1), this.randomBetween(0, Constants.GRID_SIZE - 1)], size: 20, renderer: <Food />},
            tail: { size: 20, elements: [], renderer: <Tail /> }
        });

        this.setState({
            running: true
        });
    }
    render() {
        return (
            <View style={styles.container}>
                <GameEngine
                    ref={(ref) => { this.engine = ref; }}
                    style={[{ width: this.boardSize, height: this.boardSize, backgroundColor: '#ffffff', flex: null }]}
                    systems={[ GameLoop ]}
                    entities={{
                        head: { position: [0,  0], xspeed: 0.5, yspeed: 0, nextMove: 10, updateFrequency: 10, size: 20, renderer: <Head />},
                        food: { position: [this.randomBetween(0, Constants.GRID_SIZE - 1), this.randomBetween(0, Constants.GRID_SIZE - 1)], size: 20, renderer: <Food />},
                        tail: { size: 20, elements: [], renderer: <Tail /> }
                    }}
                    running={this.state.running}
                    onEvent={this.onEvent}>
                                        

                </GameEngine>

                <TouchableOpacity style={styles.empezar} onPress={this.reset} >
                    <Text style={styles.txtEmpezar}>Empezar de  nuevo</Text>
                </TouchableOpacity>

                <View style={styles.controls}>
                    <View style={styles.controlRow}>
                        <TouchableOpacity onPress={() => { this.engine.dispatch({ type: "move-up" })} }>
                            {/* <View style={styles.control} /> */}
                            <AntDesign name="upcircle" size={70} color={Colors.white}/>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.controlRow}>
                        <TouchableOpacity onPress={() => { this.engine.dispatch({ type: "move-left" })} }>
                            <AntDesign name="leftcircle" size={70} color={Colors.white} />
                        </TouchableOpacity>
                        <View style={[styles.control, { backgroundColor: null}]} />
                        <TouchableOpacity onPress={() => { this.engine.dispatch({ type: "move-right" })}}>
                            <AntDesign name="rightcircle" size={70} color={Colors.white} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.controlRow}>
                        <TouchableOpacity onPress={() => { this.engine.dispatch({ type: "move-down" })} }>
                            <AntDesign name="downcircle" size={70} color={Colors.white} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
        alignItems: 'center',
        justifyContent: 'center'
    },
    controls: {
        width: 300,
        height: 250,
        flexDirection: 'column',
    },
    controlRow: {
        height: 100,
        width: 300,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    control: {
        width: 100,
        height: 100,
        backgroundColor: 'blue'
    },
    empezar:{
        margin: 10,
        alignSelf: 'center',
        backgroundColor: Colors.redLight,
        padding: 10,
        borderRadius: 10,

    },
    txtEmpezar:{
        color: Colors.white,
        fontWeight: "bold",
        fontSize: 20,
    }
});