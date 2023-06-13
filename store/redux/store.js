import { applyMiddleware, configureStore,createStore } from "@reduxjs/toolkit";
import favoritesReducer from "./Favorites";
import createSagaMiddleware from "@redux-saga/core";
import { mealsSaga } from "../saga/mealsSaga";

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  favoritesReducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(mealsSaga);

// export const store = configureStore(
//   {
//     reducer: {
//       favoritesMeals: favoritesReducer,
//     },
//   },
