import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Login from './login'
import Home from './home'
import Nav from './nav'
import Leader from './leader'
import Add from './newQuestion'

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  
  render() {
    return (
      <Router>
        <div>
          {this.props.authedUser === null ?(
            <Route  render={()=>(
              <div>
                <Login/>
              </div>
            )} />
          ):(
            <Fragment>
              <Nav/>
              <div>
                <Route path='/' exact component={Home}/>
                <Route path='/add' component={Add}/>
                <Route path='/leader' exact component={Leader}/>
              </div>
            </Fragment>
          )}
        </div>
      </Router>
    )
  }
}

function mapStateToProps({ authedUser }){
  return{
      authedUser:authedUser
  }

}


export default connect(mapStateToProps)(App)