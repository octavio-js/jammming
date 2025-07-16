import React from "react";
import Track from "./Track";
import styles from './styles/tracklist.module.css';

function Tracklist(props) {
  return (
    <div className={styles.tracks}>
      <Track songName="Test" artist="Test" albumName="Test" />
      <Track songName="Test" artist="Test" albumName="Test" />
    </div>
  );
}

export default Tracklist