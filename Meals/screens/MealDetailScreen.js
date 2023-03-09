import React, { useLayoutEffect } from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import IconButton from "../components/IconButton";
import { MEALS } from "../data/dummy";

const MealDetailScreen = ({ route, navigation }) => {
  const mealId = route.params.mealId;
  const mealData = MEALS.find((meal) => meal.id === mealId);
  useLayoutEffect(() => {
    navigation.setOptions({
      title: mealData.title,
      headerRight: () => {
        return (
          <IconButton
            onPress={() => console.log("PRESSED")}
            icon="heart"
            color="white"
            size={24}
          />
        );
      },
    });
  }, [mealId, navigation]);

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: mealData.imageUrl }} />
      <Text style={styles.title}>INGREDIENTS</Text>
      <View style={styles.ingredients}>
        {mealData.ingredients.map((ingredient) => (
          <Text style={styles.text} key={ingredient}>
            {ingredient}
          </Text>
        ))}
      </View>
      <Text style={styles.title}>STEPS</Text>
      <View style={styles.steps}>
        {mealData.steps.map((step) => (
          <Text style={styles.text} key={step}>
            {step}
          </Text>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 8,
  },
  ingredients: {
    padding: 8,
    paddingLeft: 0,
  },
  steps: {
    padding: 8,
    paddingLeft: 0,
  },
  text: {
    color: "white",
  },
  title: {
    marginTop: 16,
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    borderBottomWidth: 1,
    padding: 4,
    borderBottomColor: "white",
    textAlign: "center",
  },
});

export default MealDetailScreen;
