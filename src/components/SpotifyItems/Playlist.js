import React, { Component } from 'react'
import "./Playlist.css"
import {getTrackFromPlaylist} from "./../../services/SpotifyClient/SpotifyClient"

export default class Playlist extends Component {

  static defaultProps = {
    playlists: []
  }

  onClickPlaylist(playlist) {
    getTrackFromPlaylist(playlist.id)
  }
  render () {
    const {playlists} = this.props
    return (
      <div class="playlist">
          {playlists.map(playlist =>(
            <div class="playlist__item" key={playlist.id} onClick={() => this.onClickPlaylist(playlist)}>
                <div class="card">
                    <img src={playlist.images[0].url} class="card-img-top" alt=""></img>
                    <div class="card-body">
                    <h5 class="card-title">{playlist.name}</h5>
                    <p class="card-text">{playlist.type}</p>
                    {console.log(playlist.external_urls.spotify)}
                    </div>
                </div> 
             </div>
          ))}
      </div>
    )
  }
}