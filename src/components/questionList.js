import React, { Component } from 'react'
import { connect } from 'react-redux'


class Question extends Component {

  handleClick = (e)=>{
    e.preventDefault();
    // Link to the Question
  } 
  
  render() {
     const{questions,view,users} = this.props
     const text= view ? "View Answer": "View Poll"
    return (
      <div>
        <ul>
          {questions.map((question)=>(
            <li key={question.id}>
              <h1>{question.author} asks</h1>
              <img alt='avatar' src={`${users[question.author].avatarURL}`}/>
              <h3>Would you rather</h3>
              <p>{question.optionOne.text}</p>
              <button onClick={this.handleClick}>{text}</button>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

function mapStateToProps({users}){
    return{
        users
    }

}


export default connect(mapStateToProps)(Question)