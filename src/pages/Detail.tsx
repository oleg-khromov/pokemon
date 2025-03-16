import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { MainContainer, ErrorBoundary } from "components";
import PokemonDetail from "features/pokemon-detail";

const Detail: FC = () => {
  const navigate = useNavigate();

  return (
    <MainContainer>
      <button
        onClick={() => navigate(-1)}
        className="mb-4 p-2 border rounded bg-gray-200"
      >
        Back
      </button>
      <ErrorBoundary>
        <PokemonDetail />
      </ErrorBoundary>
    </MainContainer>
  );
};

export default Detail;
