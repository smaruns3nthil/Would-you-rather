import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'



class Login extends Component {

  state = {
    loading:false
  }

  componentDidMount() {
    setTimeout(function(){ this.setState({loading:true}) }, 1000);
    // this.setState({loading:true})
  }
  
  render() {
    return (
      <div>
        Login
        {console.log(this.props.users)}
      </div>
    )
  }
}

function mapStateToProps({ authedUser,users }){
  return{
      authedUser,
      users
  }

}


export default connect(mapStateToProps)(Login)