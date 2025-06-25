import React from "react";
import Tracklist from "./Tracklist";
import styles from './styles/searchresults.module.css';

function SearchResults() {
  return (
    <div className={styles.resultsDiv}>
      <h2 className={styles.header}>Results</h2>
      <Tracklist />
    </div>
  );
}

export default SearchResults;