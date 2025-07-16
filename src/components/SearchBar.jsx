import React from "react";
import styles from './styles/searchbar.module.css';

function SearchBar(props) {
  const handleChange = (e) => props.searchUpdate(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    props.searchForTracks();
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      {props.isLoggedIn ? <p className={styles.placeholder}></p> : <button className={styles.login} onClick={props.login}>Login with Spotify</button>}
      <h1 className={styles.header}>
        Ja
        <span className={styles.firstM}>m</span>
        <span className={styles.secondM}>m</span>
        <span className={styles.thirdM}>m</span>
        ing
      </h1>
      <input className={styles.input} onChange={handleChange} value={props.searchValue} name="search" id="search" type="text" placeholder="Search..." />
      <button className={styles.search} type="submit">SEARCH</button>
    </form>
  );
}

export default SearchBar;