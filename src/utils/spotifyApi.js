async function getTracks(search) {
  const endpoint = `https://api.spotify.com/v1/search?q=${encodeURIComponent(search)}&type=track`;
  const accessToken = localStorage.getItem('access_token');

  try {
    const response = await fetch(endpoint, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    });
    if (response.ok) {
      const data = await response.json();
      return data.tracks.items;
    }
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
      throw new Error(`Spotify API error: ${errorData.message}`);
    }

    const data = await response.json();
    const playlistId = data.id;

    await addTracksToPlaylist(playlistId, trackUris);

    const playlistUrl = `https://open.spotify.com/playlist/${playlistId}`;
    console.log(`Playlist created: ${playlistUrl}`);
  } catch(error) {
    console.error('Error creating playlist:', error);
  }
}

export { getTracks, savePlaylist };