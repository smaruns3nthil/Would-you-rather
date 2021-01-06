import { getInitialData } from '../utils/api'
import { receiveUsers } from '../actions/users'
import { receiveQuestions } from '../actions/question'

export function handleInitialData () {
    return (dispatch) => {
      return getInitialData()
        .then(({ users, question }) => {
          dispatch(receiveUsers(users))
          dispatch(receiveQuestions(question))

        })
    }
  } 