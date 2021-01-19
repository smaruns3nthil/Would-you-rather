import React, { Component } from 'react'
// import { connect } from 'react-redux'
import ProgressBar from 'react-bootstrap/ProgressBar'
import './css/login.css'

class Answered extends Component {
  
  render() {
    const {question,authedUser} = this.props
    const total = question.optionOne.votes.length+question.optionTwo.votes.length
    const percentOne = Math.round(((question.optionOne.votes.length/total)*100)*100)/100
    const percentTwo = Math.round(((question.optionTwo.votes.length/total)*100)*100)/100
    return (
      <div style={{textAlign:'left', marginLeft:'10px'}}>
        <div>
          Results:
        </div>
        <ul style={{listStyleType:'none'}}>
          <li>
            <div className={`${question.optionOne.votes.includes(authedUser)? 'success':'failure'}`} style={{height:'115px', border:'1px solid', padding:'5px'}}>
              <div>OptionOne : 
                {question.optionOne.text}
              </div>
              <p>
                {question.optionOne.votes.length} out of {total} votes
              </p>
              <div>
                {question.optionOne.votes.includes(authedUser)? 
                <ProgressBar animated variant="success" now={percentOne} label={`${percentOne}%`} />
                :
                <ProgressBar animated variant="danger" now={percentOne} label={`${percentOne}%`} />}
              </div>
              <div>
                {question.optionOne.votes.includes(authedUser)? 'Your Pick':null}
              </div>
            </div>
          </li>
          <li>
            <div className={`${question.optionTwo.votes.includes(authedUser)? 'success':'failure'}`} style={{height:'115px', border:'1px solid', padding:'5px', marginTop:'10px'}}>
              <div> OptionTwo :
                {question.optionTwo.text}
              </div>
              <p>
                {question.optionTwo.votes.length} out of {total} votes
              </p>
              <div>
                {question.optionTwo.votes.includes(authedUser)? 
                <ProgressBar animated now={percentTwo} variant="success" label={`${percentTwo}%`} />
                :
                <ProgressBar animated now={percentTwo} variant="danger" label={`${percentTwo}%`} />}
              </div>
              <div>
                {question.optionTwo.votes.includes(authedUser)? 'Your Pick':null}
              </div>
            </div>
          </li>
        </ul>
      </div>
    )
  }
}


export default Answered