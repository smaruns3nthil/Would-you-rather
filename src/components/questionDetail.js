import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import Answered from './answered'
import Unanswered from './unanswered'



class Question extends Component {
  
  render() {
    const {flag,users,authedUser} = this.props
    if(flag !== true)
    {
      return <Redirect to='/error' />
    }
    const question = this.props.question[0]
    const filtered = (
      question.optionOne.votes.indexOf(authedUser) > -1 ||
      question.optionTwo.votes.indexOf(authedUser) > -1
    )
    return (
      <div>
        <h3>{question.author} ask:</h3>
        <img alt='avatar' src={`${users[question.author].avatarURL}`}/>
        {filtered?<Answered/>:<Unanswered/>}
      </div>
    )
  }
}

function mapStateToProps({authedUser,users, questions},props){
    const {id} = props.match.params
    const questionsArr = Object.keys(questions)
    const flag =questionsArr.includes(id) 
    const question = flag? (Object.values(questions).filter((q)=>{
      return q.id === id
    })):(null)
    return{
        id,
        authedUser,
        users,
        question,
        flag,
    }

}


export default connect(mapStateToProps)(Question)