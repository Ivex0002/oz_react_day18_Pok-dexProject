import { useSelector } from "react-redux";
import { Card } from "../components/card";

export default function Main() {
  const pokeData = useSelector((state) => state.pokemon);
  console.log(pokeData);
  return (
    <>
      {pokeData.data.map((el) => (
        <Card key = {el.id} pokeData={el}></Card>
      ))}
    </>
  );
}

