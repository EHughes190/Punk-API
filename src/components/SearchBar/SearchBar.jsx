import React from "react";
import styles from "./SearchBar.module.scss";

const SearchBar = (props) => {
  const { handleSearch } = props;

  return (
    <>
      <input
        className={styles.search}
        type="text"
        placeholder="Search for your next big taste..."
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
      />
    </>
  );
};

export default SearchBar;
