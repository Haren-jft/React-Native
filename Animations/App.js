import {View, Text, Animated, Pressable, PanResponder} from 'react-native';
import React, {useState} from 'react';

const App = () => {
  const value = useState(new Animated.Value(20))[0];
  const valueY = useState(new Animated.Value(0))[0];
//8851343658
  const handlePress = () => {
    Animated.sequence([
      Animated.timing(value, {
        toValue: 60,
        duration: 2000,
        useNativeDriver: false,
      }),
      Animated.timing(valueY, {
        toValue: -300,
        duration: 2000,
        useNativeDriver: false,
      }),
    ]).start();
  };

  const pan = useState(new Animated.ValueXY())[0];

  //Animated.ValueXY has a fn associated getLayout()
  //pan.getLayout()=>{left:AniamtedValue,top:AnimatedValue}

  const panResponder = useState(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true, //React asks that the user has touched the screen,do you want to handel it ?
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        //this function is fired as soon as the value is true for the above fn
        //this is the pt where the user has not yet started moving his fingers
        //you can initialize the values
        //it is sort of init call
        console.log('PAN RESPONDER GRANT ACCESS');
        pan.setOffset({
          x: pan.x._value,
          y: pan.y._value,
        });
      },
      onPanResponderMove:(ev,gesture)=>{
        console.log({ev,gesture})
        pan.x.setValue(gesture.dx)
        pan.y.setValue(gesture.dy)
      },
      onPanResponderRelease: () => {
        console.log("BEFORE",pan.x._value)
        //when the user releases the touch
        pan.flattenOffset()
        console.log("AFTER",pan)
      },
    }),
  )[0];


  return (
    <View
      style={{
        flex: 1,
      }}>
      {/* <Animated.Text style={{
        fontSize:value,
        color:'red',
        transform:[{translateY:valueY}]
      }}>Haren</Animated.Text>
    <Pressable onPress={handlePress}><Text>Click</Text></Pressable> */}
      <Animated.View
        style={[
          {
            width: 100,
            height: 100,
            transform:[{translateX:pan.x},{translateY:pan.y}],
            borderRadius: 100 / 2,
            backgroundColor: 'red',
          },
        ]}
        {...panResponder.panHandlers}
      />
    </View>
  );
};

export default App;
