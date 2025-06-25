async function getTracks(search) {
  const endpoint = `https://api.spotify.com/v1/search?q=${encodeURIComponent(search)}&type=track`;
  const accessToken = localStorage.getItem('access_token');

  if (!accessToken) {
    alert("Access token missing. Please log in again");
    window.location.reload();
    return;
  }

  try {
    const response = await fetch(endpoint, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    });

    if (response.status === 401) {
      localStorage.removeItem('access_token');
      window.location.reload();
      return;
    }

    if (!response.ok) {
      const err = await response.json();
      console.error(`Spotify API error: ${err}`);
      return;
    }

    const data = await response.json();
    return data.tracks.items;
  } catch (error) {
    alert('Error fetching the tracks. Sorry!');
    console.log(error);
  }
}

async function addTracksToPlaylist(playlistId, trackUris) {
  const endpoint = `https://api.spotify.com/v1/playlists/${playlistId}/tracks`;
  const accessToken = localStorage.getItem('access_token');

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": 'application/json'
      },
      body: JSON.stringify({
        uris: trackUris
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Spotify API error: ${errorData.error.message}`);
    }

    alert('Playlist created successfully!');
  } catch (error) {
    console.error('Error creating playlist:', error.message);
  }
}

async function savePlaylist(playlistName, trackUris) {
  const endpoint = `https://api.spotify.com/v1/me/playlists`;
  const accessToken = localStorage.getItem('access_token');

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": 'application/json'
      },
      body: JSON.stringify({
        name: playlistName,
        description: 'Playlist made from Jammming',
        public: false
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Full Spotify error response:", errorData);
      throw new Error(`Spotify API error: ${JSON.stringify(errorData)}`);
    }

    const data = await response.json();
    const playlistId = data.id;

    await addTracksToPlaylist(playlistId, trackUris);
  } catch(error) {
    console.error('Error creating playlist:', error.message);
  }
}

export { getTracks, savePlaylist };