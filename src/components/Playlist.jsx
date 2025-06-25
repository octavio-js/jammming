import React, { useState } from "react";
import Track from './Track';
import styles from './styles/playlist.module.css';

function Playlist() {
  const [playlistName, setPlaylistName] = useState("");

  const handleChange = (e) => setPlaylistName(e.target.value);
  const handleSubmit = (e) => e.preventDefault();

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input className={styles.input} onChange={handleChange} value={playlistName} name="playlistName" id="playlistName" type="text" placeholder="Playlist Name..." />
      <div className={styles.tracks}>
        <Track />
        <Track />
        <Track />
      </div>
      <button className={styles.button} type="submit">SAVE TO SPOTIFY</button>
    </form>
  );
}

export default Playlist;