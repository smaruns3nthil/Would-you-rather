import React, { Component } from 'react'
import { connect } from 'react-redux'


class Question extends Component {
  
  render() {
    return (
      <div>
        Question Card
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