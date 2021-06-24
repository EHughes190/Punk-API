import React from "react";
import styles from "./CardFront.module.scss";

const CardFront = (props) => {
  const { name, image_url, tagline, abv } = props.beer;
  const flipCard = props.flipCard;
  return (
    <>
      <div className={styles.cardFront}>
        <img className={styles.cardFront__img} src={image_url} />
        <div className={styles.info}>
          <div className={styles.info__heading}>
            <h3 className={styles.info__title}>{name}</h3>
            <span className={styles.info__abv}>{abv}%</span>
          </div>
          <p className={styles.info__tagline}>{tagline}</p>
          <button onClick={flipCard} className={styles.info__btn}>
            More Info
          </button>
        </div>
      </div>
    </>
  );
};

export default CardFront;
