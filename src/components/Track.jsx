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
      {(props.onAddToPlaylist || !props.isRemovable) && (
        <button type="button" className={styles.addSong} onClick={() => props.handleAddToPlaylist(props.t)}>+</button>
      )}
      {props.isRemovable && (
        <button type="button" className={styles.removeSong} onClick={() => props.handleRemoveFromPlaylist(props.t)}>-</button>
      )}
    </div>
  );
}

export default Track;