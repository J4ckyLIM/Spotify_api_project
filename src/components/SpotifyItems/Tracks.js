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
          <li>
          </li>
        ))}
      </ul>
    )
  }
}