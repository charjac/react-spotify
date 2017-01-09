import {
  ADD_ALBUM_TO_PLAYLIST,
  PLAY_TRACK
} from 'config/actions'

export const addAlbumToPlaylist = (payload) => ({
  type: ADD_ALBUM_TO_PLAYLIST,
  payload
})

export const playTrack = (payload) => ({
  type: PLAY_TRACK,
  payload
})
