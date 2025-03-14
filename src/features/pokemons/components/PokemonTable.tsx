import React from "react";
import { useNavigate } from "react-router-dom";

interface Pokemon {
  id: number;
  name: string;
  types: string[];
  sprite: string;
}

interface Props {
  pokemonList: Pokemon[];
}

const PokemonTable: React.FC<Props> = ({ pokemonList }) => {
  const navigate = useNavigate();

  return (
    <table className="min-w-full border-collapse border">
      <thead>
        <tr className="border">
          <th className="border p-2">ID</th>
          <th className="border p-2">Name</th>
          <th className="border p-2">Type(s)</th>
          <th className="border p-2">Image</th>
        </tr>
      </thead>
      <tbody>
        {pokemonList.map((pokemon) => (
          <tr
            key={pokemon.id}
            className="cursor-pointer hover:bg-gray-100 border"
            onClick={() => navigate(`/pokemon/${pokemon.id}`)}
          >
            <td className="border p-2 text-center">{pokemon.id}</td>
            <td className="border p-2 text-center">{pokemon.name}</td>
            <td className="border p-2 text-center">
              {pokemon.types.join(", ")}
            </td>
            <td className="border p-2 text-center">
              <img
                src={pokemon.sprite}
                alt={pokemon.name}
                className="w-12 h-12 inline-flex"
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PokemonTable;
