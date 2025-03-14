import React from "react";
import PokemonDetailBox from "./components/PokemonDetailBox";
import { useParams } from "react-router-dom";
import { usePokemon } from "./hooks/usePokemon";

const PokemonDetail: React.FC = () => {
  const { id } = useParams();
  const { data: pokemon, isLoading, error } = usePokemon(id!);

  if (isLoading) return <div>Loading details...</div>;
  if (error || !pokemon) return <div>Error loading Pokemon details.</div>;

  return <PokemonDetailBox pokemon={pokemon} />;
};

export default PokemonDetail;
