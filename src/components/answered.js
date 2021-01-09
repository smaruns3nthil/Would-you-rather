import React, { Component } from 'react'
import { connect } from 'react-redux'


class Answered extends Component {
  
  render() {
    return (
      <div>
        Answered
      </div>
    )
  }
}

function mapStateToProps({authedUser}){
    return{
        authedUser:authedUser
    }

}


export default connect(mapStateToProps)(Answered)