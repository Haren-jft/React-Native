import React from "react";
import { FlatList, View } from "react-native";
import CategoryItem from "../components/CategoryItem";
import { CATEGORIES } from "../data/dummy";

const CategoryScreen = ({ navigation }) => {
  return (
    <View>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => (
          <CategoryItem
            title={itemData.item.title}
            color={itemData.item.color}
            onPress={() => navigation.navigate("MealsOverview", {
                id:itemData.item.id
            })}
          />
        )}
        numColumns={2}
      />
    </View>
  );
};

export default CategoryScreen;
