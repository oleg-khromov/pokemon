import { useQueries } from "@tanstack/react-query";
import { getPokemonByUrl } from "../services/pokemonApi";

export const usePokemonDetails = (paginatedPokemons: any) => {
  const pokemonDetails = useQueries({
    queries: paginatedPokemons.map((p: any) => ({
      queryKey: ["pokemonDetail", p.name],
      queryFn: () => getPokemonByUrl(p.url),
    })),
  });

  const isLoading = pokemonDetails.some((query) => query.isLoading);
  const isError = pokemonDetails.some((query) => query.isError);
  return {
    pokemonDetails,
    isLoading,
    isError,
  };
};
