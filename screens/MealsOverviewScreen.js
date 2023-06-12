import { useLayoutEffect } from "react";
import MealItem from "../components/MealItem";
import { CATEGORIES, MEALS } from "../data/dummy-data";

import { View, FlatList, StyleSheet, Text } from "react-native";

const MealsOverviewScreen = ({ route, navigation }) => {
  const catId = route.params.categoryId;
  const displayMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);

  const renderMealData = (itemData) => {
    return (
      <MealItem
        itemId={itemData.item.id}
        title={itemData.item.title}
        imageUrl={itemData.item.imageUrl}
        affordability={itemData.item.affordability}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
      />
    );
  };

  return (
    <View styles={styles.container}>
      <FlatList
        data={displayMeals}
        keyExtractor={(itemData) => itemData.id}
        renderItem={renderMealData}
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
