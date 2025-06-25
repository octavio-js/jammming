import React, { useState } from "react";
import styles from './styles/searchbar.module.css';

function SearchBar() {
  const [searchValue, setSearchValue] = useState("");

  const handleChange = (e) => setSearchValue(e.target.value);

  return (
    <form className={styles.form}>
      <h1 className={styles.header}>
        Ja
        <span className={styles.firstM}>m</span>
        <span className={styles.secondM}>m</span>
        <span className={styles.thirdM}>m</span>
        ing
      </h1>
      <input className={styles.input} onChange={handleChange} value={searchValue} name="search" id="search" type="text" placeholder="Search..." />
      <button className={styles.button} type="submit">SEARCH</button>
    </form>
  );
}

export default SearchBar;