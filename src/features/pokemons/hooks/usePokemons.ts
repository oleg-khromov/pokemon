import { useQuery } from "@tanstack/react-query";
import { getPokemons, getPokemonsByType } from "../services/pokemonApi";

export const usePokemons = (filterType: string) => {
  return useQuery({
    queryKey: filterType ? ["pokemons", filterType] : ["pokemons", "all"],
    queryFn: () => (filterType ? getPokemonsByType(filterType) : getPokemons()),
  });
};

// export const usePokemons = (
//   limit: number,
//   offset: number,
//   filterType: string
// ) => {
//   return useQuery({
//     queryKey: filterType
//       ? ["pokemons", filterType]
//       : ["pokemonList", limit, offset],
//     queryFn: () =>
//       filterType ? getPokemonsByType(filterType) : getPokemons(limit, offset),
//   });
// };
