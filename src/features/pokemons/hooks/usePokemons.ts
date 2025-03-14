import { useQuery } from "@tanstack/react-query";
import { getPokemonList } from "../services";

export const usePokemons = (limit = 20, offset = 0) => {
  return useQuery({
    queryKey: ["pokemonList", limit, offset],
    queryFn: () => getPokemonList(limit, offset),
    staleTime: 1000 * 60 * 60 * 1,
    gcTime: 1000 * 60 * 60 * 1,
  });
};
