import React, { Component } from 'react'
import "./Playlist.css"

export default class Playlist extends Component {

  static defaultProps = {
    playlists: []
  }

  render () {
    const {playlists} = this.props
    return (
      <div class="playlist">
          {playlists.map(list =>(
            <div class="playlist__item" key={list.id}>
                <div class="card">
                    <a href={list.external_urls.spotify}><img src={list.images[0].url} class="card-img-top" alt=""></img></a>
                    <div class="card-body">
                    <h5 class="card-title">{list.name}</h5>
                    <p class="card-text">{list.type}</p>
                    {console.log(list.external_urls.spotify)}
                    </div>
                </div> 
             </div>
          ))}
      </div>
    )
  }
}