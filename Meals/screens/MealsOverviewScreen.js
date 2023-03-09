import React, { useLayoutEffect } from "react";
import { FlatList } from "react-native";
import { View, Text, StyleSheet } from "react-native";
import Meal from "../components/Meal";
import { MEALS } from "../data/dummy";
import { CATEGORIES } from "../data/dummy";
const MealsOverviewScreen = ({ route, navigation }) => {
  const categoryId = route.params.id;

  //useEffect function is executed after the component is rendered
  //therefore to prevent this we use useLayoutEffect
  useLayoutEffect(() => {
    const idx = CATEGORIES.findIndex((category) => categoryId === category.id);
    const title = idx >= 0 ? CATEGORIES[idx].title : "NO";
    navigation.setOptions({
      title: title,
    });
  }, [categoryId, navigation]);

  const data = MEALS.filter((meal) => meal.categoryIds.includes(categoryId));

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => <Meal mealData={itemData.item} onPress={()=>
        navigation.navigate('MealDetails',{
          mealId:itemData.item.id,
        })}/>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default MealsOverviewScreen;
