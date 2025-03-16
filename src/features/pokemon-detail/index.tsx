import { FC } from "react";
import PokemonDetailBox from "./components/PokemonDetailBox";
import { useParams } from "react-router-dom";
import { usePokemon } from "./hooks/usePokemon";

const PokemonDetail: FC = () => {
  const { id } = useParams();
  const { data: pokemon, isLoading, error } = usePokemon(id!);

  if (isLoading) return <div>Loading details...</div>;
  if (error || !pokemon)
    return <div>Error loading Pokemon details. {error?.message}</div>;

  return <PokemonDetailBox pokemon={pokemon} />;
};

export default PokemonDetail;
