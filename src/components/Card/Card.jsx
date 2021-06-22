import React, { useState } from "react";
import styles from "./Card.module.scss";
import CardFront from "../CardFront";
import CardBack from "../CardBack";

const Card = (props) => {
  const beer = props.beer;

  const [isFaceDown, setIsFaceDown] = useState(false);

  const flipStyles = isFaceDown ? styles.faceDown : "";

  return (
    <>
      <section
        className={`${styles.beerCard} ${flipStyles}`}
        onClick={() => setIsFaceDown(!isFaceDown)}
      >
        <div className={styles.front}>
          <CardFront beer={beer} />
        </div>
        <div className={styles.back}>
          <CardBack beer={beer} />
        </div>
      </section>
    </>
  );
};

export default Card;
