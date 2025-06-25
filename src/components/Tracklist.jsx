import React from "react";
import Track from "./Track";
import styles from './styles/tracklist.module.css';

function Tracklist() {
  return (
    <div className={styles.results}>
      <Track />
      <Track />
      <Track />
    </div>
  );
}

export default Tracklist