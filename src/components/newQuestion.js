import React, { Component } from 'react'
import { connect } from 'react-redux'


class Add extends Component {
  
  render() {
    return (
      <div>
        New Question
      </div>
    )
  }
}

function mapStateToProps({authedUser}){
    return{
        authedUser:authedUser
    }

}


export default connect(mapStateToProps)(Add)