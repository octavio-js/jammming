import React from "react";
import styles from './styles/track.module.css';

function Track() {
  return (
    <div className={styles.track}>
      <div className={styles.info}>
        <h4 className={styles.songName}>Song Name</h4>
        <div className={styles.songInfo}>
          <p>Artist Name</p>
          <p className={styles.album}>Album Name</p>
        </div>
      </div>
    </div>
  );
}

export default Track;