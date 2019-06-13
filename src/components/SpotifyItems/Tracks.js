import React, { Component } from 'react'

export default class Track extends Component {

  static defaultProps = {
    tracks: []
  }

  render () {
    const {tracks} = this.props
    return (
      <ul>
        {tracks.map(track => (
          <li key={track.id}>
              {track.name}
          </li>
        ))}
      </ul>
    )
  }
}