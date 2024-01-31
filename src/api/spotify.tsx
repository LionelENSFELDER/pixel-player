export interface UserProfileInterface {
  country: string;
  display_name: string;
  email: string;
  explicit_content: {
    filter_enabled: boolean;
    filter_locked: boolean;
  };
  external_urls: { spotify: string };
  followers: { href: string; total: number };
  href: string;
  id: string;
  // images: ImageInterface[];
  product: string;
  type: string;
  uri: string;
}

export const clientId = "28246b24acca41d89272cad865b1087a";
export const params = new URLSearchParams(window.location.search);
export const code = params.get("code");

export async function init() {
  if (!code) {
    redirectToAuthCodeFlow(clientId);
  }
}

export async function redirectToAuthCodeFlow(clientId: string) {
  const verifier = generateCodeVerifier(128);
  const challenge = await generateCodeChallenge(verifier);
  localStorage.setItem("verifier", verifier);
  const params = new URLSearchParams();
  params.append("client_id", clientId);
  params.append("response_type", "code");
  params.append("redirect_uri", "http://localhost:5173/loginCallback");
  params.append("scope", "user-read-private user-read-email user-library-read");
  params.append("code_challenge_method", "S256");
  params.append("code_challenge", challenge);

  document.location = `https://accounts.spotify.com/authorize?${params.toString()}`;
}

function generateCodeVerifier(length: number) {
  let text = "";
  const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}

async function generateCodeChallenge(codeVerifier: string) {
  const data = new TextEncoder().encode(codeVerifier);
  const digest = await window.crypto.subtle.digest("SHA-256", data);
  return btoa(String.fromCharCode.apply(null, [...new Uint8Array(digest)]))
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

export async function getAccessToken(clientId: string, code: string): Promise<string> {
  const verifier = localStorage.getItem("verifier");
  const params = new URLSearchParams();
  params.append("client_id", clientId);
  params.append("grant_type", "authorization_code");
  params.append("code", code);
  params.append("redirect_uri", "http://localhost:5173/loginCallback");
  params.append("code_verifier", verifier!);

  const result = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: params,
  });
  const { access_token } = await result.json();
  return access_token;
}

export async function fetchProfile(token: string): Promise<UserProfileInterface> {
  const result = await fetch("https://api.spotify.com/v1/me", {
    method: "GET",
    headers: { Authorization: `Bearer ${token}` },
  });
  return await result.json();
}

export function populateUI(profile: UserProfileInterface) {
  console.log("profile.display_name", profile.display_name);
}

export const isSpotifyToken = () => {
  const token = localStorage.getItem("spotifyToken");
  if (token) {
    return true;
  }
  return false;
};

export const setToken = async (code: string) => {
  try {
    const response = await getAccessToken(clientId, code);

    if (response === undefined) {
      console.error("getAccessToken returned undefined");
    } else {
      localStorage.setItem("spotifyToken", response);
    }
  } catch (error) {
    console.error("Error setting spotifyToken:", error);
  }
};

export const getToken = () => {
  if (isSpotifyToken()) {
    return localStorage.getItem("spotifyToken");
  } else {
    return null;
  }
};

// https://api.spotify.com/v1/playlists/{playlist_id}
// https://api.spotify.com/v1/albums/{id}
// https://api.spotify.com/v1/shows/{id}
export async function fetchUserLibrary(token: string, name: string) {
  const url = `https://api.spotify.com/v1/me/${name}`;
  const result = await fetch(url, {
    method: "GET",
    headers: { Authorization: `Bearer ${token}` },
  });
  return await result.json();
}

export async function getUserCurrentLibrary(token: string, name: string) {
  try {
    const response = await fetchUserLibrary(token, name);
    const items = response.items;
    return items;
  } catch (error) {
    console.error("Error fetching playlists:", error);
  }
}

export async function fetchCategoryTracks(token: string, playlistId: string): Promise<[]> {
  const result = await fetch(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
    method: "GET",
    headers: { Authorization: `Bearer ${token}` },
  });
  return await result.json();
}

export async function fetchPlaylists(token: string): Promise<[]> {
  const result = await fetch("https://api.spotify.com/v1/me/playlists", {
    method: "GET",
    headers: { Authorization: `Bearer ${token}` },
  });
  return await result.json();
}

export async function fetchPlaylistTracks(token: string, playlistId: string): Promise<[]> {
  const result = await fetch(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
    method: "GET",
    headers: { Authorization: `Bearer ${token}` },
  });
  return await result.json();
}
