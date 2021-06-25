import React from "react";
import styles from "./SearchBar.module.scss";
import { Icon } from "@iconify/react";
import magnifyingGlassLight from "@iconify-icons/ph/magnifying-glass-light";

const SearchBar = (props) => {
  const { handleSearch } = props;

  return (
    <div className={styles.searchContainer}>
      <input
        className={styles.search}
        type="text"
        placeholder="Start typing to search"
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
      />
      <Icon icon={magnifyingGlassLight} className={styles.search__icon} />
    </div>
  );
};

export default SearchBar;
