import React, { Component } from 'react'
import { connect } from 'react-redux'


class Nav extends Component {
  
  render() {
    return (
      <div>
        Nav
      </div>
    )
  }
}
function mapStateToProps({authedUser}){
    return{
        authedUser:authedUser
    }

}

export default connect(mapStateToProps)(Nav)