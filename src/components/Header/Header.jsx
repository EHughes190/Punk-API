import React from "react";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.title}>Welcome To The Brew Factory</h1>
      </header>
    </>
  );
};

export default Header;
