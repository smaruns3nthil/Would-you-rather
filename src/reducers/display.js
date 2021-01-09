import {CHANGE_DISPLAY} from '../actions/display'

export default function display(state = null, action) {
    switch (action.type) {
      case CHANGE_DISPLAY :
        return action.load
      default :
        return state
    }
  }