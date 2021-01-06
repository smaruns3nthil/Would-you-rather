import { RECEIVE_QUESTIONS } from '../actions/question'

export default function question (state = {}, action) {
  switch(action.type) {
    case RECEIVE_QUESTIONS :
      return {
        ...state,
        ...action.question
      }
    default :
      return state
  }
}