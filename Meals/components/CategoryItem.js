import React from "react";
import { View, Pressable, Text, StyleSheet, Platform } from "react-native";

const CategoryItem = ({ title, color,onPress }) => {
  return (
    <View style={[styles.gridItem,{backgroundColor:color}]}>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        android_ripple={{ color: "#ccc" }}
        onPress={onPress}
      >
        {/* without adding style={styles.button} it will display nothing
            simply because Pressable is the parent and it doesn't take any space
            so first we have to allot it the space then only the chid view will get
            the space */}
        <View style={styles.innerContainer}>
          <Text style={styles.textStyle}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    backgroundColor: 'white', //for the shadow properties to work on ios it is mandatory
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.25,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  textStyle:{
    fontWeight:'bold',
    fontSize:18,
  }
});

export default CategoryItem;
