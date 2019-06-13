import SpotifyWebApi from "spotify-web-api-node";
import mockPlaylists from "./mock-playlists.json"

const spotifyApi = new SpotifyWebApi();
spotifyApi.setAccessToken(
  "BQB623uJDVtdkfePX9lxMZXz9Y24TMcsbOPB6JtftzQ_rNmhsN9-jPQCMdfVx0e07vylyNHksD_v0ZfnNWANQ8SvlwdE3mFSWO6AvtsGOEsBpbqDjrE0I6ksXsdcvGC6WtZIcmtFeDUbbsUvEu2QeYd1TWNbKD6xpwfPEr7fIRf8EE0De-0vpXmU"
);

export async function getSpotifyAlbums() {
  try {
    const { body } = await spotifyApi.getAlbums([
      "5U4W9E5WsYb2jUQWePT8Xm",
      "3KyVcddATClQKIdtaap4bV"
    ]);
    console.log("GetAlbums ===>", body.albums);
    return body.albums;
  } catch (er) {
      console.error(er)
  }
}

export async function getFeaturedPlaylist(){
  try {
    const {body: {playlists:{items}}} =  await spotifyApi.getFeaturedPlaylists({ country: 'FR', locale: 'fr_FR' })
    console.log(items)
    return items
  } catch(er) {
    console.log(er)
    return mockPlaylists
  }
}