import { createSlice } from "@reduxjs/toolkit";
import { fetchPokemonById } from "./thunk";

export const pokeSlice = createSlice({
  name: "pokemon",
  initialState: {
    data: [],
    loading: true,
  },

  // 동기
  reducers: {},

  // 비동기
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemonById.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPokemonById.rejected, (state) => {
        state.loading = false;
      })
      .addCase(fetchPokemonById.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      });
  },
});

export const favoriteSlice = createSlice({
  name: "favorite",
  initialState: [],
  reducers: {
    addToFavorite(state, action) {
      state.push(action.payload.pokemonId);
    },
    removeFromFavorite(state, action) {
      const index = state.indexOf(action.payload.pokemonId);
      if (index !== -1) state.splice(index, 1);
    },
  },
});
