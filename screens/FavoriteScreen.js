import { useContext } from "react";
import { StyleSheet, View, Text } from "react-native";
import { FavoritesContext } from "../store/context/favorites-context";
import MealsList from "../components/MealList/MealsList";
import { MEALS } from "../data/dummy-data";

const FavoriteScreen = () => {
  const favoriteMealCtx = useContext(FavoritesContext);
  const favoriteMeals = MEALS.filter((mealItem) =>
    favoriteMealCtx.ids.includes(mealItem.id)
  );

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>No favorite meals yet ...</Text>
      </View>
    );
  }
  return <MealsList items={favoriteMeals} />;
};

export default FavoriteScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    margin: 20,
    justifyContent: "center",
    aligntItems: "center",
  },

  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
