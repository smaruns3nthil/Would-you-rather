import React, { Component } from 'react'
// import { connect } from 'react-redux'


class Answered extends Component {
  
  render() {
    const {question,authedUser} = this.props
    const total = question.optionOne.votes.length+question.optionTwo.votes.length
    const percentOne = (question.optionOne.votes.length/total)*100
    const percentTwo = (question.optionTwo.votes.length/total)*100
    return (
      <div>
        <h5>
          Results:
          <br/>
          Would you Rather:
        </h5>
        <ul>
          <li>
            <h3>
              {question.optionOne.text}
            </h3>
            <p>
              {question.optionOne.votes.length} out of {total} votes
            </p>
            <h5>
              Percentage of votes : {percentOne}
            </h5>
            <h3>
              {question.optionOne.votes.includes(authedUser)? 'Your Pick':null}
            </h3>
          </li>
          <li>
            <h3>
              {question.optionTwo.text}
            </h3>
            <p>
              {question.optionTwo.votes.length} out of {total} votes
            </p>
            <h5>
              Percentage of votes : {percentTwo}
            </h5>
            <h3>
              {question.optionTwo.votes.includes(authedUser)? 'Your Pick':null}
            </h3>
          </li>
        </ul>
      </div>
    )
  }
}


export default Answered