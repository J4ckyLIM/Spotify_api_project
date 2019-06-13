import React, {Component} from 'react';
import './App.css';
import {getFeaturedPlaylist} from './services/SpotifyClient/SpotifyClient';
import Albums from './components/SpotifyItems/Albums';
import Playlist from './components/SpotifyItems/Playlist';

class App extends Component {
  state = {
    albums: [],
    playlists: []
  }

  async componentDidMount () {
    // const albums = await getSpotifyAlbums()
    const playlists = await getFeaturedPlaylist()
    this.setState({
      playlists
      // albums
    })
    console.log('App ===>', playlists)
  }

  render(){
    const {albums, playlists} = this.state
    console.log('fsdkfjhdfd', playlists)
    return (
      <div class="container text-center">
        <header>
        </header>
        <Playlist playlists={playlists}></Playlist>
        <Albums albums={albums}></Albums>
      </div>
    );
  }
}

export default App;
