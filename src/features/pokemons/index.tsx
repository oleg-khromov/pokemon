import { FC } from "react";
import { usePokemonData } from "./hooks";
import {
  PokemonTable,
  PokemonFilters,
  PokemonPagination,
  SkeletonPage,
} from "./components";

const Pokemons: FC = () => {
  const {
    searchTerm,
    filterType,
    limit,
    offset,
    setSearchTerm,
    setFilterType,
    setPagination,
    pokemons,
    pokemonsCount,
    isLoading,
    isLoadingPokemonDetails,
    isTypesLoading,
    error,
    types,
  } = usePokemonData();

  if (error) return <div>Error loading Pokemon. {error?.message}</div>;
  if (isLoading || isLoadingPokemonDetails) return <SkeletonPage />;

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
      <PokemonTable pokemons={pokemons || []} />
      <PokemonPagination
        setPagination={setPagination}
        offset={offset}
        limit={limit}
        count={pokemonsCount}
      />
    </div>
  );
};

export default Pokemons;
