import React from "react";
import styles from "./CardFront.module.scss";

const CardFront = (props) => {
  const {
    name,
    image_url,
    tagline,
    abv,
  } = props.beer;
  return (
    <>
      <div className={styles.cardFront}>
        <img className={styles.cardFront__img} src={image_url} />
        <div className={styles.info}>
          <h3 className={styles.info__title}>{name}</h3>
          <p className={styles.info__tagline}>{tagline}</p>
          <p className={styles.info__abv}>{abv}%</p>
        </div>
      </div>
    </>
  );
};

export default CardFront;
