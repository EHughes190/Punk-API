import React, { useState } from "react";
import styles from "./Card.module.scss";
import CardFront from "../CardFront";
import CardBack from "../CardBack";

const Card = (props) => {
  const beer = props.beer;

  const [isFaceDown, setIsFaceDown] = useState(false);

  const flipStyles = isFaceDown ? styles.faceDown : "";

  const flipCard = () => {
    setIsFaceDown(!isFaceDown);
  };

  const cardJsx = isFaceDown ? (
    <CardBack beer={beer} key={beer.id + 0.2} flipCard={flipCard} />
  ) : (
    <CardFront beer={beer} key={beer.id + 0.1} flipCard={flipCard} />
  );

  return (
    <>
      {/* <section className={`${styles.beerCard} ${flipStyles}`}>
        <div className={styles.front}>
          <CardFront beer={beer} key={beer.id + 0.1} flipCard={flipCard} />
        </div>
        <div className={styles.back}>
          <CardBack beer={beer} key={beer.id + 0.2} flipCard={flipCard} />
        </div>

      </section> */}
      {cardJsx}
    </>
  );
};

export default Card;
