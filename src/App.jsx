import React from "react";
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";
import Playlist from "./components/Playlist";
import './App.css';

function App() {
  return (
    <>
      <SearchBar />
      <div className="results-playlist">
        <SearchResults />
        <Playlist />
      </div>
    </>
  );
}

export default App;