import React, {Component} from 'react';
import './App.css';
import {getTrack} from './components/SpotifyClient/SpotifyClient';
import Tracks from './components/SpotifyItems/Tracks';

class App extends Component {
  state = {
    tracks: []
  }

  async componentDidMount () {
    const tracks = await getTrack()
    this.setState({
      tracks
    })
    console.log('App ===>', tracks)
  }

  render(){
    const {tracks} = this.state
    return (
      <div className="App">
        <header>
        </header>
        <Tracks tracks={tracks}></Tracks>
      </div>
    );
  }
}

export default App;
