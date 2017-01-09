import {
  FETCH_ALBUMS_PENDING,
  FETCH_ALBUMS_SUCCESS,
  FETCH_ALBUMS_FAILED
} from 'config/actions'


const initialState = {
  pending: false,
  data: {}
}

const albumReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALBUMS_PENDING:
      return {
        ...state,
        pending: true
      }
    case FETCH_ALBUMS_SUCCESS:
      return {
        pending: false,
        data: action.payload.reduce((albums, album) => ({
          ...albums,
          [album.id]: {
            ...album,
            artistId: album.artists[0].id
          }
        }), state.data)
      }
    case FETCH_ALBUMS_FAILED:
      return {
        ...state,
        pending: false
      }
    default:
      return state
  }
}

export default albumReducer
