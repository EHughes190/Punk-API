import styles from "./App.module.scss";
import Nav from "./components/Nav";
import BeersContainer from "./container/BeersContainer";
import Header from "./components/Header";
import React, { useState, useEffect } from "react";
function App() {
  //STATE VARIABLES
  const [beer, setBeer] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [highAbvChecked, setHighAbvChecked] = useState(false);
  const [lowAbvChecked, setLowAbvChecked] = useState(false);
  const [isClassics, setIsClassics] = useState(false);

  //API FETCH FUNCTION
  const getPunkAPI = () => {
    let URL = "https://api.punkapi.com/v2/beers/?per_page=32&";

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

  //FILTER FUNCTIONS
  const handleHighAbv = () => {
    return setHighAbvChecked(!highAbvChecked);
  };

  const handleLowAbv = () => {
    return setLowAbvChecked(!lowAbvChecked);
  };

  const handleClassics = () => {
    return setIsClassics(!isClassics);
  };

  useEffect(() => {
    getPunkAPI();
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
