import React from "react";
import { MainContainer, Title, ErrorBoundary } from "components";
import Pokemons from "features/pokemons";

const Home: React.FC = () => {
  return (
    <MainContainer>
      <Title>Pokemons</Title>
      <ErrorBoundary>
        <Pokemons />
      </ErrorBoundary>
    </MainContainer>
  );
};

export default Home;
