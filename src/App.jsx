import logo from "./logo.svg";
import styles from "./App.module.scss";
import Nav from "./components/Nav";
import BeersContainer from "./container/BeersContainer";
import Header from "./components/Header";
import React, { useState, useEffect } from "react";
function App() {
  const [beer, setBeer] = useState([]);

  const getPunkAPI = async (searchTerm) => {
    if (searchTerm === "") {
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
  };

  useEffect(() => {
    getPunkAPI("");
  }, []);

  return (
    <>
      <div className={styles.App}>
        <Header />
        <Nav handleSearch={getPunkAPI} />
        <BeersContainer beer={beer} />
      </div>
    </>
  );
}

export default App;
