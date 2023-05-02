import {View, Text, Animated} from 'react-native';
import React, {useEffect, useRef} from 'react';

const Interpolation2 = () => {
  const transUp = useRef(new Animated.Value(0)).current;
  const transDown = useRef(new Animated.Value(0)).current;
  const transLeft = useRef(new Animated.Value(0)).current;
  const transRight = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.loop(
        Animated.parallel([
            Animated.timing(transUp, {
              toValue: -250,
              duration: 1500,
              useNativeDriver: true,
            }),
            Animated.timing(transDown, {
              toValue: 300,
              duration: 1500,
              useNativeDriver: true,
            }),
            Animated.timing(transLeft, {
              toValue: -130,
              duration: 1500,
              useNativeDriver: true,
            }),
            Animated.timing(transRight, {
              toValue: 140,
              duration: 1500,
              useNativeDriver: true,
            }),
          ])
    ).start()
    
  }, []);
  return (
    <View
      style={{
        flex: 1,
      }}>
      <Animated.View
        style={{
          backgroundColor: 'red',
          width: 100,
          height: 100,
          left: 150,
          top: 270,
          opacity: transUp.interpolate({
            inputRange: [-250, -125, 0],
            outputRange: [0, 1, 0.5],
          }),
          transform: [
            {translateY: transUp},
            {
              rotate: transUp.interpolate({
                inputRange: [-250, 0],
                outputRange: ['360deg', '0deg'],
              }),
            },
            {
              scale: transUp.interpolate({
                inputRange: [-250, -125, 0],
                outputRange: [0.5, 1, 0.5],
              }),
            },
          ],
        }}
      />
      <Animated.View
        style={{
          backgroundColor: 'blue',
          position: 'absolute',
          width: 100,
          height: 100,
          left: 150,
          top: 270,
          opacity: transRight.interpolate({
            inputRange: [0, 70, 140],
            outputRange: [0.5, 1, 0],
          }),
          transform: [
            {translateX: transRight},
            {
              rotate: transRight.interpolate({
                inputRange: [0, 140],
                outputRange: ['0deg', '360deg'],
              }),
            },
            {
              scale: transRight.interpolate({
                inputRange: [0, 70, 140],
                outputRange: [0.5, 1, 0.5],
              }),
            },
          ],
        }}
      />
      <Animated.View
        style={{
          backgroundColor: 'green',
          position: 'absolute',
          width: 100,
          height: 100,
          left: 150,
          top: 270,
          opacity: transDown.interpolate({
            inputRange: [0, 150, 300],
            outputRange: [0.5, 1, 0],
          }),
          transform: [
            {translateY: transDown},
            {
              rotate: transDown.interpolate({
                inputRange: [0, 300],
                outputRange: ['0deg', '360deg'],
              }),
            },
            {
              scale: transDown.interpolate({
                inputRange: [0, 150, 300],
                outputRange: [0.5, 1, 0.5],
              }),
            },
          ],
        }}
      />
      <Animated.View
        style={{
          backgroundColor: 'yellow',
          position: 'absolute',
          width: 100,
          height: 100,
          left: 150,
          top: 270,
          opacity: transLeft.interpolate({
            inputRange: [-130, -65, 0],
            outputRange: [0, 1, 0.5],
          }),
          transform: [
            {translateX: transLeft},
            {
              rotate: transLeft.interpolate({
                inputRange: [-250, 0],
                outputRange: ['360deg', '0deg'],
              }),
            },
            {
              scale: transLeft.interpolate({
                inputRange: [-130, -65, 0],
                outputRange: [0.5, 1, 0.5],
              }),
            },
          ],
        }}
      />
    </View>
  );
};

export default Interpolation2;
