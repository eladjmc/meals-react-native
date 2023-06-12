import React, { useLayoutEffect } from "react";
import { ScrollView, Text, View } from "react-native";
import { MEALS } from "../data/dummy-data";
import { Image } from "react-native";
import { StyleSheet } from "react-native";
import MealItemDetails from "../components/MealItemDetails";
import IconButton from "../components/IconButton";

const MealScreen = ({ route, navigation }) => {
  const mealId = route.params.mealId;
  const meal = MEALS.find((meal) => meal.id === mealId);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: meal.title,
      headerRight: () => {
        return <IconButton color="white" icon="star" handlePress={handlePressStar} />;
      },
    });
  }, [meal, handlePressStar]);
  const handlePressStar = () => {
    console.log('button was pressed!');
  };

  return (
    <ScrollView style={{ marginBottom: 32 }}>
      <Image style={styles.image} source={{ uri: meal.imageUrl }} />
      <Text style={styles.title}>{meal.title}</Text>
      <MealItemDetails
        complexity={meal.complexity}
        affordability={meal.affordability}
        duration={meal.duration}
        textStyle={styles.detailsText}
      />
      <View style={styles.listItemsCentering}>
        <View style={styles.listsContainer}>
          <View style={styles.subtitleContainer}>
            <Text style={styles.subtitle}>Ingredient</Text>
          </View>
          {meal.ingredients.map((ingredient) => (
            <View style={styles.listItem} key={ingredient}>
              <Text style={styles.listItemText}>{ingredient}</Text>
            </View>
          ))}
          <View style={styles.subtitleContainer}>
            <Text style={styles.subtitle}>steps</Text>
          </View>
          {meal.steps.map((step) => (
            <View style={styles.listItem} key={step}>
              <Text>{step}</Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default MealScreen;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailsText: {
    color: "white",
  },
  subtitle: {
    fontSize: 18,
    color: "#e2b497",
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitleContainer: {
    padding: 6,
    marginHorizontal: 12,
    marginVertical: 4,
    borderBottomColor: "#e2b497",
    borderBottomWidth: 2,
  },
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginHorizontal: 12,
    marginVertical: 4,
    backgroundColor: "#e2b497",
  },
  listItemText: {
    color: "#351401",
    textAlign: "center",
  },
  listsContainer: {
    width: "80%",
  },
  listItemsCentering: {
    width: "100%",
    alignItems: "center",
  },
});
