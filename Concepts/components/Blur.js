import { View, Image, Text, StyleSheet } from "react-native";
import { BlurView } from "@react-native-community/blur";

const Blur=()=> {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/hs.jpeg')}
        style={styles.absolute}
        resizeMode="stretch"
      />
      {/* in terms of positioning and zIndex-ing everything before the BlurView will be blurred */}
      <Text style={[styles.absolute,{fontSize:35}]}>Hi, I am some blurred text</Text>
      <BlurView
        style={styles.absolute}
        blurType="light"
        blurAmount={10}
        reducedTransparencyFallbackColor="white"
      />
      <Text style={{fontSize:35}}>I'm the non blurred text because I got rendered on top of the BlurView</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center"
  },
  absolute: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width:300,
    height:600,
  }
});
export default Blur