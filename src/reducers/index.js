import { combineReducers } from 'redux'
import artist from './artist'
import album from './album'

const rootReducer = combineReducers({
  artist,
  album
})

export default rootReducer
