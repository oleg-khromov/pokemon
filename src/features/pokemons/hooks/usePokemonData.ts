import { useSelector, useDispatch } from "react-redux";
import { RootState } from "store";
import { usePokemons, usePokemonDetails, usePokemonTypes } from ".";
import {
  setSearchTerm,
  setFilterType,
  setPagination,
} from "../reducers/pokemonSlice";

export const usePokemonData = () => {
  const dispatch = useDispatch();
  const { limit, offset, searchTerm, filterType } = useSelector(
    (state: RootState) => {
      return state.pokemon;
    }
  );
  const { data: types, isLoading: isTypesLoading } = usePokemonTypes();

  const { data: pokemons, isLoading, error } = usePokemons(filterType);

  const filteredPokemon = pokemons?.count
    ? pokemons?.data.filter((pokemon: any) =>
        pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  const offsetCurrent = filteredPokemon.length > limit ? offset : 0;

  const paginatedPokemons = filteredPokemon.slice(
    offsetCurrent,
    offsetCurrent + limit
  );

  const {
    pokemonDetails,
    isLoading: isLoadingPokemonDetails,
    isError: isErrorPokemonDetails,
  } = usePokemonDetails(paginatedPokemons);

  const mapedPokemonDetails =
    !isLoadingPokemonDetails && !isErrorPokemonDetails
      ? pokemonDetails.map((p: any) => p.data)
      : [];

  const pokemonsCount = searchTerm ? filteredPokemon.length : pokemons?.count;

  return {
    searchTerm,
    filterType,
    limit,
    offset,
    setSearchTerm: (term: string) => dispatch(setSearchTerm(term)),
    setFilterType: (type: string) => dispatch(setFilterType(type)),
    setPagination: (newOffset: number) => dispatch(setPagination(newOffset)),
    pokemons: mapedPokemonDetails,
    pokemonsCount,
    isLoading,
    isLoadingPokemonDetails,
    isTypesLoading,
    error,
    types,
  };
};
