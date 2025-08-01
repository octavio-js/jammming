import React from "react";
import Tracklist from "./Tracklist";
import styles from './styles/playlist.module.css';

function Playlist(props) {
  const handleChange = (e) => props.updatePlaylistName(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (props.playlistName.length === 0) {
      alert('Please name your playlist!');
    } else {
      props.handleSave();
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div>
        <h2 className={styles.playlistName} id="name-of-playlist">{props.playlistName}</h2>
        <div className={styles["playlist-input-row"]}>
          <input className={styles.input} onChange={handleChange} value={props.playlistName} name="playlistName" id="playlistName" type="text" placeholder="Playlist Name..." />
          <button className={styles.button} type="submit">SAVE TO SPOTIFY</button>
        </div>
      </div>
      <Tracklist handleRemoveFromPlaylist={props.handleRemoveFromPlaylist} tracks={props.plTracks} isRemovable={true} />
    </form>
  );
}

export default Playlist;