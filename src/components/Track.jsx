import React from "react";
import styles from './styles/track.module.css';

function Track(props) {
  return (
    <div className={styles.track}>
      <div className={styles.info}>
        <h4 className={styles.songName}>{props.songName}</h4>
        <div className={styles.songInfo}>
          <p>{props.artist}</p>
          <p className={styles.album}>{props.albumName}</p>
        </div>
      </div>
      <button onClick={() => props.handleAddToPlaylist(props.t)} className={styles.addSong}>+</button>
    </div>
  );
}

export default Track;