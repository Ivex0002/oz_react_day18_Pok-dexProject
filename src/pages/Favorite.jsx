import { useSelector } from "react-redux";
import { selectFavoritePokemons } from "../RTK/selector";
import { Card } from "../components/card";

export default function Favorite() {
  const favoritePokemons = useSelector(selectFavoritePokemons);

    return (
      <>
        {favoritePokemons.map((el) => (
          <Card key={el.id} pokeData={el}></Card>
        ))}
      </>
    );
}
