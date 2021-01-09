import React, { Component } from 'react'
import { connect } from 'react-redux'
import {handleAddQuestion} from '../actions/shared'
import { withRouter } from 'react-router-dom'

class Add extends Component {
  state ={
    optionOne:'',
    optionTwo:'',
  }
  handleOptionOne = (e) => {
    const optionOne = e.target.value

    this.setState(() => ({
      optionOne
    }))
  }
  handleOptionTwo = (e) => {
    const optionTwo = e.target.value

    this.setState(() => ({
      optionTwo
    }))
  }
  handleSubmit = (e) => {
    e.preventDefault()

    const { optionOne,optionTwo } = this.state
    const {dispatch}=this.props

    dispatch(handleAddQuestion(
      optionOne,
      optionTwo,
    ))
    this.setState(() => ({
      optionOne: '',
      optionTwo: '',
    }))
    this.props.history.push(`/`)
  }

  render() {
    const {optionOne,optionTwo}=this.state

    return (
      <div>
         <h3>Create New Question</h3>
         <h3>Would you Rather??</h3>
         <form className='new-tweet' onSubmit={this.handleSubmit}>
          <textarea
            placeholder="Option 1"
            value={optionOne}
            onChange={this.handleOptionOne}
          />
          <br/>OR<br/>
          <textarea
            placeholder="Option 2"
            value={optionTwo}
            onChange={this.handleOptionTwo}
          />
          <br/>
          <button
            type='submit'
            disabled={ optionOne=== '' || optionTwo === ''}>
              Submit
          </button>
        </form>
      </div>
    )
  }
}

function mapStateToProps({authedUser}){
    return{
        authedUser:authedUser
    }

}


export default withRouter(connect(mapStateToProps)(Add))