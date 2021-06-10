import React from "react";
import styles from "./Card.module.scss";

const Card = (props) => {
  const { name, image_url, tagline, abv } = props.beer;
  return (
    <div className={styles.card}>
      <img className={styles.img} src={image_url} />
      <div className={styles.info}>
        <h3 className={styles.title}>{name}</h3>
        {/* <p className={styles.tagline}>{tagline}</p> */}
        <p className={styles.abv}>{tagline}</p>
      </div>
    </div>
  );
};

export default Card;
