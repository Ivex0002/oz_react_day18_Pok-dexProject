import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { favoriteSlice } from "../RTK/slice";
import monsterBall from "../assets/monsterBall.png"

export function FavoriteButton({ pokemonId }) {
  const isFavorite = useSelector((state) =>
    state.favorite.some((item) => item === pokemonId)
  );
  const dispatch = useDispatch();

  return (
    <FavoriteButtonStyle
      onClick={(e) => {
        e.stopPropagation();
        dispatch(
          isFavorite
            ? favoriteSlice.actions.removeFromFavorite({ pokemonId })
            : favoriteSlice.actions.addToFavorite({ pokemonId })
        );
      }}
    >
      {isFavorite ? "❤️" : "🤍"}
    </FavoriteButtonStyle>
  );
}

const FavoriteButtonStyle = styled.button`
  z-index: 100;
  pointer-events: all;
  background-color: transparent;
  border: none;
  font-size: 1.4rem;
  transition: all 0.2s ease;
  text-align: center;
  cursor: url(${monsterBall}) 16 16, auto;

  position: absolute;
  top: 1rem;
  right: 1rem;

  &:hover {
    color: red;
  }
`;
