import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PokemonState {
  searchTerm: string;
  filterType: string;
}

const initialState: PokemonState = {
  searchTerm: "",
  filterType: "",
};

const pokemonSlice = createSlice({
  name: "pokemons-table",
  initialState,
  reducers: {
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    },
    setFilterType: (state, action: PayloadAction<string>) => {
      state.filterType = action.payload;
    },
  },
});

export const { setSearchTerm, setFilterType } = pokemonSlice.actions;
export default pokemonSlice.reducer;
