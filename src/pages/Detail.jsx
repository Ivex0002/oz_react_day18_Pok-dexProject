import { useParams } from "react-router-dom";
import { selectPokemonById } from "../RTK/selector";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { FavoriteButton } from "../components/FavoriteButton";
import { FlipCard } from "../components/FlipCard";

export default function Detail() {
  const { pokemonId } = useParams();
  const pokemonData = useSelector(selectPokemonById(Number(pokemonId)));
  //   console.log(pokemonData);

  if (!pokemonData) {
    return <DetailStyle>데이터를 불러오는 중입니다...</DetailStyle>;
  }

  return (
    <DetailStyle>
      <FavoriteButton pokemonId={Number(pokemonId)}></FavoriteButton>
      <FlipCard
        front={pokemonData.front_form}
        back={pokemonData.back_form}
      ></FlipCard>
      <div className="name">{pokemonData.name}</div>
      <div className="description">{pokemonData.description}</div>
    </DetailStyle>
  );
}

const DetailStyle = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid gray;
  border-radius: 1rem;
  width: 27rem;
  height: 36rem;

  img {
    width: 20rem;
  }

  .name {
    font-size: 3.5rem;
    font-weight: 700;
  }
  .description {
    margin-top: 1rem;
    font-size: 1.5rem;
    width: 80%;
    word-break: keep-all;
  }
`;
