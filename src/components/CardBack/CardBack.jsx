import React from "react";
import styles from "./CardBack.module.scss";

const CardBack = (props) => {
  const {
    name,
    image_url,
    tagline,
    abv,
    description,
    first_brewed,
    ph,
    food_pairing,
  } = props.beer;

  const foodPairings = food_pairing.map((food) => {
    return <li className={styles.food}>{food}</li>;
  });
  return (
    <>
      <section className={styles.cardBack}>
        <h1 className={styles.heading}>{name}</h1>
        <div className={styles.desc}>
          <p>{description}</p>
        </div>
        <div className={styles.text}>
          <div className={styles.facts}>
            <h3>Let's talk facts</h3>
            <ul>
              <li>First Brewed: {first_brewed}</li>
              <li>pH:{ph}</li>
            </ul>
          </div>
          <div>
            <h3>Food For Thought</h3>
            <ul>{foodPairings}</ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default CardBack;
