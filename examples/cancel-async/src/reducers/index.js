import { combineReducers } from 'redux'
import { counter, countdown } from './counter'
import { postsByReddit, selectedReddit } from './reddit'
import { SELECT_REDDIT, REQUEST_POSTS, RECEIVE_POSTS } from '../actions'

const rootReducer = combineReducers({
  postsByReddit,
  selectedReddit,
  countdown,
  counter,
})

export default rootReducer
