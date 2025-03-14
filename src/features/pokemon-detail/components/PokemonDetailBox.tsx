import React from "react";

interface PokemonDetailProps {
  pokemon: {
    id: number;
    name: string;
    types: string[];
    sprite: string;
    abilities: string[];
    stats: { name: string; value: number }[];
  } | null;
}

const PokemonDetailBox: React.FC<PokemonDetailProps> = ({ pokemon }) => {
  if (!pokemon) return null;

  return (
    <div className="flex gap-4">
      <img src={pokemon?.sprite} alt={pokemon?.name} className="w-32 h-32" />
      <div>
        <h1 className="text-2xl font-bold mb-4 uppercase">{pokemon?.name}</h1>
        <p>
          <b>Type(s):</b> {pokemon?.types.join(", ")}
        </p>
        <p>
          <b>bilities:</b> {pokemon?.abilities.join(", ")}
        </p>
        <h2 className="mt-4 font-bold">Stats:</h2>
        <ul>
          {pokemon?.stats.map((stat: any) => (
            <li key={stat.name}>
              {stat.name}: {stat.value}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PokemonDetailBox;
