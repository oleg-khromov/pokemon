import { useQuery } from "@tanstack/react-query";
import { getPokemonById } from "../services";

export const usePokemon = (id: string) => {
  return useQuery({
    queryKey: ["pokemonDetail", id],
    queryFn: () => getPokemonById(id!),
  });
};
