import { configureStore } from "@reduxjs/toolkit";
import { favoriteSlice, pokeSlice } from "./slice";

export const store = configureStore({
  reducer: {
    pokemon: pokeSlice.reducer,
    favorite: favoriteSlice.reducer,
  },
});
