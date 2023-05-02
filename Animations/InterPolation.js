import {View, Text, Animated} from 'react-native';
import React, {useEffect, useRef} from 'react';

const InterPolation = () => {
  const translation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(translation, {
      toValue: 300,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
      }}>
      <Animated.View
        style={[
          {
            width: 100,
            height: 100,
            backgroundColor: 'red',
            opacity: translation.interpolate({
              inputRange: [0, 150, 300],
              outputRange: [0, 1, 0],
            }),
            transform: [
              {translateX: translation},
              {
                rotate: translation.interpolate({
                  inputRange: [0, 300],
                  outputRange: ['0deg', '360deg'],
                }),
              },
              {
                scale: translation.interpolate({
                  inputRange: [0,150,300],
                  outputRange: [0.5,1,0.5],
                }),
              },
            ],
          },
        ]}
      />
    </View>
  );
};

export default InterPolation;
