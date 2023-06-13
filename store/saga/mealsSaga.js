import { call, put, takeEvery } from "redux-saga/effects";
import { addFavorite } from "../redux/Favorites";

function* workAddFavorites() {
    console.log('saga middleware activated the adding function');
    
}
function* workRemoveFavorites() {
    console.log('saga middleware activated the removing function');
}
function* workGetIds() {
  console.log('im in saga fetching data');
}

export function* mealsSaga() {
  yield takeEvery("favorites/getIds", workGetIds);
  yield takeEvery("favorites/addFavorite", workAddFavorites);
  yield takeEvery("favorites/removeFavorite", workRemoveFavorites);
}
