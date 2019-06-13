import SpotifyWebApi from "spotify-web-api-node";
import mockPlaylists from "./mock-playlists.json";

const spotifyApi = new SpotifyWebApi();
const accessToken = window.location.search.split('?')[1].split('=')[1]

spotifyApi.setAccessToken(accessToken);

export async function getSpotifyAlbums() {
  try {
    const { body } = await spotifyApi.getAlbums([
      "5U4W9E5WsYb2jUQWePT8Xm",
      "3KyVcddATClQKIdtaap4bV"
    ]);
    console.log("GetAlbums ===>", body.albums);
    return body.albums;
  } catch (er) {
    console.error(er);
  }
}

export async function getFeaturedPlaylist() {
  try {
    const {
      body: {
        playlists: { items }
      }
    } = await spotifyApi.getFeaturedPlaylists({
      country: "FR",
      locale: "fr_FR"
    });
    console.log(items);
    return items;
  } catch (er) {
    console.log(er);
    return mockPlaylists;
  }
}

export async function getTrackFromPlaylist(playlistId) {
  const { body } = await spotifyApi.getPlaylistTracks(playlistId);
  console.log(body);
}
