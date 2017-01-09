import {
  FETCH_ARTIST_PENDING,
  FETCH_ARTIST_SUCCESS,
  FETCH_ARTIST_FAILED
} from 'config/actions'

const initialState = {
  pending: false,
  data: {}
}

const artistReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ARTIST_PENDING:
      return {
        ...state,
        pending: true
      }
    case FETCH_ARTIST_SUCCESS:
      return {
        pending: false,
        data: {
          ...state.data,
          [action.payload.id]: action.payload
        }
      }
    case FETCH_ARTIST_FAILED:
      return {
        ...state,
        pending: false
      }
    default:
      return state
  }
}

export default artistReducer
