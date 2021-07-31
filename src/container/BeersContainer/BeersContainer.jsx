import React from "react";
import styles from "./BeersContainer.module.scss";
import Card from "../../components/Card";

const Beers = (props) => {
  const { beers } = props;
  const beersJSX = beers.map((beer) => (
    <div className={styles.card} key={beer.id}>
      <Card beer={beer} />
    </div>
  ));

  return (
    <>
      <section className={styles.content}>{beersJSX}</section>
    </>
  );
};

export default Beers;
