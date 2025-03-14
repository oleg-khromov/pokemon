import { usePokemons } from "./usePokemons";
import { usePokemonTypes } from "./usePokemonTypes";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "store";
import { setSearchTerm, setFilterType } from "../reducers/pokemonSlice";

export const usePokemonData = (limit: number, offset: number) => {
  const dispatch = useDispatch();
  const { searchTerm, filterType } = useSelector(
    (state: RootState) => state.pokemon
  );
  const { data: pokemonList, isLoading, error } = usePokemons(limit, offset);
  const { data: types, isLoading: isTypesLoading } = usePokemonTypes();

  const filteredPokemon = pokemonList?.filter(
    (pokemon) =>
      pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filterType ? pokemon.types.includes(filterType) : true)
  );

  return {
    searchTerm,
    filterType,
    setSearchTerm: (term: string) => dispatch(setSearchTerm(term)),
    setFilterType: (type: string) => dispatch(setFilterType(type)),
    pokemonList,
    filteredPokemon,
    isLoading,
    isTypesLoading,
    error,
    types,
  };
};
