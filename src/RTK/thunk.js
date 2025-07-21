import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPokemonById = createAsyncThunk("pokemon/fetchPokemonById", async (lastId) => {
  const numArr = Array.from({ length: lastId }, (_, i) => i + 1);

  const fetchPoke = async (index) => {
    const apiLink = `https://pokeapi.co/api/v2/pokemon-species/${index}/`;
    const response = await fetch(apiLink);
    const data = await response.json();

    const pokeData = {
      id: index,
      name: data.names.find((el) => el.language.name === "ko").name,
      description: data.flavor_text_entries.find(
        (el) => el.language.name === "ko"
      ).flavor_text,
      front_form: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png`,
      back_form: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${index}.png`,
    };

    return pokeData;
  };

    return await Promise.all(numArr.map((el) => fetchPoke(el)));
    
});
