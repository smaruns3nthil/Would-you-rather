import { getInitialData } from '../utils/api'
import { receiveUsers } from '../actions/users'
import { receiveQuestions } from '../actions/question'
import {addQuestion,addAnswer} from './question'
import { showLoading, hideLoading } from 'react-redux-loading'
import {addQuestionToUsers,addAnswerToUsers} from './users'
import {saveQuestion,saveQuestionAnswer} from '../utils/api'

export function handleInitialData () {
    return (dispatch) => {
      return getInitialData()
        .then(({ users, questions }) => {
          dispatch(receiveUsers(users))
          dispatch(receiveQuestions(questions))
        })
    }
  } 
  
export function handleAddQuestion (optionOneText,optionTwoText){
  return( dispatch,getState)=>{
    const {authedUser} = getState()
    dispatch(showLoading())
    return saveQuestion ({
      optionOneText,
      optionTwoText,
      author : authedUser,
    })
    .then((question)=>{
      dispatch(addQuestion(question))
      dispatch(addQuestionToUsers(question))
    })
    .then(()=>dispatch(hideLoading()))
  }
}
  
export function handleAddAnswer (qid,answer){
  return (dispatch,getState)=>{
    const {authedUser} = getState()
    const ans={
      authedUser,
      qid,
      answer
    }
    dispatch(addAnswer(ans))
    dispatch(addAnswerToUsers(ans))
    return saveQuestionAnswer(ans)
            
  }
}