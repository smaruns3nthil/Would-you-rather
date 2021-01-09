import React, { Component } from 'react'
import { connect } from 'react-redux'
import {handleAddAnswer} from '../actions/shared'

class Unanswered extends Component {
  state = {
    selectedOption: ''
  }
  handleChange= (e) => {
    const selectedOption = e.target.value

    this.setState(() => ({
      selectedOption
    }))
  }
  handleSubmit = (e)=>{
    e.preventDefault()
    const answer =this.state.selectedOption
    const {dispatch,question}=this.props
    dispatch(handleAddAnswer(
      question.id,
      answer,
    ))
  }
  render() {
    const {question}=this.props
    return (
      <div>
        <h3>Would you Rather?</h3>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>
              <input
                type="radio"
                value='optionOne'
                checked={this.state.selectedOption === 'optionOne'}
                onChange={this.handleChange}
              />
              {question.optionOne.text}
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                value='optionTwo'
                checked={this.state.selectedOption === 'optionTwo'}
                onChange={this.handleChange}
              />
              {question.optionTwo.text}
            </label>
          </div>
          <button 
          type="submit"
          disabled ={this.state.selectedOption === ''}
          >
            Submit
          </button>
        </form>
      </div>
    )
  }
}

export default connect()(Unanswered)