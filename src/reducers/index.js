import { combineReducers } from 'redux'
import authedUser from './authedUser'
import users from './users'
import question from './question'

export default combineReducers({
  authedUser,
  users,
  question
})