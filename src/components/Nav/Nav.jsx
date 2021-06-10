import React from "react";
import styles from "./Nav.module.scss";
import SearchBar from "../SearchBar";

const Nav = (props) => {
  const { handleSearch } = props;
  return (
    <>
      <div className={styles.nav}>
        <SearchBar handleSearch={handleSearch} />
      </div>
    </>
  );
};

export default Nav;
