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
        <div style={{height:'350px', border:'1px solid', padding:'15px', marginTop:'100px'}}>
          <div style={{borderBottom:"1px solid grey"}}>
            <h2>{users[question.author].name} asks</h2>
          </div>
          <div style={{ display:'inline-block',borderRight: '1px solid grey', paddingTop:'35px', paddingBottom:'140px', width:'25%', verticalAlign:'top'}}>
            <img alt='avatar' src={`${users[question.author].avatarURL}`} style={{height:'100px',width:'100px', paddingRight:'10px', borderRadius:'35px'}}/>
          </div>
          <div style={{ display:'inline-block', paddingBottom:'35px', width:'75%', verticalAlign:'top'}}>
            {filtered ? 
            <Answered question={question} authedUser={authedUser}/>
            :
            <Unanswered question={question}/>}
          </div>
        </div>
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