import React, { useState } from "react";
import { usePokemonData } from "./hooks";
import { PokemonTable, PokemonFilters, SkeletonTable } from "./components";

const Pokemons: React.FC = () => {
  const [page, setPage] = useState(0);
  const limit = 20;
  const offset = page * limit;

  const {
    searchTerm,
    filterType,
    setSearchTerm,
    setFilterType,
    filteredPokemon,
    isLoading,
    isTypesLoading,
    error,
    types,
  } = usePokemonData(limit, offset);

  if (error) return <div>Error loading Pokemon.</div>;
  if (isLoading) return <SkeletonTable />;

  return (
    <div className="p-4">
      <PokemonFilters
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        filterType={filterType}
        setFilterType={setFilterType}
        types={types || []}
        isTypesLoading={isTypesLoading}
      />
      <PokemonTable pokemonList={filteredPokemon || []} />

      <div className="flex justify-between mt-4">
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 0))}
          disabled={page === 0}
          className="p-2 border rounded bg-gray-200 disabled:opacity-50"
        >
          Previous
        </button>
        <button
          onClick={() => setPage((prev) => prev + 1)}
          className="p-2 border rounded bg-gray-200"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pokemons;
