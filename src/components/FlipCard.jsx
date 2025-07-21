import { useState } from "react";
import styled from "styled-components";

const FlipImgContainer = styled.div`
  position: relative;
  transform-style: preserve-3d;
  width: 20rem;
  transform: ${({ $isFront }) =>
    $isFront ? "rotateY(0deg)" : "rotateY(180deg)"};
  transition: all 0.5s ease;
`;

const FrontImg = styled.img`
  width: 100%;
  backface-visibility: hidden;
  position: absolute;
`;
const BackImg = styled.img`
  width: 100%;
  backface-visibility: hidden;
  transform: rotateY(180deg);
`;

export function FlipCard({ front, back }) {
  const [isFront, setIsFront] = useState(true);

  return (
    <>
      <FlipImgContainer $isFront={isFront}>
        <FrontImg src={front}></FrontImg>
        <BackImg src={back}></BackImg>
      </FlipImgContainer>
      <button onClick={() => setIsFront((prev) => !prev)}>뒤집기</button>
    </>
  );
}
