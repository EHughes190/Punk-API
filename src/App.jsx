import logo from "./logo.svg";
import styles from "./App.module.scss";
import Nav from "./components/Nav";
import Card from "./components/Card";
import React, { useState } from "react";
import beers from "./data/beers";

function App() {
  // const API_URL = `https://api.punkapi.com/v2/beers`;
  const getCardJsx = (beerObj) => <Card beers={beerObj} />;

  //const [beers, setbeers] = useState(initialState);

  return (
    <>
      <div className={styles.App}>
        <Nav />

        <section className={styles.content}>{beers.map(getCardJsx)}</section>
      </div>
    </>
  );
}

export default App;
