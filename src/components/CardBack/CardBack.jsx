import React from "react";
import styles from "./CardBack.module.scss";

const CardBack = (props) => {
  const { description, food_pairing } = props.beer;

  const flipCard = props.flipCard;
  const foodPairings = food_pairing.map((food) => {
    return <li className={styles.food}>{food}</li>;
  });
  return (
    <>
      <section className={styles.cardBack}>
        <h1 className={styles.heading}>Description</h1>
        <div className={styles.desc}>
          <p>{description}</p>
        </div>
        <div className={styles.food}>
          <h3 className={styles.food__heading}>A Match Made in Heaven</h3>
          <ul>{foodPairings}</ul>
        </div>
        <button onClick={flipCard} className={styles.back__btn}>
          Back
        </button>
      </section>
    </>
  );
};

export default CardBack;
