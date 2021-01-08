import React, { Component } from 'react'
import { connect } from 'react-redux'


class Error extends Component {
  
  render() {
    return (
      <div>
        404
      </div>
    )
  }
}

function mapStateToProps({authedUser}){
    return{
        authedUser:authedUser
    }

}


export default connect(mapStateToProps)(Error)