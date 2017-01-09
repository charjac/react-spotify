import {
  FETCH_ARTIST_PENDING,
  FETCH_ARTIST_SUCCESS,
  FETCH_ARTIST_FAILED
} from 'config/actions'

export const fetchArtistPending = () => ({
  type: FETCH_ARTIST_PENDING
})

export const fetchArtistSuccess = (payload) => ({
  type: FETCH_ARTIST_SUCCESS,
  payload
})

export const fetchArtistFailed = () => ({
  type: FETCH_ARTIST_FAILED
})
