import React, { Component } from 'react'
import { connect } from 'react-redux'


class Unanswered extends Component {
  
  render() {
    return (
      <div>
        UnAnswered
      </div>
    )
  }
}

function mapStateToProps({authedUser}){
    return{
        authedUser:authedUser
    }

}


export default connect(mapStateToProps)(Unanswered)