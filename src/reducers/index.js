import { combineReducers } from 'redux'
import { loadingBarReducer } from 'react-redux-loading'
import authedUser from './authedUser'
import users from './users'
import questions from './question'
import display from './display'
import logout from './logout'

export default combineReducers({
  logout,
  display,
  authedUser,
  users,
  questions,
  loadingBar: loadingBarReducer,
})