import { RECEIVE_QUESTIONS , ADD_QUESTION} from '../actions/question'

export default function question (state = {}, action) {
  switch(action.type) {
    case RECEIVE_QUESTIONS :
      return {
        ...state,
        ...action.questions
      }
    case ADD_QUESTION :
      return{
        ...state,
        [action.question.id]: action.question
      }
    default :
      return state
  }
}