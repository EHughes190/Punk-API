import React, { useState } from "react";
import styles from "./Nav.module.scss";
import SearchBar from "../SearchBar";

const Nav = (props) => {
  const { handleSearch, handleHighAbv, handleLowAbv, handleClassics } = props;
  return (
    <>
      <div className={styles.nav}>
        {/* SEARCHBAR */}
        <div className={styles.searchbar}>
          <SearchBar handleSearch={handleSearch} />
        </div>

        {/* FILTERS CHECKBOXES */}
        <div className={styles.checkbox}>
          <div className={styles.checkbox__item}>
            <label>
              <input
                type="checkbox"
                hidden
                value="1"
                name="highAbv"
                id="highAbv"
                onChange={handleHighAbv}
              />
              <div className={styles.checkbox__text}>
                High ABV (abv &gt; 6.0%)
              </div>
            </label>
          </div>
          <div className={styles.checkbox__item}>
            <label>
              <input
                type="checkbox"
                hidden
                value="1"
                name="lowAbv"
                id="lowAbv"
                onChange={handleLowAbv}
              />
              <div className={styles.checkbox__text}>
                Low ABV (abv &lt; 6.0%)
              </div>
            </label>
          </div>
          <div className={styles.checkbox__item}>
            <label>
              <input
                type="checkbox"
                hidden
                value="1"
                name="classics"
                id="classics"
                onChange={handleClassics}
              />
              <div className={styles.checkbox__text}>Classics Range</div>
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
