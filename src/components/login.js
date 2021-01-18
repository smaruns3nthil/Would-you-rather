import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser';
import { withRouter } from 'react-router-dom'

//Bootstrap
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import './css/login.css'


class Login extends Component {
  
  state={
    userId:null,
  }

  handleChange = (e) =>{
    e.preventDefault();
    this.setState({userId:e.target.value})
    this.props.dispatch(setAuthedUser(e.target.value))
    if(this.props.logout)
    {
      this.props.history.push(`/`)
    }
  }
  
  render() {
    const {users} = this.props 
    const {userId} = this.state
    const selected = userId ? userId: -1
    return (
      <Fragment>
        <Container className="p-3">
          <Jumbotron style={{  height: '50vh', marginTop:'100px'}}>
            <h1 className="header">Would You Rather !!!</h1>
            <h3 className='header'>Please Select User Name to Login</h3>
            <label className='header' style={{display: 'block'}}>Choose a user:</label>
            <select
            style={{
              display:'block',
              margin:'15px auto',
              padding:'5px',
              width:'200px'
              }} 
            name="users" value={selected} onChange={this.handleChange}>
              <option value="-1" disabled>Select user...</option>
              {Object.keys(users).map((id)=>
              <option key={id} value={users[id].id}>{users[id].name}</option>
              )}
            </select>          
           </Jumbotron>
          </Container>
      </Fragment>
    )
  }
}
function mapStateToProps({ users,logout }){
  return{
      users,
      logout
  }

}

export default withRouter(connect(mapStateToProps)(Login))