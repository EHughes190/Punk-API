import React, { useState } from "react";
import CardFront from "../CardFront";
import CardBack from "../CardBack";

const Card = (props) => {
  const { beer } = props;

  const [isFaceDown, setIsFaceDown] = useState(false);

  const flipCard = () => {
    setIsFaceDown(!isFaceDown);
  };

  //WHICH SIDE OF THE CARD SHOULD BE SHOWN
  const cardJsx = isFaceDown ? (
    <CardBack beer={beer} flipCard={flipCard} />
  ) : (
    <CardFront beer={beer} flipCard={flipCard} />
  );

  return <>{cardJsx}</>;
};

export default Card;
