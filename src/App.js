import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import SpotifyWebApi from 'spotify-web-api-node';
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
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <Tracks tracks={tracks}></Tracks>
      </div>
    );
  }
}

export default App;
