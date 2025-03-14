import { useQuery } from "@tanstack/react-query";
import { getPokemonTypes } from "../services";

export const usePokemonTypes = () => {
  return useQuery({ queryKey: ["pokemonTypes"], queryFn: getPokemonTypes });
};
