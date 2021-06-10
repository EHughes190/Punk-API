import React from "react";
import styles from "./BeersContainer.module.scss";
import Card from "../../components/Card";
const Beers = (props) => {
  const { beer } = props;
  const beersJSX = beer.map((beer) => <Card beer={beer} />);
  return (
    <>
      <section className={styles.content}>{beersJSX}</section>
    </>
  );
};

export default Beers;
