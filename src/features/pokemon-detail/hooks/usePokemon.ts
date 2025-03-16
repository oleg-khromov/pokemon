import { useQuery } from "@tanstack/react-query";
import { getPokemonById } from "../services/pokemonApi";

export const usePokemon = (id: string) => {
  return useQuery({
    queryKey: ["pokemonDetail", id],
    queryFn: () => getPokemonById(id),
  });
};
