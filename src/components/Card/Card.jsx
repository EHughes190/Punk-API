import React from "react";
import styles from "./Card.module.scss";

const Card = (props) => {
  const { name, image_url, tagline, abv } = props.beer;
  return (
    <div className={styles.card}>
      <img className={styles.card__img} src={image_url} />
      <div className={styles.info}>
        <h3 className={styles.info__title}>{name}</h3>
        <p className={styles.info__tagline}>{tagline}</p>
        <p className={styles.info__abv}>{abv}%</p>
      </div>
    </div>
  );
};

export default Card;
