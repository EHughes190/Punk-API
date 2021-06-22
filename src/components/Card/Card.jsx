import React, { useState } from "react";
import styles from "./Card.module.scss";
//import Modal from "../../components/Modal/Modal";
import CardFront from "../CardFront";
import CardBack from "../CardBack";

const Card = (props) => {
  const beer = props.beer;

  // const [isOpen, setisOpen] = useState(false);
  // const setActive = () => {
  //   setisOpen(!isOpen);
  // };

  // const openBeerInfo = isOpen ? (
  //   <Modal isOpen={isOpen} setActive={setActive} beer={props.beer} />
  // ) : (
  //   ""
  // );
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
