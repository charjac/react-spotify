import {
  FETCH_ALBUMS_PENDING,
  FETCH_ALBUMS_SUCCESS,
  FETCH_ALBUMS_FAILED
} from 'config/actions'

export const fetchAlbumsPending = () => ({
  type: FETCH_ALBUMS_PENDING
})

export const fetchAlbumsSuccess = (payload) => ({
  type: FETCH_ALBUMS_SUCCESS,
  payload
})

export const fetchAlbumsFailed = () => ({
  type: FETCH_ALBUMS_FAILED
})
