import { FlatList } from "react-native";
import CategoryGridTiles from "../components/CategoryGridTile";
import { CATEGORIES } from "../data/dummy-data";

const CategoriesScreen = ({ navigation }) => {
  const renderCaterogyItem = (itemData) => {
    const pressHandler = () => {
      navigation.navigate("MealsOverviewScreen", {
        categoryId: itemData.item.id,
      });
    };

    return (
      <CategoryGridTiles
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  };

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCaterogyItem}
      numColumns={2}
    />
  );
};

export default CategoriesScreen;
