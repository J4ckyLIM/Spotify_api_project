import React, { Component } from 'react'

export default class Albums extends Component {

  static defaultProps = {
    albums: []
  }

  render () {
    const {albums} = this.props
    return (
      <ul>
        {albums.map(album => (
          <li key={album.id}>
              {album.name}
          </li>
        ))}
      </ul>
    )
  }
}