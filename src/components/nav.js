import { connect } from 'react-redux'
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { clearAuthedUser } from '../actions/authedUser';
import {handleLogout} from '../actions/logout'

class Nav extends Component {

  handleClick = (e) =>{
    this.props.dispatch(clearAuthedUser(this.props.authedUser))
    this.props.dispatch(handleLogout(true))
  } 
  
  render() {
    return (
      <nav>
      <ul>
        <li>
          <NavLink to='/' exact activeClassName='active'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/add' activeClassName='active'>
            New Question
          </NavLink>
        </li>
        <li>
          <NavLink to='/leader' activeClassName='active'>
            Leaderboard
          </NavLink>
        </li>
        <li>{this.props.authedUser}</li>
        <li onClick={this.handleClick}>Log out</li>
      </ul>
    </nav>
    )
  }
}
function mapStateToProps({authedUser}){
  return{
      authedUser:authedUser
  }

}

export default connect(mapStateToProps)(Nav)