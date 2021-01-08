import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser';


class Login extends Component {

  state={
    userId:null
  }

  handleChange = (e) =>{
    e.preventDefault();
    // console.log(e.target.value)
    this.setState({userId:e.target.value})
    // console.log(this.state, 'State')
    this.props.dispatch(setAuthedUser(e.target.value))
  }
  
  render() {
    const {users,authedUser} = this.props 
    const {userId} = this.state
    const selected = userId ? userId: -1
    return (
      <Fragment>
        <label>Choose a user:</label>
        <select name="users" value={selected} onChange={this.handleChange}>
          <option value="-1" disabled>Select user...</option>
          {Object.keys(users).map((id)=>
          <option key={id} value={users[id].id}>{users[id].name}</option>
          )}
        </select>
      </Fragment>
    )
  }
}
function mapStateToProps({ users }){
  return{
      users,
  }

}

export default connect(mapStateToProps)(Login)