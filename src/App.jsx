import logo from "./logo.svg";
import styles from "./App.module.scss";
import Nav from "./components/Nav";
import BeersContainer from "./container/BeersContainer";
import React, { useState, useEffect } from "react";
//import beers from "./data/beers";

function App() {
  //const API_URL = `https://api.punkapi.com/v2/beers`;

  const [beer, setBeer] = useState([]);

  const getPunkAPI = async (searchTerm) => {
    if (searchTerm === undefined) {
      const response = await fetch(
        "https://api.punkapi.com/v2/beers/?per_page=80"
      );
      const beers = await response.json();
      setBeer(beers);
    } else {
      const response =
        await fetch(`https://api.punkapi.com/v2/beers?beer_name=${searchTerm}&per_page=80
      `);
      const beers = await response.json();
      setBeer(beers);
    }

    console.log(beer);
  };

  useEffect(() => {
    getPunkAPI();
  }, []);

  return (
    <>
      <div className={styles.App}>
        <Nav handleSearch={getPunkAPI} />
        <BeersContainer beer={beer} />
      </div>
    </>
  );
}

export default App;
