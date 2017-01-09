import { combineReducers } from 'redux'
import artist from './artist'
import album from './album'
import player from './player'

const rootReducer = combineReducers({
  artist,
  album,
  player
})

export default rootReducer
