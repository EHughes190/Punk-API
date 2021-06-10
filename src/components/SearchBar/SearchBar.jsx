import React, { useState } from "react";
import styles from "./SearchBar.module.scss";

const SearchBar = (props) => {
  const { handleSearch } = props;

  // const [searchText, setSearchText] = useState("");

  // const updateSearchText = (e) => {
  //   setSearchText(e.target.value);
  //   handleSearch(searchText);
  // };

  return (
    <>
      <input
        type="text"
        placeholder="search for beers"
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
      />
    </>
  );
};

export default SearchBar;
