import { RECEIVE_USERS, ADD_QUESTION_TO_USERS ,ADD_ANSWER_TO_USERS } from '../actions/users'

export default function users (state = {}, action) {
  switch(action.type) {
    case RECEIVE_USERS :
      return {
        ...state,
        ...action.users
      }
    case ADD_QUESTION_TO_USERS :
      const { id, author} = action.question;
      return {
        ...state,
        [author]: {
          ...state[author],
          questions: state[author].questions.concat(id)
        }
      }
    case ADD_ANSWER_TO_USERS :
      const {authedUser,qid,answer} = action.answer
      // console.log("test",authedUser,qid,answer)
      return{
        ...state,
        [authedUser] : {
          ...state[authedUser],
          answers:{
            ...state[authedUser].answers,
            [qid] : answer
          }
        }
      }  
    default :
      return state
  }
}