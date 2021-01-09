import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

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
              <h1>{users[question.author].name} asks</h1>
              <img alt='avatar' src={`${users[question.author].avatarURL}`}/>
              <h3>Would you rather</h3>
              <p>{question.optionOne.text}</p>
              <Link to={`/question/${question.id}`} >{text}</Link>
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