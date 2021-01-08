import React, { Component } from 'react'
import { connect } from 'react-redux'


class Question extends Component {
  
  render() {
    return (
      <div>
        QuestionDetail
      </div>
    )
  }
}

function mapStateToProps({authedUser}){
    return{
        authedUser:authedUser
    }

}


export default connect(mapStateToProps)(Question)