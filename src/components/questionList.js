import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


class Question extends Component {

  
  render() {
     const{questions,view,users} = this.props
     const text= view ? "View Answer": "View Poll"
    return (
      <div>
        <ul style={{listStyleType:'none'}}>
          {questions.map((question)=>(
            <li style= {{marginTop:'10px'}}key={question.id}>
              <div style={{height:'200px', border:'1px solid', padding:'15px'}}>
                <div style={{fontWeight:'bold', borderBottom:'1px solid grey', paddingBottom:'5px'}}>
                  {users[question.author].name} asks
                </div>
                <div style={{ display:'inline-block',borderRight: '1px solid grey', paddingTop:'35px', width:'25%', verticalAlign:'top'}}>
                  <img alt='avatar' src={`${users[question.author].avatarURL}`} style={{height:'100px',width:'100px', paddingRight:'10px', borderRadius:'35px'}}/>
                </div>
                <div style={{ display:'inline-block', paddingTop:'35px', paddingBottom:'35px', width:'75%', verticalAlign:'top'}}>
                    <p style={{fontWeight:'bold'}}>Would you Rather?</p>
                    <p>{question.optionOne.text}</p>
                    <Link to={`/question/${question.id}`} >{text}</Link>
                </div>
              </div>
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