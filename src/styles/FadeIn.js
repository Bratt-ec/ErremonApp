import React from 'react';
import { Animated, Easing } from "react-native";

const FadeIn = (props) => {
    const fadeAnim = React.useRef(new Animated.Value(0)).current;
  
    React.useEffect(()=>{
      Animated.timing(
        fadeAnim,{ 
          toValue: 1,
          duration: 2000,
          easing: Easing.linear,
          useNativeDriver: true 
        }).start();
    },[fadeAnim]); 
  
    return (  
        <Animated.View                 // Special animatable View
        style={{
          ...props.style,
          opacity: fadeAnim,         // Bind opacity to animated value
        }}
      >
        {props.children}
      </Animated.View>
     );
}
 
export default FadeIn;