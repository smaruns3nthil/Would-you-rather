import { connect } from 'react-redux'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { clearAuthedUser } from '../actions/authedUser';
import {handleLogout} from '../actions/logout'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'


class Navb extends Component {

  handleClick = (e) =>{
    this.props.dispatch(clearAuthedUser(this.props.authedUser))
    this.props.dispatch(handleLogout(true))
  } 
  
  render() {
    const {authedUser,users} = this.props
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand style={{marginLeft:'150px'}}>Would You Rather !!!</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav variant="tabs" defaultActiveKey="/">
            <Nav.Item>
              <Nav.Link eventKey='/' as={Link} to="/">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey='/add' as={Link} to="/add">New Question</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey='/leader' as={Link} to="/leaderboard">Leaderboard</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link style= {{marginLeft:'700px'}}eventKey='/logout' onSelect={this.handleClick}>
                <img 
                style={{height:'40px', width:'40px', borderRadius:'25px', margin:'0 5px 0 0'}} 
                alt='avatar' src={`${users[authedUser].avatarURL}`}
                /> 
                  <span style={{fontWeight:'bold'}}>{users[authedUser].name},</span> Logout
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
function mapStateToProps({authedUser,users}){
  return{
      authedUser,
      users,
  }

}

export default connect(mapStateToProps)(Navb)