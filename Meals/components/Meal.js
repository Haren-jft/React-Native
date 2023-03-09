import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  Platform,
} from "react-native";

const Meal = ({ mealData,onPress }) => {
  return (
    <View style={styles.mealItem}>
      <Pressable
        style={({ pressed }) => [pressed ? styles.buttonPressed : null]}
        android_ripple={{ color: "#ccc" }}
        //on android we have both the opacity and color effect
        //on ios we have only the opacity effect
        onPress={onPress}
      >
        <View>
          <Image style={styles.image} source={{ uri: mealData.imageUrl }} />
          {/*adding style in images loaded from the web is a mandatory step 
          otherwise react native will not display the image*/}
          <Text style={styles.title}>{mealData.title}</Text>
        </View>
        <View style={styles.details}>
          <Text style={styles.detailItem}>{mealData.duration}m</Text>
          <Text style={styles.detailItem}>
            {mealData.complexity.toUpperCase()}
          </Text>
          <Text style={styles.detailItem}>
            {mealData.affordability.toUpperCase()}
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    backgroundColor: "white",
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  image: {
    flex: 1,
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
    margin: 8,
  },
  details: {
    flexDirection: "row",
    justifyContent: "center",
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
  buttonPressed: {
    opacity: 0.25,
  },
});

export default Meal;
