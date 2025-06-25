import React from "react";
import Track from "./Track";
import styles from './styles/tracklist.module.css';

function Tracklist(props) {
  return (
    <div className={styles.results}>
      {props.tracks.map(track => (
        <Track handleAddToPlaylist={props.onAddToPlaylist} t={track} key={track.id} songName={track.name} artist={track.artist} albumName={track.album} />
      ))}
    </div>
  );
}

export default Tracklist