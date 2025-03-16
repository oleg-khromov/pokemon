import { combineReducers } from "@reduxjs/toolkit";
import pokemonReducer from "features/pokemons/reducers/pokemonSlice";

const rootReducer = combineReducers({
  pokemon: pokemonReducer,
});

export default rootReducer;
