import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PokemonState {
  limit: number;
  offset: number;
  searchTerm: string;
  filterType: string;
}

const initialState: PokemonState = {
  limit: 10,
  offset: 0,
  searchTerm: "",
  filterType: "",
};

const pokemonSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    setSearchTerm: (state, action: PayloadAction<string>) => {
      if (state.searchTerm !== action.payload) {
        state.searchTerm = action.payload;
        state.offset = 0;
      }
    },
    setFilterType: (state, action: PayloadAction<string>) => {
      if (state.filterType !== action.payload) {
        state.filterType = action.payload;
        state.offset = 0;
      }
    },
    setPagination: (state, action: PayloadAction<number>) => {
      if (state.offset !== action.payload) {
        state.offset = action.payload;
      }
    },
  },
});

export const { setSearchTerm, setFilterType, setPagination } =
  pokemonSlice.actions;
export default pokemonSlice.reducer;
