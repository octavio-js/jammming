import React from "react";
import Tracklist from "./Tracklist";
import styles from './styles/searchresults.module.css';

function SearchResults(props) {
  return (
    <div className={styles.resultsDiv}>
      <h2 className={styles.header}>Results</h2>
      <Tracklist handleAddToPlaylist={props.handleAddToPlaylist} tracks={props.tracks} isRemovable={false} />
    </div>
  );
}

export default SearchResults;