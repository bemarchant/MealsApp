import { useContext } from "react";
import { FavoritesContext } from "../store/context/favorites-context";
import MealsList from "../components/MealList/MealsList";
import { MEALS } from "../data/dummy-data";

const FavoriteScreen = () => {
  const favoriteMealCtx = useContext(FavoritesContext);
  const favoriteMeals = MEALS.filter((mealItem) =>
    favoriteMealCtx.ids.includes(mealItem.id)
  );

  return <MealsList items={favoriteMeals} />;
};

export default FavoriteScreen;
