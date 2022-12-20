import { MEALS, CATEGORIES } from "../data/dummy-data";
import { useLayoutEffect } from "react";

import { View, Text, FlatList, StyleSheet } from "react-native";
import MealItem from "../components/MealItem";

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

  const renderMealItem = (itemData) => {
    const mealItemProps = {
      id: itemData.item.id,
      title: itemData.item.title,
      imageUrl: itemData.item.imageUrl,
      affordability: itemData.item.affordability,
      complexity: itemData.item.complexity,
      duration: itemData.item.duration,
    };
    return <MealItem {...mealItemProps} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={displayMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
