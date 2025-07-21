import { getRegExp } from "korean-regexp";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { selectPokemonByRegExp } from "../RTK/selector";
import { Card } from "../components/card";

export default function Search() {
    const [searchParams]=useSearchParams();
    const param = searchParams.get("pokemon");
    const reg = getRegExp(param)

    const pokemon = useSelector(selectPokemonByRegExp(reg))
  return (
    <>
      {pokemon.map((el) => (
        <Card key={el.id} pokeData={el}></Card>
      ))}
    </>
  );
}
