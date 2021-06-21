import React from "react";
import styles from "./Modal.module.scss";
import { GiCrossedBones } from "react-icons/gi";

const Modal = (props) => {
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

  const { isOpen, setActive } = props.setActive;

  const foodPairings = food_pairing.map((food) => {
    return <li className={styles.food}>{food}</li>;
  });

  return (
    <>
      {isOpen && (
        <div className={styles.background}>
          <div className={styles.wrapper}>
            <GiCrossedBones onClick={setActive} className={styles.closeIcon} />
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
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
