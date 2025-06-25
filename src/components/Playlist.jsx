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
      <h3 className={styles.playlistName} id="name-of-playlist">{props.playlistName}</h3>
      <input className={styles.input} onChange={handleChange} value={props.playlistName} name="playlistName" id="playlistName" type="text" placeholder="Playlist Name..." />
      <div className={styles.tracks}>
        <Tracklist handleRemoveFromPlaylist={props.handleRemoveFromPlaylist} tracks={props.plTracks} isRemovable={true} />
      </div>
      <button className={styles.button} type="submit">SAVE TO SPOTIFY</button>
    </form>
  );
}

export default Playlist;