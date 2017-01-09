import {
  ADD_ALBUM_TO_PLAYLIST,
  PLAY_TRACK
} from 'config/actions'

const initialState = {
  playlist: [],
  selectedTrack: null
}

const playerReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_ALBUM_TO_PLAYLIST:
      return {
        ...state,
        playlist: [
          ...state.playlist,
          ...action.payload
        ]
      }
    case PLAY_TRACK:
      return {
        ...state,
        selectedTrack: action.payload
      }
    default:
      return state
  }
}

export default playerReducer
