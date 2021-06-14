import React from "react";
import styles from "./Nav.module.scss";
import SearchBar from "../SearchBar";

const Nav = (props) => {
  const { handleSearch, handleHighAbv, handleLowAbv } = props;
  return (
    <>
      <div className={styles.nav}>
        <div className={styles.checkboxContainer}>
          <div className={styles.checkbox}>
            <input
              type="checkbox"
              name="highAbv"
              id="highAbv"
              onChange={handleHighAbv}
            />
            <label htmlFor="highAbv">High ABV (abv &gt; 6.0%)</label>
          </div>
          <div className={styles.checkbox}>
            <input
              type="checkbox"
              name="lowAbv"
              id="lowAbv"
              onChange={handleLowAbv}
            />
            <label htmlFor="lowAbv">Low ABV (abv &lt; 6.0%)</label>
          </div>
        </div>

        <div className={styles.searchContainer}>
          <SearchBar handleSearch={handleSearch} />
        </div>
      </div>
    </>
  );
};

export default Nav;
