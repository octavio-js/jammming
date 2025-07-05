function generateRandomString(length) {
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const values = crypto.getRandomValues(new Uint8Array(length));
  return values.reduce((acc, x) => acc + possible[x % possible.length], "");
}

async function sha256(plain) {
  const encoder = new TextEncoder();
  const data = encoder.encode(plain);
  return window.crypto.subtle.digest('SHA-256', data);
}

function base64encode(input) {
  return btoa(String.fromCharCode(...new Uint8Array(input)))
  .replace(/=/g, '')
  .replace(/\+/g, '-')
  .replace(/\//g, '_');
}

async function redirectToSpotifyAuth() {
  const codeVerifier = generateRandomString(64);
  const hashed = await sha256(codeVerifier);
  const codeChallenge = base64encode(hashed);

  localStorage.setItem('code_verifier', codeVerifier);

  const clientId = '9e0e8b7b19d649fabd0f4549fdc5a834';
  const redirectUri = 'https://octavio-js.github.io/jammming';
  const scope = [
    'playlist-modify-private',
    'playlist-modify-public',
    'user-read-private',
    'user-read-email',
    'user-read-playback-position'
  ].join(' ');

  const authUrl = new URL("https://accounts.spotify.com/authorize");

  authUrl.search = new URLSearchParams({
    response_type: 'code',
    client_id: clientId,
    scope: scope,
    redirect_uri: redirectUri,
    code_challenge_method: 'S256',
    code_challenge: codeChallenge,
    state: codeVerifier,
  });

  window.location.href = authUrl.toString();
}

async function getToken(code) {
  const codeVerifier = localStorage.getItem('code_verifier');

  if (!codeVerifier) {
    throw new Error('Code verifier not found');
  }

  const url = "https://accounts.spotify.com/api/token";
  const clientId = '9e0e8b7b19d649fabd0f4549fdc5a834';
  const redirectUri = 'https://octavio-js.github.io/jammming';

  const payload = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      client_id: clientId,
      grant_type: 'authorization_code',
      code,
      redirect_uri: redirectUri,
      code_verifier: codeVerifier,
    }),
  };

  const body = await fetch(url, payload);
  const response = await body.json();

  if (response.access_token) {
    localStorage.setItem('token_scope', response.scope);
    localStorage.setItem('access_token', response.access_token);
    localStorage.removeItem('code_verifier');
    return response.access_token;
  } else {
    console.error("Error retrieving access token:", response);
    throw new Error("Failed to get token");
  }
}

export { redirectToSpotifyAuth, getToken };