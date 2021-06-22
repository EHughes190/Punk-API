import styles from "./App.module.scss";
import Nav from "./components/Nav";
import BeersContainer from "./container/BeersContainer";
import Header from "./components/Header";
import React, { useState, useEffect } from "react";
function App() {
  const [beer, setBeer] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [highAbvChecked, setHighAbvChecked] = useState(false);
  const [lowAbvChecked, setLowAbvChecked] = useState(false);
  const [isClassics, setIsClassics] = useState(false);

  const getPunkAPI = () => {
    let URL = "https://api.punkapi.com/v2/beers/?per_page=20&";

    if (searchTerm.length > 0) {
      URL += `beer_name=${searchTerm}&`;
    }

    if (highAbvChecked) {
      URL += "abv_gt=6&";
    }
    if (lowAbvChecked) {
      URL += "abv_lt=6&";
    }

    if (isClassics) {
      URL += "brewed_before=12-2008&";
    }

    fetch(URL)
      .then((response) => response.json())
      .then((jsonResponse) => {
        setBeer(jsonResponse);
      });
  };

  const handleHighAbv = () => {
    return setHighAbvChecked(!highAbvChecked);
  };

  const handleLowAbv = () => {
    return setLowAbvChecked(!lowAbvChecked);
  };

  const handleClassics = () => {
    return setIsClassics(!isClassics);
  };
  //   if (searchTerm === "") {
  //     const response = await fetch(
  //       "https://api.punkapi.com/v2/beers/?per_page=80"
  //     );
  //     const beersObj = await response.json();
  //     setBeer(beersObj);
  //   } else {
  //     const response =
  //       await fetch(`https://api.punkapi.com/v2/beers?per_page=80&beer_name=${searchTerm}
  //     `);
  //     const beersObj = await response.json();
  //     setBeer(beersObj);
  //   }
  // };

  useEffect(() => {
    getPunkAPI("");
  }, [highAbvChecked, lowAbvChecked, isClassics, searchTerm]);

  return (
    <>
      <div className={styles.App}>
        <Header />
        <Nav
          handleSearch={setSearchTerm}
          handleHighAbv={handleHighAbv}
          handleLowAbv={handleLowAbv}
          handleClassics={handleClassics}
        />
        <BeersContainer beers={beer} />
      </div>
    </>
  );
}

export default App;
