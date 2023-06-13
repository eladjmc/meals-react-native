import React, { useContext} from "react";
import { Text } from "react-native";
import { FavoritesContext } from "../context/Favorites-context";
import { MEALS } from "../data/dummy-data";
import FavoriteItem from "../components/FavoriteItem";
import { useSelector } from "react-redux";

const FavoritesScreen = () => {
  const favoritesMealIds = useSelector((state) => state.favoritesMeals.ids);

  return (
    <>
      {favoritesMealIds.map((id) => (
        <FavoriteItem key={id} meal={MEALS.find(meal=>meal.id===id)} />
      ))}
    </>
  );
};

export default FavoritesScreen;
