import React, {Component} from 'react';
import './App.css';
import './images/spotify_bleu.jpg';
import {getFeaturedPlaylist} from './services/SpotifyClient/SpotifyClient';
import {getTrackFromPlaylist} from './services/SpotifyClient/SpotifyClient';
import Albums from './components/SpotifyItems/Albums';
import Playlist from './components/SpotifyItems/Playlist';
import Tracks from './components/SpotifyItems/Tracks';
import { placeholder } from '@babel/types';

class App extends Component {
  state = {
    search: '',
    albums: [],
    playlists: [],
    list: [] /* Array of tracks from a playlist */
  }

  async componentDidMount () {
    // const albums = await getSpotifyAlbums()
    const playlists = await getFeaturedPlaylist()
    this.setState({
      playlists
    })
    console.log('App ===>', playlists)
  }

  saveList(tracks){
    this.setState({
      list: [...this.state.list, tracks]
    })
  }

  updateSearch(event){
    const search = event.currentTarget.value
    this.setState({
      search: search.toLowerCase()
    })
  }

  // Fonction de recherche selon l'entrée de l'utilisateur



  render(){
    const {albums, playlists, list, search} = this.state
    console.log('fsdkfjhdfd', playlists)
    console.log('TRACKS', list)

    // Ajout du filtre

    const filteredPlaylists = playlists.filter(playlist => {
      return playlist.name.toLowerCase().indexOf(search) !== -1
    })
    return (
      <div class="container text-center">
        <header>
        <nav class="navbar navbar-primary bg-primary">
          <span class="navbar-brand mb-0 h1 text-light">Spotify Bleu</span>
          <form class="form-inline my-2 my-lg-0">
            <input type="search" onChange={this.updateSearch.bind(this)} class="form-control mr-sm-2" placeholder="Tape dedans mec"></input>
          </form>
        </nav>
          <a class="my-2 my-sm-0" href="http://localhost:8888/login"><button class="btn btn-success my-2 my-sm-0">Refresh</button></a>
        </header>
        <Playlist playlists={filteredPlaylists} onSave={this.saveList.bind(this)}></Playlist>
        <Tracks list={list}></Tracks>
        <Albums albums={albums}></Albums>
      </div>
    );
  }
}

export default App;
