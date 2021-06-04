import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Button,
  TouchableOpacity,
  Image
} from 'react-native';

import WheelOfFortune from 'react-native-wheel-of-fortune';
import { AuthContext } from '../navigation/AuthProvider';
import { Colors } from '../styles/Colors';
import { css_Vocabulario } from '../styles/GameStyle';

// const participants = 

class Ruleta extends Component {
    static contextType = AuthContext;
  
  constructor(props) {
    super(props);

    this.state = {
      winnerValue: null,
      winnerIndex: null,
      started: false,
    };
    this.child = null;
  }

  buttonPress = () => {
    this.setState({
      started: true,
    });
    this.child._onPress();
  };
 
  render() { 
    
    const { setItemRuleta,participants } = this.context;

    const wheelOptions = {
      rewards: participants,
      knobSize: 30,
      borderWidth: 5,
      borderColor: '#fff',
      innerRadius: 30,
      duration: 4000,
      backgroundColor: 'transparent',
      textAngle: 'horizontal',
      knobSource: require('../img/knob.png'),
      onRef: ref => (this.child = ref),
    };
    return (
      <View style={styles.container}>
        <WheelOfFortune
          options={wheelOptions}
          getWinner={(value, index) => {
            
            this.setState({winnerValue: value, winnerIndex: index});
          }}
        />
        {!this.state.started && (
          <View style={styles.startButtonView}>
            <TouchableOpacity
              onPress={() => this.buttonPress()}
              style={styles.startButton}>
              <Text style={styles.startButtonText}>¡Gira la ruleta!</Text>
            </TouchableOpacity>
          </View>
        )}
        {this.state.winnerIndex != null && (
          <View style={styles.winnerView}>
            <Text style={styles.winnerText}>
            {setItemRuleta(this.state.winnerValue)}
              Crea una oración con: {participants[this.state.winnerIndex]}
            </Text>
            {/* <TouchableOpacity
              onPress={() => {
                this.setState({winnerIndex: null});
                this.child._tryAgain();
              }}
              style={styles.tryAgainButton}>
              <Text style={styles.tryAgainText}>TRY AGAIN</Text>
            </TouchableOpacity> */}
          </View>
        )}
      </View>
    );
  }


}
export default Ruleta;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#E74C3C'
  },
  startButtonView: {
    position: 'absolute',
    
  },
  startButton: {
    backgroundColor: 'rgba(0,0,0,.5)',
    marginTop: 50,
    padding: 5,
    borderRadius:8,
    alignSelf: 'flex-end'
  },
  startButtonText: {
    fontSize: 50,
    color: '#fff',
    fontWeight: 'bold',
  },
  winnerView: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
    padding: 4,
    borderRadius: 8
  },
  tryAgainButton: {
    padding: 10,
  },
  winnerText: {
    fontSize: 30,
    color: Colors.blue_dark,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  tryAgainButton: {
    padding: 5,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  tryAgainText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
});