import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'

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
        <ul style={{listStyleType:'none'}}>
          {questions.map((question)=>(
            <li style= {{marginTop:'10px'}}key={question.id}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={`${users[question.author].avatarURL}`} />
                <Card.Body>
                  <Card.Title style={{color:'orange'}}>{users[question.author].name} asks</Card.Title>
                  <Card.Text>
                    <p style={{fontWeight:'bold'}}>Would you Rather?</p>
                    <p>{question.optionOne.text}</p>
                    <Link to={`/question/${question.id}`} >{text}</Link>
                  </Card.Text>
                  
                </Card.Body>
              </Card>
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