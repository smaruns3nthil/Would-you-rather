import React, { Component } from 'react'
import { connect } from 'react-redux'


class Leader extends Component {
  
  render() {
    return (
      <div>
        Leaderboard
      </div>
    )
  }
}

function mapStateToProps({authedUser}){
    return{
        authedUser:authedUser
    }

}


export default connect(mapStateToProps)(Leader)