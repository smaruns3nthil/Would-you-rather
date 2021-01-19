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
        <div style={{height:'300px', border:'1px solid', padding:'15px', marginTop:'100px'}}>
          <div style={{borderBottom:"1px solid grey", marginBottom:'10px'}}>
            <h2>Create New Question</h2>
          </div>
          <p style={{fontWeight:'bold'}}>Would you Rather?</p>
          <form className='new-tweet' onSubmit={this.handleSubmit}>
            <input 
            style={{width:'95%', marginBottom:'15px'}}
						name="optionOne"
						type="text"
						placeholder="Please Enter your Option One"
						value={optionOne}
						onChange={this.handleOptionOne} 
            />
            <div style={{marginBottom:'15px'}}>OR</div>
            <input 
            style={{width:'95%', marginBottom:'25px'}}
						name="optionTwo"
						type="text"
						placeholder="Please Enter your Option Two"
						value={optionTwo}
						onChange={this.handleOptionTwo} 
            />
            <br/>
            <button
              style={{width:'95%'}}
              type='submit'
              disabled={ optionOne=== '' || optionTwo === ''}>
                Submit
            </button>
          </form>
        </div>
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