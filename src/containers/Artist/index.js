import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'

import { fetchArtistPending, fetchArtistSuccess } from 'actions/artist'
import { fetchAlbumsPending, fetchAlbumsSuccess } from 'actions/album'
import { addAlbumToPlaylist } from 'actions/player'

import { ajax } from 'helpers/ajax'

@connect(
  (state) => {
    return {
      pending: state.artist.pending
    }
  }
)
class Artist extends PureComponent {
  static propTypes = {
    pending: PropTypes.bool,
    params: PropTypes.object
  }

  static contextTypes = {
    router: PropTypes.object,
    store: PropTypes.object
  }

  componentDidMount() {
    this.context.store.dispatch(fetchArtistPending())

    ajax({
      url: `/artists/${this.props.params.id}`
    })
      .then((payload) => {
        this.context.store.dispatch(fetchArtistSuccess(payload))
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
              Artist
            </div>
        }
      </div>
    )
  }
}

export default Artist
