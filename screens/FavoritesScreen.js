import React, { useContext } from "react";
import { Text } from "react-native";
import { FavoritesContext } from "../context/Favorites-context";
import { MEALS } from "../data/dummy-data";
import FavoriteItem from "../components/FavoriteItem";

const FavoritesScreen = () => {
  const favoritesCtx = useContext(FavoritesContext);

  return (
    <>
      {favoritesCtx.ids.map((id) => (
        <FavoriteItem key={id} meal={MEALS.find(meal=>meal.id===id)} />
      ))}
    </>
  );
};

export default FavoritesScreen;
