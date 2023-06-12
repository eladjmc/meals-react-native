import { Pressable } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";
import { CATEGORIES } from "../data/dummy-data";
import { View, Text, FlatList } from "react-native";
import { StyleSheet } from "react-native";

const CategoriesScreen = ({ navigation }) => {
  const renderCategoryItem = (itemData) => {
    const pressHandler = () => {
      navigation.navigate("MealsOverview", { categoryId: itemData.item.id });
    };
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  };

  const handleRedirectFavorites = () => {
    navigation.navigate("Favorites");
  }

  return (
    <>
      <View
        style={{
          margin: 16,
          width:200,
          alignSelf:'center',
          borderRadius: 6,
          elevation: 4,
          shadowColor: "black",
          shadowOpacity: 0.25,
          shadowRadius: 8,
          shadowOffset: { width: 0, height: 2 },
          overflow: Platform.OS === "android" ? "hidden" : "visible",
        }}
      >
        <Pressable
          android_ripple={{ color: "#ccc" }}
          style={{
            ...({ pressed }) => (pressed ? styles.buttonPressed : null),
            ...styles.topContainer,
          }}
          onPress={handleRedirectFavorites}
        >
          <View style={{ borderRadius: 8, overflow: "hidden" }}>
            <Text style={styles.topText}>Go to favorites</Text>
          </View>
        </Pressable>
      </View>
      <FlatList
        style={{}}
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={renderCategoryItem}
        numColumns={2}
      />
    </>
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  topContainer: {
    padding: 20,
    backgroundColor: "#848fa7",
    width: 200,
    alignSelf: "center",
  },
  topText: {
    textAlign: "center",
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  buttonPressed: {
    opacity: 0.25,
  },
});
