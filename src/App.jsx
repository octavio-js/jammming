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
    id: 1
  },
  {
    name: "Pretty Curse",
    artist: "INOHA",
    album: "Chance 2 Dance",
    id: 2
  },
  {
    name: "t-shirt",
    artist: "boy pablo",
    album: "Soy Pablo",
    id: 3
  },
  {
    name: "favorite apple",
    artist: "The Two Lips",
    album: "favorite apple",
    id: 4
  },
  {
    name: "Telephones",
    artist: "Vacations",
    album: "Changes",
    id: 5
  }
];

const addedToPlaylistTracks = [
  {
    name: "Paranoia",
    artist: "The Marias",
    album: "Submarine",
    id: 1
  },
  {
    name: "Pretty Curse",
    artist: "INOHA",
    album: "Chance 2 Dance",
    id: 2
  },
  {
    name: "t-shirt",
    artist: "boy pablo",
    album: "Soy Pablo",
    id: 3
  }
];

function App() {
  const [tracksList, setTracksList] = useState([]);
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [playlistName, setPlaylistName] = useState("My Playlist");

  useEffect(() => {
    setTracksList(fetchedTracks);
  }, []);

  useEffect(() => {
    setPlaylistTracks(addedToPlaylistTracks);
  }, []);

  return (
    <>
      <SearchBar />
      <div className="results-playlist">
        <SearchResults tracks={tracksList} />
        <Playlist playlistName={playlistName} updatePlaylistName={setPlaylistName} plTracks={playlistTracks} />
      </div>
    </>
  );
}

export default App;