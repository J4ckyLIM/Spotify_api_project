import React, { Component } from 'react';
import "./Playlist.css"

export default class Tracks extends Component {

  static defaultProps = {
    list: []
  }

  render () {
    const {list} = this.props
    console.log('truc: ', list[0])
    const maList = list[0]
    console.log('maliste',maList)
    return(
        <table class="table table-dark">
            <thead>
                <tr>
                <th scope="col">Album</th>
                <th scope="col">Titre</th>
                <th scope="col">Popularity</th>
                <th scope="col">Artist</th>
                <th scope="ccl">Play It</th>
                </tr>
            </thead>
            <tbody>
            {list.map(track =>(
                <tr key="">
                <img src={track[0].track.album.images[0].url} alt="img" class="img_tracks"></img>
                <th scope="row">{track[0].track.name}</th>
                <td>{track[0].track.popularity}</td>
                <td>{track[0].track.album.artists[0].name}</td>
                <a target="_blank" href={track[0].track.preview_url}><button class="btn btn-success">PLAYYY</button></a>
                </tr>
            ))}
            </tbody>
        </table>
    )
  }
}