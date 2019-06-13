import SpotifyWebApi from 'spotify-web-api-node';

const spotifyApi = new SpotifyWebApi();
spotifyApi.setAccessToken('BQCUg0FmiP5_5_m9ZXA9-SXJTTI9MkTQ58KvciuNFH6sXCbHP_mYAIK5b24Ll80QbvDXNu_Tdij6MX-1k6x7z8OR_5HQ_4GibA9rd3Gtc7I-0AIVJ5TjlZdPnm7Zdm7O8tnqlENQsO8BJqCZFd1UuwPile5_mtc0XhgBe_CUOk8PNmYvngeuRX0j');

export async function getSpotifyAlbums () {
    const {body} = await spotifyApi.getAlbums(['5U4W9E5WsYb2jUQWePT8Xm', '3KyVcddATClQKIdtaap4bV'])
    console.log('GetTrack ===>', body.albums)
    return body.albums
  }