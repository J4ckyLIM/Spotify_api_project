import React, {Component} from 'react';
import './App.css';
import {getSpotifyAlbums} from './components/SpotifyClient/SpotifyClient';
import Albums from './components/SpotifyItems/Albums';

class App extends Component {
  state = {
    albums: []
  }

  async componentDidMount () {
    const albums = await getSpotifyAlbums()
    this.setState({
      albums
    })
    console.log('App ===>', albums)
  }

  render(){
    const {albums} = this.state
    return (
      <div className="App">
        <header>
        </header>
        <Albums albums={albums}></Albums>
      </div>
    );
  }
}

export default App;
