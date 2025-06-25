import React, { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";
import Playlist from "./components/Playlist";
import './App.css';

const fetchedTracks = [
  {
    name: "Paranoia",
    artist: "The Marias",
    album: "Submarine",
    id: 1,
    uri: 'abc123'
  },
  {
    name: "Pretty Curse",
    artist: "INOHA",
    album: "Chance 2 Dance",
    id: 2,
    uri: 'abc124'
  },
  {
    name: "t-shirt",
    artist: "boy pablo",
    album: "Soy Pablo",
    id: 3,
    uri: 'abc125'
  },
  {
    name: "favorite apple",
    artist: "The Two Lips",
    album: "favorite apple",
    id: 4,
    uri: 'abc126'
  },
  {
    name: "Telephones",
    artist: "Vacations",
    album: "Changes",
    id: 5,
    uri: 'abc127'
  }
];

function App() {
  const [tracksList, setTracksList] = useState([]);
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [playlistName, setPlaylistName] = useState("My Playlist");

  useEffect(() => {
    setTracksList(fetchedTracks);
  }, []);

  function addToPlaylist(track) {
    const exists = playlistTracks.some(t => t.id === track.id);
    if (!exists) {
      setPlaylistTracks([...playlistTracks, track])
    }
  }

  function removeFromPlaylist(track) {
    setPlaylistTracks(playlistTracks.filter(t => t.id !== track.id));
  }

  function getURIs(tracks) {
    const uris = tracks.map(track => {
      return track.uri;
    });
    return uris;
  }

  function savePlaylist() {
    const tracksURIs = getURIs(playlistTracks);
    setPlaylistTracks([]);
  }

  return (
    <>
      <SearchBar />
      <div className="results-playlist">
        <SearchResults handleAddToPlaylist={addToPlaylist} tracks={tracksList} />
        <Playlist handleRemoveFromPlaylist={removeFromPlaylist} handleSave={savePlaylist} playlistName={playlistName} updatePlaylistName={setPlaylistName} plTracks={playlistTracks} />
      </div>
    </>
  );
}

export default App;