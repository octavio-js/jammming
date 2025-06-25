import React, { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";
import Playlist from "./components/Playlist";
import './App.css';
import { getTracks } from "./utils/spotifyApi";
import { redirectToSpotifyAuth, getToken } from './utils/spotifyAuth';

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [tracksList, setTracksList] = useState([]);
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [playlistName, setPlaylistName] = useState("My Playlist");
  const [loading , setLoading] = useState(true);

  useEffect(() => {
    const initAuth = async () => {
      const params = new URLSearchParams(window.location.search);
      const code = params.get('code');
      const token = localStorage.getItem('access_token');

      if (token) {
        setLoading(false);
      } else if (code) {
        try {
          await getToken(code);
          window.history.replaceState({}, document.title, '/jammming');
        } catch (error) {
          console.error(error);
        } finally {
          setLoading(false);
        }
      } else {
        redirectToSpotifyAuth();
      }
    };

    initAuth();
  }, []);


  async function fetchTracks() {
  if (!searchValue.trim()) return;

  try {
    const fetchedTracks = await getTracks(searchValue);
    const tracks = fetchedTracks.map(track => ({
      name: track.name,
      artist: track.artists[0].name,
      album: track.album.name,
      uri: track.uri,
      id: track.id
    }));
    setTracksList(tracks);
  } catch (err) {
    console.error('Failed to fetch tracks:', err);
  }
}

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

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <SearchBar searchValue={searchValue} searchUpdate={setSearchValue} searchForTracks={fetchTracks} />
      <div className="results-playlist">
        <SearchResults handleAddToPlaylist={addToPlaylist} tracks={tracksList} />
        <Playlist handleRemoveFromPlaylist={removeFromPlaylist} handleSave={savePlaylist} playlistName={playlistName} updatePlaylistName={setPlaylistName} plTracks={playlistTracks} />
      </div>
    </>
  );
}

export default App;