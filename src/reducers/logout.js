import {CHANGE_USER} from '../actions/logout'

export default function logout(state = null, action) {
    switch (action.type) {
      case CHANGE_USER :
        return action.user
      default :
        return state
    }
  }