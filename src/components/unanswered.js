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
      <div style={{textAlign:'left', marginLeft:'20px'}}>
        <h3 >Would you Rather?</h3>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>
              <input
                type="radio"
                value='optionOne'
                checked={this.state.selectedOption === 'optionOne'}
                onChange={this.handleChange}
              />
              <div style={{paddingLeft:'10px', display:'inline', verticalAlign:'top'}}>{question.optionOne.text}</div>
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
              <div style={{paddingLeft:'10px', display:'inline', verticalAlign:'top'}}>{question.optionTwo.text}</div>
            </label>
          </div>
          <button 
          style= {{width:'95%', marginTop:'10px'}}
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