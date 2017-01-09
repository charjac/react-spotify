import React, { PureComponent, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Slideshow from 'components/Slideshow'
import AlbumWidget from 'components/AlbumWidget'

import { fetchArtistPending, fetchArtistSuccess } from 'actions/artist'
import { fetchAlbumsPending, fetchAlbumsSuccess } from 'actions/album'
import { addAlbumToPlaylist } from 'actions/player'

import { ajax } from 'helpers/ajax'

@connect(
  (state, ownProps) => ({
    artist: state.artist.data[ownProps.params.id],
    albums: Object.keys(state.album.data)
      .map((albumId) => state.album.data[albumId])
      .filter((album) => album.artistId !== ownProps.params.id),
    pending: state.artist.pending || state.album.pending,
    images: Object.keys(state.album.data)
      .map((albumId) => state.album.data[albumId])
      .filter((album) => album.artistId !== ownProps.params.id)
      .map((album) => album.images[0])
      .slice(0, 4)
  }),
  (dispatch) => bindActionCreators({
    fetchArtistPending,
    fetchArtistSuccess,
    fetchAlbumsPending,
    fetchAlbumsSuccess,
    addAlbumToPlaylist
  }, dispatch)
)
class Artist extends PureComponent {
  static propTypes = {
    artist: PropTypes.object,
    albums: PropTypes.array,
    pending: PropTypes.bool,
    params: PropTypes.object,
    fetchArtistSuccess: PropTypes.func,
    fetchArtistPending: PropTypes.func,
    fetchAlbumsPending: PropTypes.func,
    fetchAlbumsSuccess: PropTypes.func,
    addAlbumToPlaylist: PropTypes.func
  }

  static contextTypes = {
    router: PropTypes.object
  }

  handleAddToPlaylist(album) {
    ajax({
      url: `/albums/${album.id}`
    })
      .then((data) => {
        console.log(data)
        this.props.addAlbumToPlaylist(data.tracks.items)
      })
  }

  constructor(props) {
    super(props)

    this.handleAddToPlaylist = this.handleAddToPlaylist.bind(this)
  }

  componentDidMount() {
    this.props.fetchArtistPending()
    this.props.fetchAlbumsPending()

    ajax({
      url: `/artists/${this.props.params.id}/albums`
    })
      .then((payload) => {
        this.props.fetchAlbumsSuccess(payload.items)
        this.props.fetchArtistSuccess(!!payload.items[0] ? payload.items[0].artists[0] : {})
      })
  }

  render() {
    return (
      <div>
        {
          this.props.pending &&
            <span>Loading !!!</span>
        }
        {
          !this.props.pending &&
            <div>
              <Slideshow items={this.props.images} />
              {
                this.props.albums.map((album, index) => (
                  <AlbumWidget album={album} key={index} onListen={this.handleAddToPlaylist} />
                ))
              }
            </div>
        }
      </div>
    )
  }
}

export default Artist