import { MEALS, CATEGORIES } from "../data/dummy-data";
import { useLayoutEffect } from "react";

import { View, Text, FlatList, StyleSheet } from "react-native";
import MealItem from "../components/MealList/MealItem";
import MealsList from "../components/MealList/MealsList";
//Alternative Hook for components not registered as Screen
//import { useRoute } from "@react-navigation/native";

const MealsOverviewScreen = ({ route, navigation }) => {
  //Alternative Hook for components not registered as Screen
  // const route = useRoute();
  // route.params

  const catId = route.params.categoryId;
  const displayMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0; //-1 means nothing was found
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);

  return <MealsList items={displayMeals} />;
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
