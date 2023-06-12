import { useNavigation } from "@react-navigation/native";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import MealItemDetails from "./MealItemDetails";

const FavoriteItem = ({ meal }) => {
  const navigator = useNavigation();
  const handleRedirect = () => {
    navigator.navigate("SingleMeal", { mealId: meal.id });
  };
  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
        onPress={handleRedirect}
      >
        <View style={{ borderRadius: 8, overflow: "hidden" }}>
          <View>
            <Image style={styles.image} source={{ uri: meal.imageUrl }} />
            <Text style={styles.title}>{meal.title}</Text>
          </View>
          <MealItemDetails
            affordability={meal.affordability}
            complexity={meal.complexity}
            duration={meal.duration}
          />
        </View>
      </Pressable>
    </View>
  );
};

export default FavoriteItem;



const styles = StyleSheet.create({
    mealItem: {
      margin: 16,
      borderRadius: 8,
      backgroundColor: "white",
      elevation: 4,
      backgroundColor: "white",
      shadowColor: "black",
      shadowOpacity: 0.25,
      shadowRadius: 8,
      shadowOffset: { width: 0, height: 2 },
      overflow: Platform.OS === "android" ? "hidden" : "visible",
    },
    image: {
      width: "100%",
      height: 200,
    },
    title: {
      fontSize: 18,
      fontWeight: "bold",
      textAlign: "center",
      margin: 8,
    },
  
    buttonPressed: {
      opacity: 0.25,
    },
  });
  