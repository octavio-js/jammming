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

export { getTracks };