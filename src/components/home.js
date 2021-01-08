import React, { Component } from 'react'
import { connect } from 'react-redux'


class Home extends Component {
  
  render() {
    return (
      <div>
        Home
      </div>
    )
  }
}

function mapStateToProps({authedUser}){
    return{
        authedUser:authedUser
    }

}


export default connect(mapStateToProps)(Home)