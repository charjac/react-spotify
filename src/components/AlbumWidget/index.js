import React, { PureComponent, PropTypes } from 'react'
import { Link } from 'react-router'

class AlbumWidget extends PureComponent {
  static propTypes = {
    album: PropTypes.object,
    onListen: PropTypes.func
  }

  listen() {
    this.props.onListen(this.props.album)
  }

  constructor(props) {
    super(props)

    this.listen = this.listen.bind(this)
  }

  render() {
    return (
      <div className="col-md-3">
        <div className="well album">
          <div>
            <img className="album-thumb img-thumbnail" src={this.props.album.images[0].url} />
            <h4 className="album-name">{this.props.album.name}</h4>
            <Link className="btn btn-default btn-block" to={`/album/${this.props.album.id}`}>Album Details</Link>
            <button className="btn btn-default btn-block" onClick={this.listen}>
              Listen
            </button>
          </div>
       </div>
      </div>
    )
  }
}

export default AlbumWidget
