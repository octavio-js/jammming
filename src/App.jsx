import React from "react";
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";
import Playlist from "./components/Playlist";
import './App.css';

const fetchedTracks = [
  {
    name: "Paranoia",
    artist: "The Marias",
    album: "Submarine"
  },
  {
    name: "Pretty Curse",
    artist: "INOHA",
    album: "Chance 2 Dance"
  },
  {
    name: "t-shirt",
    artist: "boy pablo",
    album: "Soy Pablo"
  },
  {
    name: "favorite apple",
    artist: "The Two Lips",
    album: "favorite apple"
  },
  {
    name: "Telephones",
    artist: "Vacations",
    album: "Changes"
  },
];

function App() {
  return (
    <>
      <SearchBar />
      <div className="results-playlist">
        <SearchResults tracks={fetchedTracks} />
        <Playlist />
      </div>
    </>
  );
}

export default App;