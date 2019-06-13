import SpotifyWebApi from 'spotify-web-api-node';

const spotifyApi = new SpotifyWebApi();
spotifyApi.setAccessToken('BQAJR_CxIXtBeY3RpYVA1dUa-6prVioHmSZiDJ1P2GIA1VpK4mm2oCOdJHZE0I7W9Fv13akBSkCQGmSDug0zEqmlh3gE45gnIETs_T23aFq-kiifgDst210WpPK2woqKh7-ldTK-z16hv2ZVMi27dKnif-kInaIIZkuCHkCfI-_hqPQQyGwS');

export async function getTrack () {
    const {body} = await spotifyApi.getAlbums(['5U4W9E5WsYb2jUQWePT8Xm', '3KyVcddATClQKIdtaap4bV'])
    console.log('GetTrack ===>', body.albums)
    return body.albums
  }