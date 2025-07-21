import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FavoriteButton } from "./FavoriteButton";

const CardContainer = styled.section`
  position: relative;
  width: 16rem;
  border: 1px solid gray;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 2rem;
  transition: all 0.2s ease;

  &:hover {
    cursor: pointer;
    box-shadow: inset -1px -1px 4px 3px #0000001f, 1px 3px 6px 3px #00000030;
    transform: scale(1.05);
  }

  img {
    width: 18rem;
    &:hover {
      filter: drop-shadow(0 0 10px yellow);
    }
  }
  .name {
    font-size: 2rem;
  }
`;

export const Card = ({ pokeData }) => {
  const navigate = useNavigate();

  return (
    <CardContainer onClick={() => navigate(`/detail/${pokeData.id}`)}>
      <FavoriteButton pokemonId={pokeData.id}></FavoriteButton>
      <img src={pokeData.front_form} alt="pokemon_img" />
      <div className="name">{pokeData.name}</div>
    </CardContainer>
  );
};
